export function Footer() {
  return (
    <footer className="bg-gradient-hero border-t border-dark-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-black text-transparent bg-gradient-golden bg-clip-text mb-4">
              COINNECTA
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La formación digital definitiva para emprendedores que quieren dominar 
              las ventas online y maximizar sus ingresos con estrategias de upsell efectivas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-golden transition-colors">
                📧 hola@coinnecta.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#inicio" className="hover:text-golden transition-colors">Inicio</a></li>
              <li><a href="#contenido" className="hover:text-golden transition-colors">Qué Incluye</a></li>
              <li><a href="#testimonios" className="hover:text-golden transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-golden transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-golden transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-golden transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-golden transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-golden transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-border pt-8 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            © 2024 COINNECTA. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-4xl mx-auto">
            <strong>Aviso Legal:</strong> Los resultados mostrados en testimonios son reales pero no garantizan 
            resultados similares para todos los estudiantes. El éxito depende de la implementación individual 
            de las estrategias enseñadas. Este no es un esquema para generar dinero rápido y requiere trabajo 
            dedicado. • <strong>Política de Privacidad:</strong> Respetamos tu privacidad y nunca compartiremos 
            tu información personal con terceros sin tu consentimiento explícito.
          </p>
        </div>
      </div>
    </footer>
  );
}