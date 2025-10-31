import Image from "next/image"
import { H2, Subtitle, Body } from "@/components/atoms/Typography"
import { Instagram, Mail, FileText } from "lucide-react"
import { WaveDivider } from "@/components/atoms/WaveDivider"

export const TravessiaSection = () => {
  return (
    <>
      <section id="travessia" className="py-16 md:py-24 bg-neutral-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <H2>A travessia é tua</H2>
                <Subtitle className="mt-4">Eu apenas acendo as luzes no caminho</Subtitle>
              </div>

              <Body>
                Chegamos ao fim desta apresentação, mas a jornada continua. Cada enseada, cada espelho, cada cais e cada
                praia seguem aqui — esperando por você, sem pressa, sem julgamento. Este espaço existe para que você
                possa voltar sempre que precisar: para respirar, para reconhecer-se, para descansar, para celebrar.
              </Body>

              <Body>
                Escutas e Travessias não é sobre ter respostas prontas ou caminhos mapeados. É sobre criar espaços onde
                seja possível ser quem somos, com toda a nossa complexidade e beleza. Onde neurodiversidade seja vista
                como riqueza, não como desvio. Onde cuidado seja ato de amor que inclui a si mesmo.
              </Body>

              <Body>
                Se estas palavras tocaram algo em você, se alguma carta futura puder iluminar um dia difícil — então
                este trabalho já cumpriu seu propósito. Porque a beleza não está em transformar ninguém, mas em criar
                espaços onde cada um possa florescer do seu jeito.
              </Body>

              <div className="pt-6 border-t border-primary-brown/20">
                <p className="text-xl font-serif font-semibold text-primary-brown mb-2">por Scheilla Soares</p>
                <p className="text-sm italic text-primary-brown/70 mb-6">
                  psicologia, neurodiversidade e criação sensível
                </p>

                <div className="flex gap-4">
                  <a
                    href="#" // TODO: Add Instagram link
                    className="flex items-center gap-2 px-4 py-2 bg-primary-orange text-white rounded-lg hover:scale-105 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="#" // TODO: Add Substack link
                    className="flex items-center gap-2 px-4 py-2 bg-primary-brown text-white rounded-lg hover:scale-105 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Substack</span>
                  </a>
                  <a
                    href="#contato"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-taupe text-primary-brown rounded-lg hover:bg-primary-brown hover:text-white transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contato</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-a-travesia-e-tua-Pc6P0cmUX733oCwbXnQ3neO1cWk2i7.png"
                alt="Farol iluminado em uma colina com caminho de pedras"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <WaveDivider color="#ffffff" />
    </>
  )
}
