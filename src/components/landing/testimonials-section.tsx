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
    { number: "1,247+", label: "Estudiantes Activos", icon: "👥" },
    { number: "89%", label: "Tasa de Éxito", icon: "📈" },
    { number: "$2M+", label: "Generado por Estudiantes", icon: "💰" },
    { number: "4.9★", label: "Calificación Promedio", icon: "⭐" }
  ];

  return (
    <section id="testimonios" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Fondo moderno con overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Personas celebrando éxito digital" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/70" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-golden/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-golden/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado rediseñado */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-golden/20 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
            TRANSFORMACIONES REALES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Resultados que <span className="text-golden">hablan por sí solos</span>
          </h2>
          <p className="text-lg text-white/85 max-w-3xl mx-auto">
            Historias verificadas de estudiantes que multiplicaron sus ingresos con nuestro método
          </p>
        </div>

        {/* Estadísticas - Diseño moderno */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 text-center hover:border-golden/50 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-display text-3xl lg:text-4xl font-black text-golden mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios - Tarjetas premium */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-golden/50 transition-all duration-500 group overflow-hidden"
            >
              {/* Efecto hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-golden/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-golden group-hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm mb-2">{testimonial.role}</p>
                    <span className="inline-block bg-golden/20 text-golden px-3 py-1 rounded-full text-xs font-bold">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-white/85 italic mb-6 pl-4 border-l-2 border-golden/50">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="bg-gradient-to-r from-golden/10 to-golden/5 border border-golden/30 rounded-lg p-4 group-hover:bg-gradient-to-r group-hover:from-golden/20 group-hover:to-golden/10 transition-all">
                  <p className="text-golden font-semibold text-center">
                    🎯 {testimonial.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video testimonial - Diseño interactivo */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-2xl p-1 overflow-hidden hover:border-golden/50 transition-all duration-500 group">
            <div className="bg-gradient-to-br from-black/50 via-black/30 to-black/50 rounded-xl p-8 lg:p-10 text-center">
              <div className="w-20 h-20 bg-golden/10 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto group-hover:rotate-12 transition-transform duration-500">
                🎥
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4">
                Testimonios en Video
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-6">
                Mira cómo nuestros estudiantes han transformado sus negocios (resultados verificados)
              </p>
              <button className="relative overflow-hidden bg-golden text-black px-8 py-3 rounded-lg font-bold hover:bg-golden-glow transition-colors group-hover:scale-105 duration-300">
                <span className="relative z-10">▶ Ver Videos Completos</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 scale-150"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}