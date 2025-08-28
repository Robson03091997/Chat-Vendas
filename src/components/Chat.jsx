import { useState, useEffect, useRef } from 'react';
import { useApp } from '../contexts/AppContext';
import { Send, Phone, MessageCircle, BookOpen, CreditCard, Gift, HelpCircle } from 'lucide-react';

const Chat = () => {
  const { plans, coupons } = useApp();
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const addChatMessage = (message) => {
    setChatMessages(prev => [...prev, message]);
  };

  useEffect(() => {
    // Mensagem de boas-vindas inicial - apenas uma vez
    const welcomeMessage = {
      id: Date.now(),
      text: "Olá! Bem-vindo à Escola de Inglês! 🎓\n\nComo posso ajudá-lo hoje?",
      isBot: true,
      timestamp: new Date()
    };
    
    setChatMessages([welcomeMessage]);
    setShowOptions(true);
  }, []); // Array de dependências vazio garante que execute apenas uma vez

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addChatMessage({
        id: Date.now(),
        text: inputMessage,
        isBot: false,
        timestamp: new Date()
      });
      setInputMessage('');
      
      // Simular resposta do bot
      setTimeout(() => {
        handleBotResponse(inputMessage.toLowerCase());
      }, 1000);
    }
  };

  const handleBotResponse = (message) => {
    let response = '';
    let newStep = currentStep;

    if (message.includes('1') || message.includes('planos') || message.includes('preços')) {
      response = "📚 **Nossos Planos Disponíveis:**\n\n";
      plans.forEach((plan, index) => {
        response += `${index + 1}. **${plan.name}** - R$ ${plan.price.toFixed(2)}\n`;
        response += `   Duração: ${plan.duration}\n`;
        response += `   Desconto: ${plan.discount}%\n\n`;
      });
      response += "Digite o número do plano para mais detalhes ou 'voltar' para outras opções.";
      newStep = 'plans';
    } else if (message.includes('2') || message.includes('promoções') || message.includes('cupons')) {
      response = "🎁 **Cupons de Desconto:**\n\n";
      response += "Se você possui um cupom de desconto, digite o código para verificar se é válido.\n\n";
      response += "Exemplo: BEMVINDO20\n\n";
      response += "Digite o código do cupom ou 'voltar' para outras opções.";
      newStep = 'coupons';
    } else if (message.includes('3') || message.includes('contato') || message.includes('falar')) {
      response = "📞 **Informações de Contato:**\n\n";
      response += "**WhatsApp:** (11) 99999-9999\n";
      response += "**Email:** contato@escoladeingles.com\n";
      response += "**Endereço:** Rua das Flores, 123 - São Paulo/SP\n";
      response += "**Horário:** Segunda a Sexta, 8h às 18h\n\n";
      response += "Digite 'voltar' para outras opções.";
      newStep = 'contact';
    } else if (message.includes('4') || message.includes('ajuda') || message.includes('suporte')) {
      response = "❓ **Como posso ajudar?**\n\n";
      response += "• Para ver planos e preços, digite '1'\n";
      response += "• Para ver promoções e cupons, digite '2'\n";
      response += "• Para informações de contato, digite '3'\n";
      response += "• Para falar com um atendente, digite 'atendente'\n\n";
      response += "Digite 'voltar' para outras opções.";
      newStep = 'help';
    } else if (message.includes('voltar')) {
      response = "🔄 Voltando ao menu principal!\n\n";
      response += "Como posso ajudá-lo hoje?";
      setShowOptions(true);
      newStep = 'welcome';
    } else if (message.includes('atendente')) {
      response = "👨‍💼 Conectando você com um atendente...\n\n";
      response += "Um de nossos especialistas entrará em contato em breve!\n";
      response += "Enquanto isso, posso ajudá-lo com outras informações.";
      newStep = 'attendant';
    } else if (newStep === 'plans' && /^[1-9]$/.test(message)) {
      const planIndex = parseInt(message) - 1;
      const plan = plans[planIndex];
      if (plan) {
        response = `📋 **${plan.name}**\n\n`;
        response += `**Descrição:** ${plan.description}\n`;
        response += `**Duração:** ${plan.duration}\n`;
        response += `**Número de aulas:** ${plan.numberOfClasses}\n`;
        response += `**Duração da aula:** ${plan.classDuration}\n`;
        response += `**Preço:** R$ ${plan.price.toFixed(2)}\n`;
        response += `**Preço Original:** R$ ${plan.originalPrice.toFixed(2)}\n`;
        response += `**Desconto:** ${plan.discount}%\n\n`;
        response += `**Inclui:**\n`;
        plan.features.forEach(feature => {
          response += `✅ ${feature}\n`;
        });
        response += `\nPara aplicar um cupom, digite o código ou 'voltar' para outros planos.`;
      } else {
        response = "❌ Plano não encontrado. Digite um número válido ou 'voltar' para outras opções.";
      }
    } else if (newStep === 'coupons' && message.length > 0) {
      const coupon = coupons.find(c => c.code.toLowerCase() === message.toLowerCase());
      if (coupon) {
        response = `🎉 **Cupom ${coupon.code} aplicado com sucesso!**\n\n`;
        response += `**Desconto:** ${coupon.discount}%\n`;
        response += `**Descrição:** ${coupon.description}\n`;
        response += `**Válido até:** ${coupon.validUntil}\n\n`;
        response += "Agora escolha um plano para aplicar o desconto!";
      } else {
        response = "❌ Cupom não encontrado ou inválido.\n\n";
        response += "Verifique o código e tente novamente ou digite 'voltar' para outras opções.";
      }
    } else {
      response = "Desculpe, não entendi sua mensagem. 😅\n\n";
      response += "Use as opções numéricas ou digite 'ajuda' para ver as opções disponíveis.";
    }

    setCurrentStep(newStep);
    setShowOptions(false);

    addChatMessage({
      id: Date.now(),
      text: response,
      isBot: true,
      timestamp: new Date()
    });
  };

  const handleOptionClick = (option) => {
    handleBotResponse(option);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-avatar">
          <MessageCircle size={24} />
        </div>
        <div className="chat-info">
          <h3>Escola de Inglês</h3>
          <span className="status">Online</span>
        </div>
      </div>

      <div className="chat-messages" ref={chatContainerRef}>
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.isBot ? 'bot' : 'user'}`}
          >
            <div className="message-content">
              <div className="message-text" dangerouslySetInnerHTML={{ 
                __html: message.text.replace(/\n/g, '<br/>') 
              }} />
              <div className="message-time">
                {message.timestamp.toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}
        
        {showOptions && (
          <div className="message bot">
            <div className="message-content">
              <div className="message-text">
                Escolha uma opção:
              </div>
              <div className="chat-options">
                <button 
                  onClick={() => handleOptionClick('1')}
                  className="option-btn"
                >
                  <BookOpen size={16} />
                  Planos e Preços
                </button>
                <button 
                  onClick={() => handleOptionClick('2')}
                  className="option-btn"
                >
                  <Gift size={16} />
                  Promoções e Cupons
                </button>
                <button 
                  onClick={() => handleOptionClick('3')}
                  className="option-btn"
                >
                  <Phone size={16} />
                  Contato
                </button>
                <button 
                  onClick={() => handleOptionClick('4')}
                  className="option-btn"
                >
                  <HelpCircle size={16} />
                  Ajuda
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          className="message-input"
        />
        <button 
          onClick={handleSendMessage}
          className="send-btn"
          disabled={!inputMessage.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
