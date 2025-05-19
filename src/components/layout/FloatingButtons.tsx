'use client'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4 items-end">
      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5511988889998"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-white shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center"
        title="Fale via WhatsApp"
      >
        <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-20 h-20" />
      </a>

      {/* Botão Formulário */}
      <button
        onClick={() => window.abrirFormularioPopup?.()}
        className="cursor-pointer w-16 h-16 rounded-full bg-white shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center"
        title="Solicite sua cotação"
      >
        <img src="/images/formulario.svg" alt="Formulário" className="w-20 h-20" />
      </button>
    </div>
  )
}
