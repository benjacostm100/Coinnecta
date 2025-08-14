import { CTAButton } from "@/components/ui/cta-button";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Coach de Vida",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      result: "+150% en ventas",
      text: "Antes de COINNECTA vendía esporádicamente. Ahora tengo un sistema automatizado que me genera ingresos consistentes todos los meses. El módulo de upsell cambió completamente mi negocio.",
      highlight: "De $2,000 a $5,000 mensuales en 3 meses"
    },
    {
      name: "Carlos Rodríguez",
      role: "Consultor Digital",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      result: "+300% ROI en anuncios",
      text: "La estrategia de funnel que enseñan es oro puro. Logré optimizar mis anuncios y ahora cada peso invertido me regresa tres. Mi negocio finalmente es predecible y escalable.",
      highlight: "Pasó de perder dinero a ganar $12,000 en un mes"
    }
  ];

  const stats = [
    { number: "1,247+", label: "Estudiantes", icon: "👥" },
    { number: "89%", label: "Tasa de Éxito", icon: "📈" },
    { number: "$2M+", label: "Generado", icon: "💰" },
    { number: "4.9★", label: "Calificación", icon: "⭐" }
  ];

  return (
    <section id="testimonios" className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      {/* Fondo con overlay sutil */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1705023868869-92166eff39c1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=80" 
          alt="Fondo abstracto digital" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-golden/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-golden/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
            RESULTADOS REALES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-5">
            Transformaciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-amber-500">comprobadas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Historias verificadas de emprendedores que escalaron sus negocios
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-black border border-golden rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-display text-3xl lg:text-4xl font-black text-golden mb-2">
                {stat.number}
              </div>
              <div className="text-gray-50 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios - Diseño moderno */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-black border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-golden"
                  />
                  <div>
                    <h4 className="font-bold text-gray-50 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-100 text-sm mb-2">{testimonial.role}</p>
                    <span className="inline-block bg-golden/10 text-golden px-3 py-1 rounded-full text-xs font-bold">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-gray-50 italic mb-6 pl-4 border-l-2 border-golden">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="bg-golden/5 border border-golden/20 rounded-lg p-4 group-hover:bg-golden/10 transition-all">
                  <p className="text-golden font-semibold text-center">
                    🎯 {testimonial.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 lg:p-10 text-center">
            <div className="w-20 h-20 bg-golden/10 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
              🎥
            </div>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4">
              Mira los testimonios en video
            </h3>
            <p className="text-gray-50 max-w-2xl mx-auto mb-6">
              Descubre cómo nuestros estudiantes lograron resultados extraordinarios
            </p>
            <button className="relative bg-gradient-to-r from-golden to-amber-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5">
              <span className="relative z-10">▶ Ver Videos de Éxito</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -rotate-45 scale-150"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}