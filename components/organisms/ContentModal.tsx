"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/atoms/Button"

interface ContentModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

export const ContentModal = ({ isOpen, onClose, title, content }: ContentModalProps) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [hasAccess, setHasAccess] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Check if user has already provided email
    const storedEmail = localStorage.getItem("userEmail")
    if (storedEmail) {
      setHasAccess(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save email to localStorage
    localStorage.setItem("userEmail", email)
    localStorage.setItem("userName", name)

    setShowSuccess(true)
    setTimeout(() => {
      setHasAccess(true)
      setShowSuccess(false)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white/95 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary-brown hover:text-primary-orange transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-serif font-semibold text-primary-brown mb-6">{title}</h2>

          {!hasAccess ? (
            <>
              {showSuccess ? (
                <div className="text-center py-8">
                  <div className="text-primary-gold text-5xl mb-4">✓</div>
                  <p className="text-lg text-primary-brown">Obrigada! Preparando seu conteúdo...</p>
                </div>
              ) : (
                <>
                  <p className="text-primary-brown/80 mb-6 leading-relaxed">
                    Para acessar este conteúdo, deixe seu email. Você receberá materiais e atualizações diretamente no
                    seu coração.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-brown mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-primary-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange bg-white"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-brown mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-primary-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange bg-white"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Receber conteúdo
                    </Button>
                  </form>
                </>
              )}
            </>
          ) : (
            <div className="prose prose-lg max-w-none">
              <div className="text-primary-brown/90 leading-relaxed whitespace-pre-line">{content}</div>

              <div className="mt-8 p-6 bg-primary-gold/10 rounded-lg border-l-4 border-primary-gold">
                <p className="text-sm text-primary-brown/80 italic mb-0">
                  Este conteúdo está em desenvolvimento. Em breve, você receberá materiais completos e aprofundados
                  sobre este tema.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
