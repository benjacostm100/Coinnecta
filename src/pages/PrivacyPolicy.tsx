import { Footer } from "@/components/landing/footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
    <div className="flex-grow container mx-auto max-w-3xl px-4 py-20">
      <div className="flex justify-center mb-10">
        <img src={"images/logo.png"} alt="COINNECTA" className="w-40 lg:w-52" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Política de Privacidad</h1>
      <p className="mb-4">
        En COINNECTA nos comprometemos a proteger tu información personal. Esta
        política describe qué datos recopilamos y cómo los utilizamos cuando accedes
        a nuestro sitio.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Información que recopilamos</h2>
      <p className="mb-4">
        Recopilamos datos que nos proporcionas directamente, como nombre y correo,
        además de información de navegación mediante cookies y herramientas
        analíticas.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Uso de la información</h2>
      <p className="mb-4">
        Utilizamos tus datos para brindarte y mejorar nuestros servicios, procesar
        pagos y enviarte comunicaciones relevantes.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
      <p className="mb-4">
        Empleamos cookies para recordar tus preferencias y analizar el uso del
        sitio. Puedes desactivarlas desde la configuración de tu navegador.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Tus derechos</h2>
      <p className="mb-4">
        Puedes acceder, actualizar o solicitar la eliminación de tus datos
        personales escribiéndonos a
        <a href="mailto:hola@coinnecta.com" className="text-golden underline ml-1">
          hola@coinnecta.com
        </a>
        .
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cambios en esta política</h2>
      <p>
        Podemos modificar esta política en cualquier momento. Las actualizaciones se
        publicarán en esta página.
      </p>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
