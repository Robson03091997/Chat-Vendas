# 🎓 Plataforma de Vendas - Escola de Inglês

Uma plataforma completa para vendas de cursos de inglês com chat estilo WhatsApp e painel administrativo.

## ✨ Funcionalidades

### 🏠 Página Inicial

- **Design moderno e responsivo** com gradientes e animações
- **Seção hero** com estatísticas da escola
- **Apresentação dos planos** com preços e recursos
- **Formulário de contato** integrado
- **Chat flutuante** estilo WhatsApp

### 💬 Chat Inteligente

- **Interface estilo WhatsApp** com mensagens em tempo real
- **Respostas automáticas** para perguntas comuns
- **Menu de opções** para facilitar a navegação
- **Sistema de cupons** integrado
- **Informações sobre planos** e preços
- **Suporte ao cliente** automatizado

### ⚙️ Painel Administrativo

- **Dashboard** com estatísticas em tempo real
- **Gerenciamento de planos** (criar, editar, excluir)
- **Controle de cupons** de desconto
- **Análises e relatórios** (estrutura preparada)
- **Interface intuitiva** para administradores

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd projeto-vendas

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Acesse a aplicação

- **Página inicial**: http://localhost:5173/
- **Painel admin**: http://localhost:5173/admin

## 🎯 Como Usar

### Para Clientes

1. **Acesse a página inicial** e explore os planos disponíveis
2. **Clique em "Abrir Chat"** para iniciar uma conversa
3. **Use as opções numéricas** ou digite suas perguntas
4. **Explore os planos** digitando "1" no chat
5. **Veja as promoções** digitando "2" no chat
6. **Entre em contato** digitando "3" no chat

### Para Administradores

1. **Clique no botão "Cliente"** na navegação para alternar para modo admin
2. **Acesse o painel administrativo** através do link "Admin"
3. **Gerencie planos** na aba "Planos"
4. **Controle cupons** na aba "Cupons"
5. **Monitore atividades** no dashboard

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **React Router** - Navegação entre páginas
- **Lucide React** - Ícones modernos
- **CSS3** - Estilos customizados com gradientes e animações
- **Context API** - Gerenciamento de estado global

## 📱 Responsividade

A plataforma é totalmente responsiva e funciona perfeitamente em:

- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops
- 📺 Telas grandes

## 🔮 Funcionalidades Futuras

- **Integração com APIs de IA** para chat mais inteligente
- **Sistema de pagamentos** integrado
- **Dashboard com gráficos** reais
- **Sistema de usuários** e login
- **Notificações push** para clientes
- **Analytics avançados** com Google Analytics
- **Sistema de leads** e CRM

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas no arquivo `src/styles/main.css`:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cores de destaque */
--primary-color: #667eea;
--secondary-color: #764ba2;
```

### Conteúdo

- **Planos e preços**: Edite `src/data/plans.js`
- **Cupons**: Modifique `src/data/plans.js`
- **Informações da escola**: Atualize os componentes

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Chat.jsx        # Chat principal
│   └── Navigation.jsx  # Navegação
├── contexts/           # Contextos React
│   └── AppContext.jsx  # Estado global
├── data/              # Dados estáticos
│   └── plans.js       # Planos e cupons
├── pages/             # Páginas da aplicação
│   ├── Home.jsx       # Página inicial
│   └── Admin.jsx      # Painel administrativo
├── styles/            # Arquivos CSS
│   ├── main.css       # Estilos principais
│   ├── chat.css       # Estilos do chat
│   └── admin.css      # Estilos administrativos
└── App.jsx            # Componente principal
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas:

- 📧 Email: contato@escoladeingles.com
- 📱 WhatsApp: (11) 99999-9999
- 🌐 Website: www.escoladeingles.com

---

**Desenvolvido com ❤️ para transformar a experiência de vendas de cursos de inglês**
