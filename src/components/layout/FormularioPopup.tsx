'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Dialog, DialogContent } from '@/components/ui/dialog'


// ✅ Declaração da função global para evitar erro de TypeScript
declare global {
  interface Window {
    abrirFormularioPopup?: () => void
  }
}

interface FormularioPopupProps {
  buttonText?: string
  className?: string
}

export default function FormularioPopup({
  buttonText = 'AGENDE SUA CONSULTORIA',
  className = '',
}: FormularioPopupProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 🔧 Função global para permitir abertura via botão flutuante
  useEffect(() => {
    window.abrirFormularioPopup = () => setIsModalOpen(true)
  }, [])

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    patrimonio: '',
    aceitou: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const isCheckbox = type === 'checkbox'

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Dados enviados:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      patrimonio: '',
      aceitou: false,
    })
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        id="botao-contato"
        onClick={() => setIsModalOpen(true)}
        className={`inline-block bg-accent text-white hover:bg-accent hover:text-primary hover:scale-105 transform font-medium py-3 px-8 rounded-lg transition shadow-md ${className}`}
      >
        {buttonText}
      </button>

      {isModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4 py-6 sm:py-10">
            <div className="relative bg-[#070D17] text-white rounded-lg shadow-lg w-full max-w-lg max-h-full overflow-y-auto p-6 sm:p-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-white hover:text-accent text-2xl"
                aria-label="Fechar"
              >
                &times;
              </button>

              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Para iniciar uma conversa, informe os dados abaixo:
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white mb-1">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-1">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-1">
                    Qual é seu patrimônio total em aplicações financeiras?
                  </label>
                  <select
                    name="patrimonio"
                    value={formData.patrimonio}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="até 100 mil">Até R$100.000</option>
                    <option value="100 mil a 500 mil">R$100.000 a R$500.000</option>
                    <option value="500 mil a 1 milhão">R$500.000 a R$1.000.000</option>
                    <option value="mais de 1 milhão">Mais de R$1.000.000</option>
                  </select>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="aceitou"
                    checked={formData.aceitou}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label className="text-sm text-white">
                    Li e estou ciente do{' '}
                    <a href="/politica-de-privacidade" className="text-accent hover:underline">
                      Aviso de Privacidade
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-md transition-all shadow-[0_0_12px_rgba(192,142,0,0.7)]"
                >
                  Agendar uma consultoria!
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
