import { CTAButton } from "@/components/ui/cta-button";

export function CreatorSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      {/* Fondo texturizado sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-gray-50/90 to-gray-100/80"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-golden/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen del creador - Versión más compacta */}
          <div className="relative order-2 lg:order-1 max-w-md mx-auto lg:mx-0">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                alt="Pascu Moreno - Creador de COINNECTA" 
                className="w-full h-auto scale-105"
              />
              {/* Sello de credibilidad */}
              <div className="absolute -top-4 -right-4 bg-golden text-black px-4 py-2 rounded-full text-sm font-bold shadow-md">
                +$2M en ventas
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
              EXPERTO EN UPSELL
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden/80">Pascu Moreno</span><br />
              Creador de COINNECTA
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8 max-w-2xl">
              <blockquote className="border-l-4 border-golden pl-4 italic text-gray-700">
                "¿Quieres empezar un negocio rentable desde cero? 👇"
              </blockquote>
              
              <p className="text-gray-600">
                Te enseñamos <strong>estrategias comprobadas</strong> para vender online sin conocimientos previos ni gran inversión. Especialista en upsells con más de <strong className="text-golden">$2M generados</strong> para mis estudiantes.
              </p>
            </div>

            {/* Logros en grid moderno */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-center">
                <div className="text-2xl font-bold text-golden">+3.7M</div>
                <div className="text-xs text-gray-500 font-medium">VENTAS</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-center">
                <div className="text-2xl font-bold text-golden">1.5K+</div>
                <div className="text-xs text-gray-500 font-medium">ALUMNOS</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-center">
                <div className="text-2xl font-bold text-golden">89%</div>
                <div className="text-xs text-gray-500 font-medium">ÉXITO</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-center">
                <div className="text-2xl font-bold text-golden">4.9★</div>
                <div className="text-xs text-gray-500 font-medium">RATING</div>
              </div>
            </div>

            {/* CTA mejorado */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton 
                size="xl" 
                className="bg-gradient-to-r from-golden to-golden/90 hover:from-golden hover:to-golden shadow-lg hover:shadow-golden/40 transition-all"
              >
                🚀 Aplicar al Programa
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="xl"
                className="border-gray-300 hover:bg-white/90"
              >
                Ver Testimonios
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}