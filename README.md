# 📚 Chat Vendas - Escola de Inglês

Uma plataforma moderna e responsiva para vendas de cursos de inglês com chat interativo integrado.

## 🚀 Funcionalidades

### 💬 Chat Interativo
- Interface similar ao WhatsApp
- Respostas automáticas pré-programadas
- Botão flutuante no canto inferior direito
- Sistema de opções com botões interativos
- Informações sobre planos, preços e promoções

### 🎯 Área Administrativa
- Painel simples para o dono da escola
- Edição de preços dos planos
- Cálculo automático de descontos
- Interface intuitiva e responsiva

### 📱 Design Responsivo
- Adaptação completa a diferentes tamanhos de tela
- Layout otimizado para desktop, tablet e mobile
- Navegação fluida e moderna
- Gradientes e animações suaves

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e servidor de desenvolvimento
- **React Router DOM** - Roteamento declarativo
- **Context API** - Gerenciamento de estado global
- **Lucide React** - Ícones modernos e customizáveis
- **CSS3** - Estilos com gradientes e animações

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Robson03091997/Chat-Vendas.git
   cd Chat-Vendas
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🎨 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Chat.jsx        # Componente do chat interativo
│   └── Navigation.jsx  # Barra de navegação
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   └── Admin.jsx       # Painel administrativo
├── contexts/           # Contextos do React
│   └── AppContext.jsx  # Estado global da aplicação
├── data/               # Dados estáticos
│   └── plans.js        # Planos e cupons
├── styles/             # Arquivos de estilo
│   ├── main.css        # Estilos principais
│   ├── chat.css        # Estilos do chat
│   └── admin.css       # Estilos da área admin
└── App.jsx             # Componente principal
```

## 💡 Como Usar

### Para Clientes
1. Acesse a página inicial
2. Clique no botão flutuante "Abrir Chat"
3. Use as opções numéricas ou botões para navegar
4. Obtenha informações sobre planos, preços e contato

### Para Administradores
1. Navegue para a área "Admin"
2. Visualize todos os planos disponíveis
3. Clique em "Editar" para modificar preços
4. Os descontos são calculados automaticamente

## 🎯 Funcionalidades do Chat

- **Opção 1**: Visualizar planos e preços
- **Opção 2**: Ver promoções e cupons ativos
- **Opção 3**: Informações de contato
- **Opção 4**: Ajuda e suporte
- **Comandos especiais**: 'voltar', 'atendente', códigos de cupom

## 🎨 Design e UX

- **Cores**: Gradiente roxo/azul moderno
- **Tipografia**: Segoe UI para melhor legibilidade
- **Animações**: Transições suaves e efeitos hover
- **Responsividade**: Breakpoints para diferentes dispositivos
- **Acessibilidade**: Contraste adequado e navegação intuitiva

## 🔧 Customização

### Modificar Planos
Edite o arquivo `src/data/plans.js` para adicionar/remover planos.

### Personalizar Chat
Modifique as respostas em `src/components/Chat.jsx` na função `handleBotResponse`.

### Ajustar Estilos
Os estilos estão organizados em arquivos separados na pasta `src/styles/`.

## 📱 Responsividade

- **Desktop** (1024px+): Layout completo com sidebar
- **Tablet** (768px-1024px): Adaptação de elementos
- **Mobile** (480px-768px): Layout vertical otimizado
- **Mobile pequeno** (<480px): Interface compacta

## 🚀 Deploy

Para fazer deploy da aplicação:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Robson** - [GitHub](https://github.com/Robson03091997)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!