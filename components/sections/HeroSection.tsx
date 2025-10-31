"use client"

import { ChevronDown } from "lucide-react"

export const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("intro")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-fixed"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-YvkD6UrbThkqznbyEgJzAguSvfhzll.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform duration-300"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-10 h-10 drop-shadow-lg" />
      </button>
    </section>
  )
}
