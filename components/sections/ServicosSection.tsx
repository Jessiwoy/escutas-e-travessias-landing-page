import { H2, Body } from "@/components/atoms/Typography"
import { Heart, Brain, Lightbulb, Users } from "lucide-react"

export const ServicosSection = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Orientação para mães atípicas",
      description: "Espaço de escuta e suporte para mães que navegam a maternidade neurodivergente",
      borderColor: "border-primary-gold",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Orientação para autistas e TDAH",
      description: "Acompanhamento para adultos neurodivergentes em processo de autoconhecimento",
      borderColor: "border-primary-orange",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Mentorias",
      description: "Orientação personalizada para profissionais e famílias",
      borderColor: "border-primary-brown",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimentos terapêuticos",
      description: "Psicologia com olhar sensível para neurodiversidade",
      borderColor: "border-neutral-cream",
    },
  ]

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <H2 className="mb-4">Serviços</H2>
          <Body className="max-w-2xl mx-auto">
            Acompanhamento especializado para quem busca compreensão, acolhimento e caminhos possíveis na travessia da
            neurodiversidade e maternidade atípica.
          </Body>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`p-6 md:p-8 bg-neutral-cream/30 rounded-lg border-l-4 ${service.borderColor} hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
            >
              <div className="text-primary-orange group-hover:scale-110 transition-transform duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary-brown mb-3 group-hover:text-primary-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-primary-brown/80">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Body className="text-sm italic">
            {/* TODO: Add service details and booking information */}
            Em breve, mais informações sobre como agendar e valores.
          </Body>
        </div>
      </div>
    </section>
  )
}
