import { Footer } from "@/components/landing/footer";

const TermsOfUse = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
    <div className="flex-grow container mx-auto max-w-3xl px-4 py-20">
      <div className="flex justify-center mb-10">
        <img src={"images/logo.png"} alt="COINNECTA" className="w-40 lg:w-52" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Términos de Uso</h1>
      <p className="mb-4">
        Bienvenido a COINNECTA. Al acceder y utilizar este sitio aceptas los
        siguientes términos y condiciones. Si no estás de acuerdo con alguno de
        ellos, te recomendamos no utilizar nuestros servicios.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Uso del Sitio</h2>
      <p className="mb-4">
        Solo puedes utilizar COINNECTA para fines personales y lícitos. Está
        prohibida la distribución no autorizada del contenido o cualquier acción
        que pueda afectar el funcionamiento de la plataforma.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Propiedad Intelectual</h2>
      <p className="mb-4">
        Los materiales disponibles, incluidos textos, imágenes y videos, son
        propiedad de COINNECTA o de sus autores. Su reproducción total o parcial
        requiere autorización previa por escrito.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Limitación de Responsabilidad</h2>
      <p className="mb-4">
        La información ofrecida tiene fines educativos y no garantiza resultados
        específicos. COINNECTA no se responsabiliza por pérdidas derivadas del uso
        del contenido.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Modificaciones</h2>
      <p className="mb-4">
        Podemos actualizar estos términos en cualquier momento. Las
        modificaciones entrarán en vigor una vez publicadas en este sitio.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Contacto</h2>
      <p>
        Si tienes preguntas sobre estos términos, escríbenos a
        <a href="mailto:hola@coinnecta.com" className="text-golden underline ml-1">
          hola@coinnecta.com
        </a>
        .
      </p>
    </div>
    <Footer />
  </div>
);

export default TermsOfUse;
