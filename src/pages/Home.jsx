import { useState } from 'react';
import Chat from '../components/Chat';
import { MessageCircle } from 'lucide-react';

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="home-container">
      {/* Conteúdo simples */}
      <main className="main-content">
        <h2>Bem-vindo à Escola de Inglês</h2>
        <p>Clique no botão flutuante para abrir o chat e tirar suas dúvidas!</p>
      </main>

      {/* Botão Chat Flutuante */}
      <button 
        className="chat-toggle-btn"
        onClick={() => setShowChat(!showChat)}
      >
        <MessageCircle size={20} />
        {showChat ? 'Fechar Chat' : 'Abrir Chat'}
      </button>

      {/* Chat Overlay */}
      {showChat && (
        <div className="chat-overlay">
          <div className="chat-wrapper">
            <Chat />
            <button 
              className="close-chat-btn"
              onClick={() => setShowChat(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
