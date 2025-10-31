"use client"

import { useState } from "react"
import { H2, Subtitle, Quote, Body } from "@/components/atoms/Typography"
import { ContentModal } from "@/components/organisms/ContentModal"

export const CaisSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" })

  const timeline = [
    {
      number: 1,
      title: "O diagnóstico",
      description: "Quando o mundo se reorganiza",
      content: `O Diagnóstico

O dia em que o diagnóstico chega é o dia em que o mundo se reorganiza.

De repente, tudo ganha novo significado:
• Os comportamentos que você não entendia
• As dificuldades que pareciam inexplicáveis
• O sentimento de que algo era diferente

O diagnóstico não muda quem seu filho é. Apenas dá nome ao que sempre esteve lá.

E com o nome, vem o caminho. Vem a possibilidade de ajudar de forma mais precisa. Vem o alívio de finalmente entender.

Mas também vem o medo. A incerteza. O luto pelo futuro que você imaginou.

Tudo isso é válido. Tudo isso é parte da travessia.`,
    },
    {
      number: 2,
      title: "A busca",
      description: "Terapias, escolas, informação",
      content: `A Busca

Depois do diagnóstico, começa a busca.

Terapias. Escolas. Profissionais. Informação. Você se torna pesquisadora, advogada, terapeuta, professora.

A lista de tarefas não tem fim:
• Agendar consultas
• Pesquisar métodos
• Brigar por direitos
• Adaptar a casa
• Explicar para a família

Você faz tudo isso porque ama. Porque quer o melhor. Porque não desiste.

Mas no meio da busca, não esqueça: você também precisa de cuidado.`,
    },
    {
      number: 3,
      title: "O esgotamento",
      description: "Quando o corpo pede pausa",
      content: `O Esgotamento

Chega um momento em que o corpo não aguenta mais.

O esgotamento não avisa. Ele se acumula:
• Noites mal dormidas
• Preocupação constante
• Demandas sem fim
• Culpa por não fazer mais

Você se sente vazia. Irritada. Distante. Como se estivesse apenas sobrevivendo.

O esgotamento não é fraqueza. É sinal de que você deu demais sem receber de volta.

É hora de parar. De pedir ajuda. De lembrar que você também importa.

Cuidar de si não é egoísmo. É necessidade.`,
    },
    {
      number: 4,
      title: "O recomeço",
      description: "Aprendendo a cuidar também de si",
      content: `O Recomeço

O recomeço não é voltar ao que era antes. É aprender uma nova forma de existir.

É entender que:
• Você não precisa fazer tudo sozinha
• Descansar não é falhar
• Seu bem-estar importa tanto quanto o do seu filho
• Pedir ajuda é força, não fraqueza

O recomeço é encontrar equilíbrio. É criar rituais de cuidado. É estabelecer limites.

É lembrar que você não é apenas mãe. Você também é pessoa. Com necessidades. Com sonhos. Com direito ao descanso.

O amor que você oferece precisa incluir você mesma.`,
    },
  ]

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content })
    setModalOpen(true)
  }

  return (
    <>
      <section id="cais" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <H2 className="mb-4">O Cais</H2>
            <Subtitle>Maternidade Atípica</Subtitle>

            <Quote className="my-8 text-left">
              "Entre o amor imenso e o cansaço sem nome, há um lugar onde você também existe."
            </Quote>
          </div>

          <div className="space-y-6 mb-12">
            <Body>
              O Cais é o porto de quem cuida. O lugar de atracação para corações que navegam mares turbulentos,
              carregando tanto amor que às vezes esquecem de si mesmo. Aqui, as mães atípicas — aquelas que criam filhos
              neurodivergentes, ou que são neurodivergentes elas mesmas, ou ambos — podem finalmente ancorar e
              descansar.
            </Body>

            <Body>
              É o espaço que reconhece a intensidade dessa travessia: o amor que não cabe no peito, a exaustão que não
              tem medida, as noites sem fim, as conquistas que ninguém mais vê como vitórias. A culpa que visita nas
              madrugadas. A solidão de sentir-se incompreendida. E também a força absurda de continuar, dia após dia,
              reinventando o cuidado.
            </Body>
          </div>

          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-taupe/40 -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {timeline.map((item) => (
                <div
                  key={item.number}
                  onClick={() => openModal(item.title, item.content)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-full bg-neutral-cream border-4 border-primary-brown flex items-center justify-center text-2xl font-serif font-bold text-primary-brown mb-4 relative z-10 group-hover:bg-primary-gold group-hover:scale-110 transition-all duration-300 shadow-md">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary-brown mb-2 group-hover:text-primary-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-brown/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Body className="mb-8">
            No Cais, você encontra cartas escritas por quem também navega essas águas. Rituais simples nascidos da vida
            real, não de manuais que ignoram a complexidade do cotidiano. Práticas de descanso que cabem entre uma
            demanda e outra. E a lembrança constante: você também merece existir nessa história. O amor que você oferece
            precisa incluir você mesma.
          </Body>

          <div className="bg-primary-gold/20 rounded-lg p-6 md:p-8 border-l-4 border-primary-gold">
            <Body className="font-medium">
              Aqui, o amor também aprende a descansar. Porque cuidar é travessia longa, e toda travessia precisa de
              portos seguros.
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
