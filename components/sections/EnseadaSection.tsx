"use client"

import { useState } from "react"
import Image from "next/image"
import { H2, Subtitle, Quote, Body } from "@/components/atoms/Typography"
import { ContentModal } from "@/components/organisms/ContentModal"
import { Wind, Flower2, Heart } from "lucide-react"

export const EnseadaSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" })

  const cards = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Práticas de respiro",
      description: "Exercícios suaves para voltar ao presente",
      borderColor: "border-primary-brown",
      content: `Práticas de Respiro

Respirar é o gesto mais simples e mais esquecido. Entre uma tarefa e outra, entre uma demanda e outra, o corpo pede pausa — mas raramente escutamos.

Aqui estão práticas suaves de respiração consciente:

• Respiro 4-7-8: Inspire por 4 segundos, segure por 7, expire por 8. Repita 3 vezes.
• Respiro da onda: Imagine que sua respiração é uma onda que vem e vai, sem pressa.
• Pausa entre respirações: Após expirar, pause por 2 segundos antes de inspirar novamente.

Não precisa ser perfeito. Apenas respire.`,
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: "Micropausas",
      description: "Momentos breves que restauram a energia",
      borderColor: "border-primary-orange",
      content: `Micropausas

Você não precisa de horas para descansar. Às vezes, 2 minutos são suficientes para restaurar a energia.

Experimente estas micropausas:

• Feche os olhos por 60 segundos e respire fundo
• Alongue os braços acima da cabeça e solte
• Olhe pela janela e observe algo da natureza
• Beba água devagar, sentindo o frescor
• Coloque a mão no coração e sinta ele bater

Pequenos gestos. Grande diferença.`,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Gestos de cuidado",
      description: "Rituais simples para recomeçar",
      borderColor: "border-primary-gold",
      content: `Gestos de Cuidado

Cuidar de si não precisa ser elaborado. Pode ser um gesto simples, repetido com intenção.

Rituais que acolhem:

• Acenda uma vela antes de começar o dia
• Prepare seu chá ou café com atenção plena
• Escreva 3 coisas pelas quais é grata hoje
• Massageie suas mãos com creme, devagar
• Ouça uma música que acalma seu coração

O cuidado mora nos detalhes. Comece pequeno.`,
    },
  ]

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content })
    setModalOpen(true)
  }

  return (
    <>
      <section id="enseada" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <H2>A Enseada</H2>
              <Subtitle>Autocuidado e respiro</Subtitle>

              <Quote>"Às vezes, cuidar de si é apenas aprender a respirar entre as tarefas."</Quote>

              <Body>
                A Enseada é o lugar sagrado do corpo e da pausa consciente. Um refúgio onde o tempo desacelera e você
                pode finalmente ouvir sua própria respiração. Aqui, o cuidado não precisa ser grandioso ou elaborado —
                ele mora nos gestos simples, nas micropausas que nos trazem de volta para casa.
              </Body>

              <Body>
                É o espaço onde aprendemos que descansar não é luxo, mas necessidade. Onde a beleza possível não está na
                perfeição, mas na gentileza com que tratamos nosso cansaço. Entre areia molhada e brisa suave, a Enseada
                nos lembra: você também merece ser cuidado.
              </Body>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-enseada-myEXaSUNnQWYMJMrLLc3FonvpQOKj8.png"
                alt="Enseada serena com água turquesa e vegetação tropical"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                onClick={() => openModal(card.title, card.content)}
                className={`p-6 md:p-8 bg-neutral-cream rounded-lg border-l-4 ${card.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1`}
              >
                <div className="text-primary-orange group-hover:scale-110 transition-transform duration-300 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary-brown mb-3 group-hover:text-primary-orange transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-primary-brown/80">{card.description}</p>
              </div>
            ))}
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
