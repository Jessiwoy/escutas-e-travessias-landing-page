import Image from "next/image"
import { H2, Subtitle, Body } from "@/components/atoms/Typography"

export const SobreSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-cream/30 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-nascente-e-o-mar-0wO1THo5KConyRStl2QFW0kL4rWOyS.png"
              alt="Oceano dourado ao pôr do sol com reflexos na água"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <H2>Entre a nascente e o mar</H2>
              <Subtitle className="mt-4">O encontro das águas que me ensinaram a escutar</Subtitle>
            </div>

            <Body>Aprendi cedo que a vida é feita de fragilidades e belezas entrelaçadas.</Body>

            <Body>
              Na infância, convivi com uma menina cuja breve passagem me ensinou o valor de cada gesto e a profundidade
              do cuidado. Foi ali que nasceu minha escuta — essa forma de estar com o outro que me acompanha desde
              então.
            </Body>

            <Body>
              Escolhi a Educação Especial muito jovem e, antes mesmo da maternidade atípica, já trabalhava há mais de
              dez anos com crianças e famílias que me ensinaram o que é humanidade em estado puro. Quando a maternidade
              chegou, aprendi de novo — e de um modo que nenhuma formação prepara.
            </Body>

            <Body>
              Por mais que às vezes eu tente me afastar, acabo sempre retornando ao mesmo lugar. É chamado, é legado —
              e, talvez, um pouco sina.
            </Body>

            <Body className="font-medium text-lg">
              O Escutas e Travessias nasce desse caminho: é o espaço onde compartilho o que aprendi e continuo
              aprendendo.
            </Body>

            <Body>
              Todas essas vivências me ensinaram a olhar para uma pessoa com deficiência ou neurodivergente e reconhecer
              que, naquele corpo que às vezes não consegue se expressar, habita uma alma feita da mesma essência e
              movida pelos mesmos sentimentos — com o direito de ser tratada com o mesmo respeito e dignidade que
              devemos a qualquer outro ser humano.
            </Body>
          </div>
        </div>
      </div>
    </section>
  )
}
