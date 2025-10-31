"use client"

import { useState } from "react"
import Image from "next/image"
import { H2, Subtitle, Quote, Body } from "@/components/atoms/Typography"
import { IconCard } from "@/components/molecules/IconCard"
import { ContentModal } from "@/components/organisms/ContentModal"
import { BookOpen, Palette, Home } from "lucide-react"

export const PraiaSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" })

  const cards = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Livros ilustrados",
      description: "Histórias que celebram diferenças com poesia",
      content: `Livros Ilustrados

Toda criança merece ver-se refletida em histórias bonitas.

Livros que celebram:
• Crianças que pensam diferente
• Crianças que sentem intensamente
• Crianças que precisam de mais tempo
• Crianças que veem o mundo em cores únicas

Histórias que não tentam consertar. Apenas celebram.

Livros que conversam em linguagem poética, sensorial, verdadeira.

Porque representatividade importa. E toda criança neurodivergente merece protagonizar sua própria história.

Em breve, você encontrará aqui indicações de livros que honram a neurodiversidade com delicadeza e beleza.`,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Recursos sensoriais",
      description: "Materiais que honram formas diversas de aprender",
      content: `Recursos Sensoriais

Nem toda criança aprende da mesma forma.

Algumas aprendem:
• Pelo toque
• Pelo movimento
• Pelos sons
• Pelas texturas

Recursos sensoriais respeitam essas diferenças.

Materiais que:
• Acalmam quando o mundo está muito barulhento
• Estimulam quando o corpo precisa se mover
• Organizam quando a mente está dispersa

Não é sobre "consertar". É sobre oferecer ferramentas que respeitam a forma única de cada criança habitar o mundo.

Em breve, você encontrará aqui sugestões de recursos sensoriais que honram a neurodiversidade.`,
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Para famílias",
      description: "Guias gentis para acompanhar com amor",
      content: `Para Famílias

Criar uma criança neurodivergente é aprender uma nova linguagem.

É entender que:
• O que funciona para outras crianças pode não funcionar para a sua
• Seu filho não é "difícil", é diferente
• Amor não basta, mas é o começo

Guias para famílias oferecem:
• Informação sem julgamento
• Estratégias práticas
• Acolhimento para o cansaço
• Celebração das pequenas vitórias

Porque você não precisa ser perfeito. Precisa ser presente.

E presente, você já é.

Em breve, você encontrará aqui materiais que ajudam famílias a acompanhar crianças neurodivergentes com amor e respeito.`,
    },
  ]

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content })
    setModalOpen(true)
  }

  return (
    <>
      <section id="praia" className="py-16 md:py-24 bg-neutral-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-a-praia-axkjk5EMQj6jH30jcljws7rPtBHa02.png"
                alt="Crianças brincando na praia com baldes coloridos"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <H2>A Praia</H2>
              <Subtitle>Infâncias Neurodiversas</Subtitle>

              <Quote>
                "Nem toda viagem precisa ser longa. Algumas começam na areia, com o pé descalço e o coração curioso."
              </Quote>

              <Body>
                A Praia é o chão firme e curioso da infância. O lugar onde brincar é forma legítima de existir e
                aprender. Onde construir castelos de areia com lógica própria é tão válido quanto seguir o manual. Onde
                pensar diferente não é problema a ser resolvido, mas jeito único de habitar o mundo.
              </Body>

              <Body>
                Aqui celebramos as crianças neurodivergentes em toda sua diversidade: aquelas que enxergam padrões onde
                outros veem caos, que sentem texturas com intensidade poética, que constroem universos inteiros na
                imaginação. As que precisam de mais tempo, mais silêncio, mais movimento. As que aprendem pelos
                sentidos, pelas mãos, pelo coração.
              </Body>

              <Body>
                A Praia não tenta moldar ou normalizar — ela oferece espaço para ser. Oferece histórias que espelham
                essas experiências com delicadeza e cor. Livros e e-books que conversam com as crianças em linguagem que
                elas entendem: poética, sensorial, verdadeira. Material que ajuda adultos a enxergarem a
                neurodiversidade não como diagnóstico frio, mas como jeito de ser que merece respeito e celebração.
              </Body>

              <Body>
                Porque toda criança merece ver-se refletida em histórias bonitas. E toda infância neurodiversa merece
                ser vivida com plenitude, não com correção.
              </Body>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card) => (
              <div key={card.title} onClick={() => openModal(card.title, card.content)} className="cursor-pointer">
                <IconCard icon={card.icon} title={card.title} description={card.description} />
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
