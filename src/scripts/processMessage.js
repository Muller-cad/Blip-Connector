import { getIdentifier } from '../api/getIdentifier.js';
import { sendMessage } from '../api/sendMessage.js';

const phoneNumber = '553175713755';
const templateName = 'YOUR_TEMPLATE_NAME'; // Substitua pelo nome do seu template
const params = ['parâmetro1', 'parâmetro2']; // Substitua pelos parâmetros desejados

async function processMessage() {
  try {
    const guid = await getIdentifier(phoneNumber); // Obtenha o GUID
    console.log('GUID obtido:', guid); // Log para depuração
    const response = await sendMessage(phoneNumber, templateName, params, guid); // Envie a mensagem usando o GUID
    console.log('Resposta da mensagem enviada:', response); // Log para depuração
  } catch (error) {
    console.error('Erro no processo de envio de mensagem:', error);
  }
}

processMessage();