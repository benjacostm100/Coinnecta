import { CTAButton } from "@/components/ui/cta-button";

export function CreatorSection() {
  return (
    <section className="relative px-4 py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Fondo de patron geométrico sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-golden/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Imagen del creador - Versión grande y destacada */}
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white transform group-hover:-translate-y-1 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Pascu Moreno - Creador de COINNECTA" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Sellos de credibilidad */}
              <div className="absolute -bottom-4 -right-4 bg-black text-golden px-5 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-golden">
                +$3.7M en ventas
              </div>
              <div className="absolute -top-4 left-6 bg-golden text-black px-4 py-1 rounded-full text-xs font-bold shadow-md">
                TOP 1% Upsells
              </div>
            </div>
          </div>

          {/* Contenido - Versión potente */}
          <div className="w-full lg:w-1/2 xl:w-7/12">
            <span className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-5 uppercase">
              Los creadores del Método Europeo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden/80">Pascu</span>, Raúl y Jesús
              <br />Los únicos europeos en facturar millones en Europa y LATAM
            </h2>
            <div className="prose-xl text-gray-700 mb-8 space-y-4">
              <p>
                Historia de Pascu: cómo consiguió su primer millón y todo lo que vino después, ahora al alcance de todos con nuestro método.
              </p>
              
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="text-golden mr-2">▸</span>
                  <span><strong>Método probado</strong> que funciona incluso si empiezas desde $0</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden mr-2">▸</span>
                  <span><strong>Upsells automatizados</strong> que duplican tu ticket promedio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden mr-2">▸</span>
                  <span><strong>1,500+ alumnos</strong> ya aplicaron el sistema con éxito</span>
                </li>
              </ul>
            </div>

            {/* Logros destacados */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-golden">$2M+</div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Generado por alumnos</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-golden">217%</div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Aumento promedio</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-golden">89%</div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Tasa de éxito</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-golden">4.9★</div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Rating</div>
              </div>
            </div>

            {/* CTA poderoso */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton 
                size="xl" 
                className="bg-gradient-to-r from-golden to-amber-500 hover:from-amber-500 hover:to-golden text-black font-bold shadow-xl hover:shadow-golden/50 transition-all hover:-translate-y-0.5"
              >
                🤑 QUIERO GENERAR +$10K/MES
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="xl"
                className="border-gray-300 bg-white hover:bg-gray-50 font-semibold shadow-sm"
              >
                Ver Resultados Reales
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}