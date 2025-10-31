import { H2, Body } from "@/components/atoms/Typography"
import { IconCard } from "@/components/molecules/IconCard"
import { Download, LinkIcon, Wrench } from "lucide-react"

export const RecursosSection = () => {
  return (
    <section id="recursos" className="py-16 md:py-24 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <H2 className="mb-4">Recursos</H2>
          <Body className="max-w-2xl mx-auto">
            Materiais, links e ferramentas para apoiar sua jornada de compreensão e cuidado.
          </Body>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <IconCard
            icon={<Download className="w-8 h-8" />}
            title="Materiais gratuitos"
            description="E-books, guias e cartas para download nas seções acima"
          />
          <IconCard
            icon={<LinkIcon className="w-8 h-8" />}
            title="Links úteis"
            description="Podcasts, artigos, vídeos e leituras recomendadas sobre neurodiversidade"
          />
          <IconCard
            icon={<Wrench className="w-8 h-8" />}
            title="Ferramentas"
            description="Recursos práticos para o dia a dia de famílias e profissionais"
          />
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <Body className="text-sm italic text-center">
            {/* TODO: Add actual resource links and materials */}
            Esta seção será atualizada regularmente com novos recursos e materiais.
          </Body>
        </div>
      </div>
    </section>
  )
}
