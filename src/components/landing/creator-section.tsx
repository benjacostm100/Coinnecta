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
          {/* Imagen del creador - Circular y destacada */}
          <div className="w-full lg:w-1/2 xl:w-5/12 flex justify-center items-center">
            <div className="relative group flex flex-col items-center">
              <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden shadow-2xl border-8 border-white transform group-hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-golden/10 to-white">
                <img 
                  src="/images/pascu2.png" 
                  alt="Pascu Moreno - Creador de COINNECTA" 
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              {/* Sellos de credibilidad */}
              <div className="absolute -bottom-4 right-1/2 translate-x-1/2 bg-black text-golden px-5 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-golden">
                +$3.7M en ventas
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-golden text-black px-4 py-1 rounded-full text-xs font-bold shadow-md">
                TOP 1% Upsells
              </div>
            </div>
          </div>

          {/* Contenido - Versión potente */}
          <div className="w-full lg:w-1/2 xl:w-7/12">
            <span className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-5 uppercase">
              Creadores del Método Europeo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Los únicos europeos en facturar millones en Europa y LATAM
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden/80 font-bold">Pascu Moreno</span> formando emprendedores digitales
            </p>
            <div className="prose-xl text-gray-700 mb-8 space-y-4">
              <p>
                <strong className="text-golden">"Deja de complicarte"</strong> - Aquí está el sistema exacto que usé para generar <strong>$3,700,000+</strong> en ventas y que ahora enseño a mis alumnos.
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
        {/* Historia de Pascu - Primer millón */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden">
            <img
              src="/images/logo3.png"
              alt="Planeta Coinnecta"
              className="absolute -right-20 -top-20 w-80 opacity-10"
            />
            <div className="relative z-10">
              <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Septiembre 2019</p>
              <h3 className="text-center text-2xl md:text-3xl font-black text-gray-900 mb-10">
                Los últimos $20 que lo cambiaron todo
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 text-gray-700 space-y-4">
                  <p>
                    Con apenas <strong>$20</strong> en el bolsillo, Pascu apostó por su visión y lanzó su primer anuncio. En menos de un año transformó esa inversión en su primer millón.
                  </p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center bg-white/70 backdrop-blur p-4 rounded-xl shadow-sm">
                      <span className="font-medium">Primer mes</span>
                      <span className="font-bold text-golden">$873 USD</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/70 backdrop-blur p-4 rounded-xl shadow-sm">
                      <span className="font-medium">Tercer mes</span>
                      <span className="font-bold text-golden">$4,200 USD</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/70 backdrop-blur p-4 rounded-xl shadow-sm">
                      <span className="font-medium">Sexto mes</span>
                      <span className="font-bold text-golden">$12,000 USD</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/70 backdrop-blur p-4 rounded-xl shadow-sm">
                      <span className="font-medium">Primer año</span>
                      <span className="font-bold text-golden">Su primer millón</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}