"use client"

import { useState } from "react"
import { H2, Subtitle, Quote, Body } from "@/components/atoms/Typography"
import { IconCard } from "@/components/molecules/IconCard"
import { ContentModal } from "@/components/organisms/ContentModal"
import { Brain, Cast as Mask, Users } from "lucide-react"

export const EspelhoSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" })

  const cards = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Reconhecimento tardio",
      description: "Descobrindo-se neurodivergente na vida adulta",
      content: `Reconhecimento Tardio

Descobrir-se neurodivergente na vida adulta é como finalmente encontrar a peça que faltava no quebra-cabeça da própria vida.

De repente, tudo faz sentido:
• Por que sempre se sentiu diferente
• Por que certas situações eram tão exaustivas
• Por que precisava de mais tempo, mais silêncio, mais espaço

O reconhecimento tardio não é perda de tempo. É reencontro consigo mesma.

Você não mudou. Apenas finalmente se vê com clareza.`,
    },
    {
      icon: <Mask className="w-8 h-8" />,
      title: "Mascaramento",
      description: "Compreendendo o custo de esconder quem somos",
      content: `Mascaramento

Por anos, você aprendeu a esconder. A imitar. A moldar-se para caber.

O mascaramento é o esforço invisível de parecer "normal":
• Forçar contato visual quando é desconfortável
• Rir de piadas que não entende
• Esconder seus interesses intensos
• Fingir que barulhos não incomodam

Mas esse esforço tem custo. Exaustão. Burnout. Perda de si mesma.

Reconhecer o mascaramento é o primeiro passo para parar de se esconder.`,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade",
      description: "Encontrando outras que também refletem diferente",
      content: `Comunidade

Você não está sozinha.

Existem outras mulheres que:
• Também descobriram tarde
• Também se cansaram de mascarar
• Também sentem o mundo com intensidade
• Também pensam em padrões únicos

Encontrar comunidade é encontrar espelho. É perceber que sua forma de ser não é defeito — é diversidade.

Aqui, você pode finalmente tirar a máscara. E respirar.`,
    },
  ]

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content })
    setModalOpen(true)
  }

  return (
    <>
      <section id="espelho" className="py-16 md:py-24 bg-neutral-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <H2 className="mb-4">O Espelho-d'Água</H2>
            <Subtitle>Neurodiversidade em mulheres</Subtitle>

            <Quote className="my-8 text-left">
              "Nem todo labirinto é prisão — alguns são apenas formas diferentes de pensar."
            </Quote>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Body>
              O Espelho é o mar que reflete sem distorcer. Um espaço de reconhecimento profundo para mulheres
              neurodivergentes, onde finalmente é possível ver-se com clareza e compaixão. Aqui, o reflexo não julga,
              não corrige, não tenta moldar — apenas devolve o que é verdadeiro e belo em sua singularidade.
            </Body>

            <Body>
              É o lugar onde autismo, TDAH e outras formas de pensar são celebradas como diversidade legítima, não como
              desvio. Onde os padrões rígidos se dissolvem como névoa sobre a água, revelando a riqueza de mentes que
              processam o mundo em cores, sons e texturas únicas.
            </Body>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Body>
              Para tantas mulheres, este reconhecimento chega tarde — após anos de mascaramento, de tentar encaixar-se
              em moldes que nunca foram feitos para elas. O Espelho-d'Água oferece um momento de pausa, de respiro, de
              finalmente poder dizer: "Aqui está quem eu sempre fui."
            </Body>

            <Body>
              Não é sobre consertar ou normalizar. É sobre compreender, honrar e encontrar beleza nas formas diferentes
              de navegar a vida. Porque pensar diferente não é menos — é outra coisa, com sua própria profundidade e
              graça.
            </Body>
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
