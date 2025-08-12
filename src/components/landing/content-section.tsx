import { CTAButton } from "@/components/ui/cta-button";

export function ContentSection() {
  const modules = [
    {
      icon: "🎯",
      title: "Módulo 1: Fundamentos del Negocio Digital",
      features: [
        "Mindset emprendedor digital",
        "Análisis de mercado y nicho",
        "Validación de productos digitales",
        "Configuración inicial en Hotmart"
      ]
    },
    {
      icon: "📈",
      title: "Módulo 2: Estrategias de Ventas Online",
      features: [
        "Funnel de ventas efectivo",
        "Copywriting que convierte",
        "Landing pages optimizadas",
        "Email marketing automatizado"
      ]
    },
    {
      icon: "💰",
      title: "Módulo 3: Maestría en Upsell",
      features: [
        "Estrategias de upsell y cross-sell",
        "Secuencias de ofertas irresistibles",
        "Maximización del valor del cliente",
        "Automatización de procesos"
      ]
    },
    {
      icon: "📊",
      title: "Módulo 4: Análisis y Optimización",
      features: [
        "Métricas que importan",
        "A/B testing efectivo",
        "Optimización de conversiones",
        "Escalabilidad del negocio"
      ]
    }
  ];

  const bonuses = [
    {
      icon: "🎁",
      title: "BONO #1: Templates de Landing Pages",
      value: "Valor: $297",
      description: "5 landing pages probadas y optimizadas listas para usar"
    },
    {
      icon: "📧",
      title: "BONO #2: Secuencias de Email",
      value: "Valor: $197",
      description: "Email sequences que han generado millones en ventas"
    },
    {
      icon: "🔧",
      title: "BONO #3: Herramientas Premium",
      value: "Valor: $497",
      description: "Acceso a herramientas profesionales por 6 meses"
    },
    {
      icon: "👥",
      title: "BONO #4: Comunidad VIP",
      value: "Valor: $397",
      description: "Acceso exclusivo a grupo privado de networking"
    }
  ];

  return (
    <section id="contenido" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Fondo renovado con mejor visibilidad */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Dashboard de métricas digitales" 
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/60" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-golden/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-golden/20 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
            PROGRAMA COMPLETO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Domina el <span className="text-golden">Upsell en Hotmart</span><br />
            en 4 Pasos Clave
          </h2>
          <p className="text-lg text-white/85 max-w-3xl mx-auto">
            Método probado que ha aumentado ingresos en un <strong className="text-golden">217%</strong> a emprendedores
          </p>
        </div>

        {/* Módulos */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-golden/50 transition-all duration-500 group overflow-hidden"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="text-4xl p-3 bg-gradient-to-br from-golden/20 to-golden/5 rounded-lg group-hover:rotate-6 transition-transform">
                  {module.icon}
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-white flex-1">
                  {module.title}
                </h3>
              </div>
              
              <ul className="space-y-3.5">
                {module.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/85">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bonos */}
        <div className="relative bg-black/50 backdrop-blur-md rounded-3xl p-10 lg:p-12 mb-16 lg:mb-20 border border-golden/20 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-golden/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
                Bonos de <span className="text-golden">Regalo Exclusivo</span>
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Recursos adicionales valorados en <strong>$1,388 USD</strong> para acelerar tus resultados
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
              {bonuses.map((bonus, index) => (
                <div 
                  key={index}
                  className="bg-black/40 border border-white/10 rounded-xl p-5 lg:p-6 hover:border-golden/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl p-2 bg-golden/10 rounded-lg group-hover:bg-golden/20 transition-colors">
                      {bonus.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{bonus.title}</h4>
                      <p className="text-golden text-sm font-medium mb-2">{bonus.value}</p>
                      <p className="text-white/70 text-sm">{bonus.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final - Optimizado para móvil */}
        <div className="text-center">
          <div className="inline-block w-full max-w-2xl bg-gradient-to-r from-black via-black to-golden/20 border border-golden/30 rounded-2xl px-6 py-6 sm:px-10 sm:py-8 mb-8 overflow-hidden">
            {/* Precio - Versión móvil apilada */}
            <div className="sm:hidden mb-4">
              <p className="text-white/80 text-sm">Valor total:</p>
              <p className="text-2xl font-black text-white">
                <span className="line-through text-white/50">$2,885</span>{" "}
                <span className="text-golden">$497</span>
              </p>
              <p className="text-white/80 text-sm mt-2">Oferta termina en: <span className="text-golden">3 días</span></p>
            </div>
            
            {/* Precio - Versión desktop en línea */}
            <div className="hidden sm:flex justify-between items-center gap-6 mb-6">
              <div className="text-left">
                <p className="text-white/80 text-sm">Valor total:</p>
                <p className="text-2xl font-black text-white">
                  <span className="line-through text-white/50">$2,885</span>{" "}
                  <span className="text-golden">$497</span>
                </p>
              </div>
              
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-golden/50 to-transparent" />
              
              <div className="text-right">
                <p className="text-white/80 text-sm">Oferta termina en:</p>
                <p className="text-xl font-bold text-white">
                  <span className="text-golden">3 días</span> 06:22:15
                </p>
              </div>
            </div>
            
            <CTAButton 
              size="xl" 
              className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 shadow-lg shadow-golden/30"
            >
              🚀 Quiero Acceder Ahora
            </CTAButton>
          </div>
          
          {/* Beneficios - Versión optimizada */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm text-white/80">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
              <span>Garantía 30 días</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
              <span>Soporte prioritario</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}