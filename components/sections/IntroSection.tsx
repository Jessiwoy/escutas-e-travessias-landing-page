"use client"

import Image from "next/image"
import { H1, Subtitle, Quote, Body } from "@/components/atoms/Typography"
import { Button } from "@/components/atoms/Button"

export const IntroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("enseada")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="intro" className="py-16 md:py-24 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <H1>Escutas e Travessias</H1>
              <Subtitle className="mt-4">um lugar para respirar, pertencer e existir com beleza</Subtitle>
            </div>

            <Quote>"Há caminhos que não começam com passos, mas com silêncio."</Quote>

            <div className="space-y-4">
              <Body>
                Bem-vindo a um espaço de cuidado, neurodiversidade e beleza possível. Aqui existem enseadas que acolhem,
                espelhos que refletem sem julgamento, cais que oferecem descanso, e praias onde a curiosidade brinca
                livremente. Cada lugar tem sua forma particular de abraçar, ensinar e transformar.
              </Body>
              <Body>
                Este é um convite para pausar, respirar e reconhecer a beleza que existe em cada forma de ser e sentir.
                Escolha onde o seu coração quiser começar — não há pressa, não há caminho errado. A travessia é sua, e
                ela começa exatamente onde você está agora.
              </Body>
            </div>

            <Button onClick={scrollToNext}>Comece sua jornada</Button>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-escutas-e-travessias-dygVtfS2n5pvYe92lgsGr7k3ePmbJ2.png"
              alt="Praia ao pôr do sol com areia rosa e água turquesa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
