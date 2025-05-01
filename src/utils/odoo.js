/**
 * Utilitário para integração com Odoo CRM
 * 
 * Este arquivo contém funções para criar leads no Odoo CRM
 * através da API JSON-RPC.
 */

/**
 * Cria um novo lead no Odoo CRM
 * @param {Object} data - Dados do formulário
 * @returns {Promise<Object>} - Resposta da API Odoo
 */
export async function createOdooLead(data) {
  try {
    // Verificar se todas as variáveis de ambiente necessárias estão definidas
    const requiredEnvVars = ['ODOO_URL', 'ODOO_DB', 'ODOO_USER', 'ODOO_PASS'];
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        throw new Error(`Variável de ambiente ${envVar} não definida`);
      }
    }

    // Construir o payload para a API Odoo
    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service: 'object',
        method: 'execute_kw',
        args: [
          process.env.ODOO_DB,
          process.env.ODOO_USER,
          process.env.ODOO_PASS,
          'crm.lead',
          'create',
          [{
            name: `${data.nome} – ${data.segmento_alvo}`,
            phone: data.telefone,
            x_segmento_alvo: data.segmento_alvo,
            description: JSON.stringify(data)
          }]
        ]
      },
      id: new Date().getTime()
    };

    // Enviar requisição para a API Odoo
    const response = await fetch(`${process.env.ODOO_URL}/jsonrpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    // Retornar a resposta da API
    const result = await response.json();
    
    // Verificar se há erro na resposta
    if (result.error) {
      throw new Error(`Erro na API Odoo: ${JSON.stringify(result.error)}`);
    }

    return result;
  } catch (error) {
    console.error('Erro ao criar lead no Odoo:', error);
    throw error;
  }
}
