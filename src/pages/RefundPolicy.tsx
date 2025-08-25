import { Footer } from "@/components/landing/footer";

const RefundPolicy = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
    <div className="flex-grow container mx-auto max-w-3xl px-4 py-20">
      <div className="flex justify-center mb-10">
        <img src={"images/logo.png"} alt="COINNECTA" className="w-40 lg:w-52" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Política de Reembolsos</h1>
      <p className="mb-4">
        En COINNECTA buscamos tu satisfacción. Si el contenido no cumple con tus
        expectativas, puedes solicitar un reembolso dentro del plazo establecido.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Período de Reembolso</h2>
      <p className="mb-4">
        Tienes hasta 7 días desde la fecha de compra para solicitar la devolución
        del producto digital.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Condiciones</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>El reembolso se aplica únicamente al valor del producto adquirido.</li>
        <li>No se devolverán comisiones o cargos de la plataforma de pago.</li>
        <li>El acceso al contenido se revocará una vez aprobado el reembolso.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cómo solicitarlo</h2>
      <p className="mb-4">
        Escríbenos a
        <a href="mailto:hola@coinnecta.com" className="text-golden underline ml-1">
          hola@coinnecta.com
        </a>
        indicando el motivo y los datos de tu compra.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Actualizaciones</h2>
      <p>
        Podemos modificar esta política en cualquier momento y los cambios se
        publicarán en este sitio.
      </p>
    </div>
    <Footer />
  </div>
);

export default RefundPolicy;
