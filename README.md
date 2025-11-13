# 🎮 MASTER LIGA ARENA - Sistema Completo

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-%3E%3D18.0.0-blue)](https://reactjs.org/)

> Sistema web completo de gerenciamento de Master Liga para campeonatos de futebol virtual (FIFA/PES) com integração automática de jogadores do SoFIFA e PesDB.

## ✨ Características

- ✅ **Sincronização Automática de Jogadores** - Integração com SoFIFA.com e PesDB.com
- ✅ **Gerenciamento de Campeonatos** - Criar, editar e gerenciar campeonatos
- ✅ **Marketplace de Jogadores** - Comprar, vender e negociar jogadores
- ✅ **Sistema de Leilões** - Leilões automáticos de jogadores
- ✅ **Ranking e Estatísticas** - Tabelas de classificação em tempo real
- ✅ **Painel Administrativo Completo** - Gerenciar usuários e conteúdo
- ✅ **Autenticação JWT** - Sistema seguro de autenticação
- ✅ **API RESTful** - Backend escalável e robusto
- ✅ **Interface Responsiva** - Frontend moderno com React

## 🚀 Quick Start

### Pré-requisitos

- Node.js >= 16.0.0
- npm ou yarn
- MongoDB Atlas (cloud) ou MongoDB local
- Git

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/torneiosonline1-pixel/master-liga-arena.git
cd master-liga-arena

# Backend Setup
cd backend
npm install
cp .env.example .env
# Editar .env com suas configurações
npm run dev

# Frontend Setup (em outro terminal)
cd frontend
npm install
npm start
```

## 📁 Estrutura do Projeto

```
master-liga-arena/
├── backend/
│   ├── src/
│   │   ├── config/          # Configurações (DB, JWT, etc)
│   │   ├── models/          # Modelos Mongoose
│   │   ├── routes/          # Rotas da API
│   │   ├── controllers/     # Controllers da API
│   │   ├── middleware/      # Middlewares
│   │   ├── services/        # Serviços de negócio
│   │   ├── scripts/         # Scripts (sync, seed, etc)
│   │   └── server.js        # Arquivo principal
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── pages/           # Páginas
│   │   ├── services/        # Serviços API
│   │   ├── context/         # Context API
│   │   ├── hooks/           # Custom Hooks
│   │   └── App.js
│   └── package.json
└── README.md
```

## 🔧 Configuração

### Backend (.env)

```env
# MongoDB
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/master-liga
MONGODB_LOCAL=mongodb://localhost:27017/master-liga

# JWT
JWT_SECRET=sua_chave_super_secreta_aqui
JWT_EXPIRE=7d

# APIs
SOFIFA_BASE_URL=https://sofifa.com
PESDB_API_URL=https://pesdb.net/api

# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## 📚 Documentação da API

### Autenticação

```bash
# Registro
POST /api/auth/register
{
  "username": "seu_usuario",
  "email": "seu_email@example.com",
  "password": "sua_senha"
}

# Login
POST /api/auth/login
{
  "email": "seu_email@example.com",
  "password": "sua_senha"
}
```

### Campeonatos

```bash
# Listar campeonatos
GET /api/championships

# Criar campeonato
POST /api/championships
Authorization: Bearer TOKEN
{
  "name": "Meu Campeonato",
  "description": "...",
  "maxParticipants": 20,
  "format": "league"
}

# Obter detalhes
GET /api/championships/:id

# Aderir a campeonato
POST /api/championships/:id/join
Authorization: Bearer TOKEN
```

### Jogadores

```bash
# Listar jogadores
GET /api/players?position=ST&overall=80

# Marketplace
GET /api/players/market

# Comprar jogador
POST /api/players/:id/buy
Authorization: Bearer TOKEN
{
  "clubId": "club_id"
}
```

### Sincronização de Jogadores

```bash
# Sincronizar do SoFIFA
POST /api/admin/sync/sofifa
Authorization: Bearer ADMIN_TOKEN

# Sincronizar do PesDB
POST /api/admin/sync/pesdb
Authorization: Bearer ADMIN_TOKEN

# Ou via command line
npm run sync-players
```

## 🎯 Funcionalidades Principais

### 1. Sincronização Automática de Jogadores
- Integração com SoFIFA.com (web scraping)
- Integração com PesDB.com (API)
- Atualização automática a cada 24 horas
- Merge inteligente de dados

### 2. Gerenciamento de Campeonatos
- Criar campeonatos (liga ou mata-mata)
- Agendador automático de jogos
- Tabela de classificação em tempo real
- Registro de resultados

### 3. Marketplace
- Comprar/vender jogadores com créditos
- Filtros avançados
- Histórico de transações
- Recomendações

### 4. Leilões
- Criar e participar de leilões
- Sistema de lances automáticos
- Notificações em tempo real

### 5. Negociações
- Propor trocas entre usuários
- Contrapropostas
- Histórico completo

### 6. Painel Administrativo
- Dashboard com estatísticas
- Gerenciar usuários
- Moderação de conteúdo
- Relatórios

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Ver arquivo [LICENSE](LICENSE) para detalhes.

## 📧 Contato

Tem dúvidas ou sugestões? Entre em contato:

- Email: contato@masterliga.com
- WhatsApp: +55 (83) 98686-7963

## 🙏 Agradecimentos

- [SoFIFA](https://sofifa.com) pelos dados dos jogadores
- [PesDB](https://pesdb.net) pela API
- [Arena Virtual](https://arenavirtual.net) pela inspiração

---

**Desenvolvido com ❤️ por [Comet](https://perplexity.ai)**
