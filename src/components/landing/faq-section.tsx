import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTAButton } from "@/components/ui/cta-button";
import sectionBg3 from "@/assets/section-bg-3.jpg";

export function FAQSection() {
  const faqs = [
    {
      question: "¿Es COINNECTA adecuado para principiantes?",
      answer: "¡Absolutamente! COINNECTA está diseñado tanto para principiantes que nunca han vendido online como para emprendedores que quieren optimizar sus resultados. Empezamos desde lo básico y avanzamos paso a paso."
    },
    {
      question: "¿Cuánto tiempo necesito invertir por día?",
      answer: "Recomendamos dedicar al menos 1-2 horas diarias durante las primeras 4 semanas para completar la formación. Después, podrás implementar las estrategias en tu propio ritmo."
    },
    {
      question: "¿Funciona para cualquier tipo de negocio?",
      answer: "Sí, las estrategias de COINNECTA son aplicables a cualquier negocio digital: infoproductos, cursos online, coaching, consultorías, ecommerce, y más. Los principios son universales."
    },
    {
      question: "¿Qué diferencia a COINNECTA de otros cursos?",
      answer: "COINNECTA se enfoca específicamente en la implementación práctica en Hotmart y estrategias de upsell probadas. No es teoría, son sistemas reales que han generado millones en ventas."
    },
    {
      question: "¿Hay garantía de resultados?",
      answer: "Ofrecemos una garantía de satisfacción de 30 días. Si sigues el programa completo y no ves mejoras en tu negocio, te devolvemos el 100% de tu inversión."
    },
    {
      question: "¿Recibiré soporte personalizado?",
      answer: "Sí, tienes acceso a nuestra comunidad VIP donde puedes hacer preguntas, compartir resultados y recibir feedback. Además, hacemos sesiones en vivo mensuales de Q&A."
    },
    {
      question: "¿El contenido se actualiza?",
      answer: "Por supuesto. El marketing digital evoluciona constantemente, por eso actualizamos el contenido regularmente y todos los estudiantes reciben las actualizaciones sin costo adicional."
    },
    {
      question: "¿Puedo acceder desde cualquier dispositivo?",
      answer: "Sí, la plataforma es completamente responsive. Puedes acceder desde tu computadora, tablet o smartphone, y el progreso se sincroniza automáticamente."
    }
  ];

  return (
    <section id="faq" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={sectionBg3} 
          alt="Background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-slide-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 lg:mb-6">
            Preguntas{" "}
            <span className="text-transparent bg-gradient-golden bg-clip-text">
              Frecuentes
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes para que tomes la mejor decisión 
            para tu futuro empresarial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4 mb-12 lg:mb-16">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-dark-border rounded-xl px-4 lg:px-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-golden transition-colors py-4 lg:py-6 text-sm lg:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 lg:pb-6 text-sm lg:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Final CTA */}
          <div className="text-center animate-slide-up">
            <div className="bg-golden/10 border border-golden/30 rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8">
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4">
                ¿Listo para Transformar tu Negocio?
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground mb-6">
                Únete a más de 1,000 emprendedores que ya están obteniendo resultados 
                extraordinarios con COINNECTA.
              </p>
              <CTAButton size="xl" className="mb-4">
                🚀 Comenzar Mi Transformación
              </CTAButton>
              <p className="text-xs lg:text-sm text-muted-foreground">
                ⚡ Acceso inmediato - ⏰ Oferta limitada - 🎯 Resultados garantizados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}