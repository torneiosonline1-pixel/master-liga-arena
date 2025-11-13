# 🚀 GUIA DE DEPLOY - MASTER LIGA ARENA

## ⚡ DEPLOY RÁPIDO (5 MINUTOS)

Este guia mostra como colocar o sistema online em minutos usando serviços gratuitos.

---

## 🦄 BACKEND - DEPLOY NO RENDER

### Passo 1: Clonar e Preparar
```bash
git clone https://github.com/torneiosonline1-pixel/master-liga-arena.git
cd master-liga-arena/backend
npm install
```

### Passo 2: Configurar .env
Crie o arquivo `.env` com:
```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/master-liga
JWT_SECRET=sua_chave_super_secreta
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://seu-frontend.vercel.app
```

### Passo 3: Deploy com 1 Click

**Opção 1: Render** (Recomendado)
1. Acesse https://render.com
2. Clique em "New +" > "Web Service"
3. Conecte seu GitHub (torneiosonline1-pixel/master-liga-arena)
4. Configure:
   - **Name:** master-liga-backend
   - **Root Directory:** backend
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Adicione variáveis de ambiente no painel
6. Clique em Deploy!

**Opção 2: Railway** (Mais rápido)
1. Acesse https://railway.app
2. Clique em "Deploy from GitHub"
3. Selecione seu repositório
4. Defina `PORT=5000`
5. Deploy instantâneo!

**Opção 3: Heroku** (Clássico)
```bash
heroku login
heroku create master-liga-backend
git push heroku main
```

---

## 🎯 FRONTEND - DEPLOY NO VERCEL

### Passo 1: Setup
```bash
cd frontend
npm install
```

### Passo 2: Deploy
1. Acesse https://vercel.com
2. Clique em "New Project"
3. Selecione seu repositório do GitHub
4. Configure variáveis:
   ```
   REACT_APP_API_URL=https://seu-backend.render.com
   ```
5. Clique em Deploy!

**Ou com comando:**
```bash
npm i -g vercel
vercel --prod
```

---

## 💾 DATABASE - MONGODB ATLAS (Gratuito)

1. Acesse https://www.mongodb.com/cloud/atlas
2. Crie conta gratuita
3. Crie cluster (M0 - Free Forever)
4. Obtenha connection string
5. Use em `MONGODB_URI` no .env

---

## 📇 VARIÁVEIS DE AMBIENTE - CHECKL IST

### Backend
- [ ] `MONGODB_URI` - String de conexão MongoDB
- [ ] `JWT_SECRET` - Chave secreta para JWT
- [ ] `PORT` - Porta (padrão: 5000)
- [ ] `NODE_ENV` - "production"
- [ ] `FRONTEND_URL` - URL do frontend em produção

### Frontend
- [ ] `REACT_APP_API_URL` - URL da API em produção

---

## 🚀 LINKS DE ACESSO RÁPIDO

### Serviços Recomendados
- **Render:** https://render.com (Backend)
- **Vercel:** https://vercel.com (Frontend)
- **Railway:** https://railway.app (Backend alternativo)
- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas (Database)
- **GitHub:** https://github.com (Código)

### Seu Repositório
- **Main:** https://github.com/torneiosonline1-pixel/master-liga-arena
- **Backend:** /backend
- **Frontend:** /frontend

---

## 🚧 SOLUÇÃO DE PROBLEMAS

### Erro: "Cannot find module 'express'"
```bash
cd backend
npm install
```

### Erro de conexão MongoDB
- Verifique `MONGODB_URI`
- Adicione IP allow list no MongoDB Atlas (Allow All: 0.0.0.0/0)

### Frontend não conecta com backend
- Verifique `REACT_APP_API_URL`
- Certifique-se de que backend está rodando
- Teste direto no browser: `https://seu-backend.render.com/api/health`

### Build falhando no Vercel
```bash
# Teste localmente
npm run build
npm start
```

---

## 🙏 SUPORTE

Alguma dúvida? 
- Email: contato@masterliga.com
- WhatsApp: +55 (83) 98686-7963
- GitHub Issues: https://github.com/torneiosonline1-pixel/master-liga-arena/issues

---

**Desenvolvido com ❤️ por Comet**
