import { NextResponse } from 'next/server';
import { createOdooLead } from '@/utils/odoo';

export async function POST(request: Request) {
  try {
    // Obter dados do corpo da requisição
    const data = (await request.json()) as {
      nome?: string
      telefone?: string
      segmento_alvo?: string
    }    
    
    // Validar campos obrigatórios
    if (!data.nome || !data.telefone || !data.segmento_alvo) {
      return NextResponse.json(
        { message: 'Nome, telefone e segmento_alvo são obrigatórios' },
        { status: 400 }
      );
    }
    
    // Chamar função para criar lead no Odoo
    await createOdooLead(data);
    
    // Retornar resposta de sucesso
    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar lead:', error);
    
    // Retornar resposta de erro
    return NextResponse.json(
      { message: 'Erro ao processar sua solicitação' },
      { status: 500 }
    );
  }
}
