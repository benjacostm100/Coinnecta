const RefundPolicy = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 py-20 px-4">
    <div className="container mx-auto max-w-3xl space-y-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Política de Reembolsos</h1>
      <p>
        Queremos que estés satisfecho con tu compra en COINNECTA. Si el contenido no
        cumple con tus expectativas, puedes solicitar un reembolso dentro de los 7
        días posteriores a la compra.
      </p>
      <p>
        Para iniciar el proceso, contáctanos a través de
        <a href="mailto:hola@coinnecta.com" className="text-golden underline ml-1">
          hola@coinnecta.com
        </a>
        indicando el motivo de tu solicitud y los detalles de tu compra.
      </p>
      <p>
        Las solicitudes recibidas después de este período no serán elegibles para
        reembolso.
      </p>
    </div>
  </div>
);

export default RefundPolicy;
