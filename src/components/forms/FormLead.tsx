'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

// aceita qualquer nome de campo, desde que seja string e boolean
type CamposForm = {
  [campo: string]: boolean | undefined
}


type FormLeadProps = {
  title?: string
  // nome do serviço ou segmento
  service?: string
  // lista de opções (para consórcio, financiamentos etc)
  serviceOptions?: string[]
  // rótulo de segmento (você passou "segmentoAlvo" em algumas páginas)
  segmentoAlvo?: string
  // controle de quais campos exibir no formulário
  campos?: CamposForm
  // perfil do investidor
  perfisInvestidor?: string[]
}


export default function FormLead({
  title = "...",
  service = "",
  serviceOptions = [],
  segmentoAlvo,
  campos,
  perfisInvestidor,    // <–– aqui
}: FormLeadProps) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: service,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: service,
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary/80 rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-heading font-semibold mb-6 text-white">{title}</h3>
      
      {submitSuccess && (
        <div className="bg-green-600/20 border border-green-600 text-white p-4 rounded-md mb-6">
          Mensagem enviada com sucesso! Em breve entraremos em contato.
        </div>
      )}
      
      {submitError && (
        <div className="bg-red-600/20 border border-red-600 text-white p-4 rounded-md mb-6">
          {submitError}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white mb-2">
            Nome completo<span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              E-mail<span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-white mb-2">
              Telefone<span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>
        
        {serviceOptions.length > 0 && (
          <div>
            <label htmlFor="service" className="block text-white mb-2">
              Tipo de {service}<span className="text-accent">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
            >
              <option value="">Selecione</option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        
        <div>
          <label htmlFor="message" className="block text-white mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
            placeholder="Como podemos ajudar?"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all disabled:opacity-70"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        
        <p className="text-white/60 text-sm text-center mt-4">
          Ao enviar este formulário, você concorda com nossa{' '}
          <a href="/politica-de-privacidade" className="text-accent hover:underline">
            Política de Privacidade
          </a>
        </p>
      </form>
    </div>
  );
}
