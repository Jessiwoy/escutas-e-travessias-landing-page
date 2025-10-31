"use client"

import { Instagram, Mail, MessageCircle } from "lucide-react"

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-[#BFADA8] border-t border-primary-brown/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-semibold text-primary-brown mb-4">Escutas e Travessias</h3>
            <p className="text-sm text-primary-brown/90 mb-4">Neurodiversidade, Psicologia e Maternidade Atípica</p>
            <div className="space-y-2">
              <a
                href="mailto:contato@escutasetravessias.com"
                className="flex items-center gap-2 text-sm text-primary-brown hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contato@escutasetravessias.com</span>
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-brown hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>(00) 00000-0000</span>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-primary-brown mb-4">Páginas</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", id: "hero" },
                { label: "A Enseada", id: "enseada" },
                { label: "O Espelho", id: "espelho" },
                { label: "O Cais", id: "cais" },
                { label: "A Praia", id: "praia" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-primary-brown hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-primary-brown mb-4">Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Serviços", id: "servicos" },
                { label: "Recursos", id: "recursos" },
                { label: "Contato", id: "contato" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-primary-brown hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="text-sm text-primary-brown hover:text-white transition-colors">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-brown hover:text-white transition-colors">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-primary-brown mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/escutasetravessias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-primary-brown hover:bg-white hover:text-primary-brown transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@escutasetravessias.com"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-primary-brown hover:bg-white hover:text-primary-brown transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-brown/20 pt-8 text-center">
          <p className="text-sm text-primary-brown/90 mb-2">
            © {new Date().getFullYear()} Escutas e Travessias. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-brown/80">
            Scheilla Soares - Psicologia, Neurodiversidade e Criação Sensível
          </p>
        </div>
      </div>
    </footer>
  )
}
