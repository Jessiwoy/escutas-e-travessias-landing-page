"use client"

import { useState } from "react"
import { H2, Quote, Body } from "@/components/atoms/Typography"
import { ContentModal } from "@/components/organisms/ContentModal"

export const CartasSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" })

  const cartas = [
    {
      title: "Cartas para mães cansadas",
      description: "Quando o amor pesa mais do que você imaginava",
      borderColor: "border-primary-brown",
      content: `Cartas para Mães Cansadas

Querida mãe cansada,

Eu sei. Você está exausta de um jeito que o sono não resolve.

O cansaço não é só do corpo. É da alma que carrega tanto amor que às vezes esquece de si mesma.

Você acorda pensando no que precisa fazer. Dorme (quando dorme) pensando no que não conseguiu. A lista nunca acaba. A culpa nunca descansa.

Mas eu preciso te dizer algo:

Você está fazendo o suficiente. Você É suficiente.

O amor que você oferece não precisa ser perfeito. Precisa ser verdadeiro. E ele é.

Descanse quando puder. Chore quando precisar. Peça ajuda sem culpa.

Você não precisa ser super-heroína. Precisa ser humana.

E humana, você já é. Lindamente humana.

Com carinho,
Alguém que também se cansa`,
    },
    {
      title: "Cartas sobre reconhecimento",
      description: "O que muda quando finalmente nos vemos",
      borderColor: "border-primary-orange",
      content: `Cartas sobre Reconhecimento

Querida,

Descobrir-se neurodivergente na vida adulta é como finalmente encontrar a luz no fim de um túnel que você nem sabia que estava atravessando.

De repente, tudo faz sentido:
• Por que você sempre se sentiu diferente
• Por que certas coisas eram tão difíceis
• Por que você precisava de mais tempo, mais silêncio, mais espaço

Você não mudou. Apenas finalmente se vê.

E ver-se é libertador. É doloroso. É alívio e luto ao mesmo tempo.

Luto pelo tempo perdido tentando ser quem você não é.
Alívio por finalmente poder ser quem você sempre foi.

O reconhecimento não é o fim. É o começo.

Começo de uma vida onde você não precisa mais se esconder.

Bem-vinda de volta a você mesma.`,
    },
    {
      title: "Cartas sobre beleza possível",
      description: "Encontrando graça no meio do caos",
      borderColor: "border-primary-gold",
      content: `Cartas sobre Beleza Possível

Querida,

A beleza não está em ter tudo sob controle.
Está em aceitar que o controle é ilusão.

A beleza possível é:
• O sorriso do seu filho depois de um dia difícil
• A xícara de café que você toma ainda quente
• O minuto de silêncio que você rouba para respirar
• A força que você não sabia que tinha

A beleza não está na perfeição. Está na gentileza com que você trata seu próprio cansaço.

Está em continuar, mesmo quando é difícil.
Está em pedir ajuda, mesmo quando é duro.
Está em descansar, mesmo quando a culpa grita.

A beleza possível é você, exatamente como está.

Cansada. Forte. Imperfeita. Linda.

Você é a beleza possível.`,
    },
  ]

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content })
    setModalOpen(true)
  }

  return (
    <>
      <section id="cartas" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <H2 className="mb-4">Cartas da Travessia</H2>

            <Quote className="my-8 text-left">"Se ainda não souber por onde começar, leia uma carta."</Quote>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Body>
              Há dias em que precisamos apenas de palavras que nos encontrem onde estamos. Não soluções prontas, não
              fórmulas mágicas — apenas alguém que já atravessou mares parecidos e deixou mensagens na areia para quem
              vem depois.
            </Body>

            <Body>
              As Cartas da Travessia são isso: textos e reflexões que atravessam o cotidiano e voltam como respiro.
              Escritas com a honestidade de quem conhece o cansaço, a solidão, a intensidade de existir sendo
              neurodivergente ou criando alguém neurodivergente neste mundo ainda tão rígido.
            </Body>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Body>
              São cartas sobre o que ninguém fala: a culpa de não ser suficiente, o medo de falhar, a exaustão de
              explicar-se sempre. Mas também sobre a beleza escondida nos dias difíceis, sobre a força que cresce
              silenciosa, sobre os momentos de graça que surgem quando paramos de lutar contra nós mesmos.
            </Body>

            <Body>
              Cada carta é um convite: à pausa, à escuta interna, à compaixão com o que somos. Um lembrete de que não
              estamos sozinhos nessa travessia, mesmo quando parece que estamos navegando à deriva.
            </Body>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {cartas.map((carta) => (
              <div
                key={carta.title}
                onClick={() => openModal(carta.title, carta.content)}
                className={`p-6 md:p-8 bg-neutral-cream rounded-lg border-l-4 ${carta.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1`}
              >
                <h3 className="text-xl font-serif font-semibold text-primary-brown mb-3 group-hover:text-primary-orange transition-colors">
                  {carta.title}
                </h3>
                <p className="text-sm text-primary-brown/80">{carta.description}</p>
              </div>
            ))}
          </div>

          <Body className="text-center italic">
            Leia devagar. Deixe as palavras pousarem. E se uma carta tocar fundo demais, guarde-a no coração — ela foi
            escrita para você.
          </Body>
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
