"use client"

import type React from "react"
import { useState } from "react"
import { H2, Subtitle, Body } from "@/components/atoms/Typography"
import { Button } from "@/components/atoms/Button"
import { ChevronDown } from "lucide-react"

export const ContatoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "Neurodiversidade",
    message: "",
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona o acompanhamento?",
      answer:
        "O acompanhamento é personalizado e respeita o ritmo de cada pessoa. Trabalhamos com escuta ativa, acolhimento e estratégias práticas que cabem na vida real. Não há fórmulas prontas — cada travessia é única.",
    },
    {
      question: "Atende online?",
      answer:
        "Sim! Os atendimentos são realizados online, o que permite maior flexibilidade e conforto. Você pode estar no seu espaço seguro enquanto conversamos.",
    },
    {
      question: "Trabalha com crianças?",
      answer:
        "O foco principal é o acompanhamento de mães atípicas e mulheres neurodivergentes. Para crianças, ofereço orientação parental, ajudando famílias a compreenderem e acompanharem suas infâncias neurodiversas com mais leveza.",
    },
    {
      question: "Preciso de diagnóstico para começar?",
      answer:
        "Não é necessário ter diagnóstico formal. Se você se identifica com as questões da neurodiversidade ou da maternidade atípica, este espaço é para você. O diagnóstico pode vir depois, se fizer sentido na sua jornada.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log("[v0] Form submitted:", formData)
    alert("Mensagem enviada! Em breve entraremos em contato.")
    setFormData({ name: "", email: "", whatsapp: "", subject: "Neurodiversidade", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-gradient-to-br from-primary-orange/10 via-neutral-cream/50 to-primary-gold/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <H2 className="mb-4">Entre em contato</H2>
          <Subtitle>Aqui, você encontra um espaço seguro. Entre em contato agora mesmo.</Subtitle>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-primary-brown mb-6">Dúvidas frequentes</h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-cream/30 transition-colors duration-200"
                  >
                    <span className="font-medium text-primary-brown pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-orange flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <Body className="text-sm">{faq.answer}</Body>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-brown mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-cream/30 border border-neutral-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange text-primary-brown transition-all duration-200"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-brown mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-cream/30 border border-neutral-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange text-primary-brown transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-primary-brown mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-cream/30 border border-neutral-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange text-primary-brown transition-all duration-200"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-brown mb-2">
                  Sobre o que você gostaria de falar?
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-cream/30 border border-neutral-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange text-primary-brown transition-all duration-200"
                >
                  <option value="Neurodiversidade">Neurodiversidade</option>
                  <option value="Maternidade Atípica">Maternidade Atípica</option>
                  <option value="Orientação Parental">Orientação Parental</option>
                  <option value="Mentoria">Mentoria</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-brown mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-cream/30 border border-neutral-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange text-primary-brown resize-none transition-all duration-200"
                  placeholder="Conte um pouco sobre o que você precisa..."
                />
              </div>

              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
