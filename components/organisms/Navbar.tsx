"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-neutral-cream/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="w-32">{/* TODO: Replace with logo when available */}</div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Início", id: "hero" },
              { label: "Serviços", id: "servicos" },
              { label: "Recursos", id: "recursos" },
              { label: "Contato", id: "contato" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "font-sans transition-all duration-200 hover:underline underline-offset-4",
                  isScrolled
                    ? "text-primary-brown hover:text-primary-orange"
                    : "text-white drop-shadow-lg hover:text-primary-gold",
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
