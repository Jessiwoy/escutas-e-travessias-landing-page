"use client"

import { useState } from "react"
import Image from "next/image"
import { H2, Body } from "@/components/atoms/Typography"
import { ContentModal } from "@/components/organisms/ContentModal"

export const ConviteSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" })

  const cards = [
    {
      title: "Para você que cuida",
      description: "E esquece de cuidar de si mesma",
      bgColor: "bg-primary-brown/80",
      textColor: "text-white",
      content: `Para Você Que Cuida

Você que cuida de todos, menos de si mesma.

Você que coloca as necessidades dos outros sempre na frente das suas.

Você que se sente culpada quando para, mesmo que por um minuto.

Este espaço é para você.

Aqui, você pode:
• Respirar sem pressa
• Descansar sem culpa
• Existir sem ter que justificar

Cuidar de si não é egoísmo. É sobrevivência.

Você não pode dar do que não tem. E para ter, você precisa receber.

Comece pequeno:
• Um minuto de silêncio
• Uma xícara de chá quente
• Uma respiração profunda

Você merece cuidado. Inclusive o seu próprio.`,
    },
    {
      title: "Para você que se descobriu",
      description: "E ainda está aprendendo a se reconhecer",
      bgColor: "bg-primary-orange/70",
      textColor: "text-white",
      content: `Para Você Que Se Descobriu

Descobrir-se neurodivergente é como ganhar um mapa de um território que você já habitava, mas não entendia.

De repente, os caminhos fazem sentido.
As dificuldades têm nome.
As diferenças têm explicação.

Mas o reconhecimento também traz dúvidas:
• E agora?
• Como vivo com essa informação?
• Quem eu sou realmente?

A resposta é: você sempre foi você.

O diagnóstico não mudou quem você é. Apenas iluminou.

Agora você pode:
• Parar de se forçar a ser quem não é
• Respeitar seus limites
• Celebrar suas diferenças

Bem-vinda ao reencontro consigo mesma.`,
    },
    {
      title: "Para você que busca",
      description: "Palavras para o que não sabe nomear",
      bgColor: "bg-primary-gold/70",
      textColor: "text-primary-brown",
      content: `Para Você Que Busca

Você sente que algo está faltando, mas não sabe o quê.

Você procura palavras para sentimentos que não cabem em definições.

Você quer entender, mas não sabe por onde começar.

Este espaço é para você.

Aqui, não há respostas prontas. Há convites:
• Para pausar
• Para sentir
• Para explorar

A busca não precisa ter destino certo.
Às vezes, o caminho é mais importante que a chegada.

Comece onde você está:
• Leia uma carta
• Respire fundo
• Observe o que ressoa

As palavras certas vão te encontrar.
Você só precisa estar aberta para recebê-las.`,
    },
  ]

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content })
    setModalOpen(true)
  }

  return (
    <>
      <section id="convite" className="py-16 md:py-24 bg-neutral-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <H2 className="mb-8">O Convite</H2>

            <div className="max-w-3xl mx-auto space-y-4">
              <Body>
                Talvez você tenha chegado aqui buscando respostas. Talvez esteja cansada de buscar. Talvez apenas
                precise de um lugar onde possa respirar sem ter que explicar-se. Seja qual for o seu motivo, saiba que
                este espaço foi criado pensando em você.
              </Body>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {cards.map((card, index) => (
              <div
                key={card.title}
                onClick={() => openModal(card.title, card.content)}
                className={`${card.bgColor} ${card.textColor} p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105`}
              >
                <h3 className="text-xl font-serif font-semibold mb-2">{card.title}</h3>
                <p className="text-sm opacity-90">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-convite-bgwc9j06PbP0JeKJgyJF14OiwyYbVJ.png"
                alt="Mãos segurando uma concha branca"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Body>
              Não há pressa aqui. Não há expectativas. Não há jeito certo de fazer esta travessia. Você pode começar
              pela Enseada e aprender a respirar. Pode ir direto ao Espelho e buscar reconhecimento. Pode ancorar no
              Cais quando o cansaço apertar. Ou simplesmente sentar na Praia e lembrar-se de como é bom ser curiosa.
            </Body>

            <div className="bg-primary-gold/20 rounded-lg p-6 md:p-8 border-l-4 border-primary-gold">
              <Body className="font-medium">
                "A beleza possível não está em chegar a algum lugar. Está em honrar cada passo da jornada — inclusive os
                que parecem retrocesso."
              </Body>
            </div>

            <Body>
              Este é o convite: venha como está. Traga seu cansaço, suas dúvidas, sua neurodiversidade, suas lutas, seus
              filhos, seu medo, sua força. Traga tudo. E encontre aqui um lugar onde tudo isso pode simplesmente
              existir.
            </Body>

            <Body>
              Porque você não precisa ser diferente para pertencer. Você já pertence. Sempre pertenceu. E esta
              travessia? Ela começa exatamente onde você está agora.
            </Body>
          </div>
        </div>
      </section>

      <ContentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </>
  )
}
