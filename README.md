# Portfólio – Caique Petris
Aqui você encontra um resumo das minhas experiências, habilidades e projetos como estudante e desenvolvedor fullstack.
Este projeto foi criado para ser meu cartão de visitas profissional e demonstrar meu perfil técnico para o mercado de tecnologia.
# ✨ Visão Geral
v1.0.0


# 🚀 Tecnologias Utilizadas

  HTML5, CSS3, TAILWINDCSS, JAVASCRIPT E NODEJS

 ## 🖼️ Screenshots



 # 🔗 Links Importantes


# 📝 Como Rodar Localmente

Fechado 🚀 Vou te montar um **README.md** direto pro `/backend` do seu portfólio. Ele explica o que é, como instalar, rodar e até testar a API de envio de e-mails.

---

## 📄 README.md (para `/backend`)

```markdown
# 📬 PETRIS Backend

Este é o backend do portfólio **PETRIS**, responsável pelo envio de e-mails através da API do [Resend](https://resend.com).  
Ele funciona como ponte entre o frontend (React + Tailwind) e o serviço de e-mail, mantendo a chave de API protegida.

---

## 🚀 Tecnologias
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Resend](https://resend.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Cors](https://github.com/expressjs/cors)

---

## 📂 Estrutura de Pastas
```

backend/
├── src/
│   ├── controllers/   # Regras de negócio (ex: EmailController.js)
│   ├── routes/        # Definições de rotas (ex: EmailRoutes.js)
│   ├── app.js         # Configuração do Express
│   └── server.js      # Ponto de entrada
├── .env               # Variáveis de ambiente (chave do Resend)
├── package.json
└── README.md

````

---

## ⚙️ Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio/backend
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na pasta `/backend` e adicione sua chave do Resend:

```
RESEND_API_KEY=sua_chave_aqui
PORT=5000
```

---

## ▶️ Como Rodar

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm start
```

O servidor rodará em:
[http://localhost:5000](http://localhost:5000)

---

## 📡 Rotas

### POST `/api/email`

Envia um e-mail através do Resend.

**Body esperado (JSON):**

```json
{
  "name": "Caique Petris",
  "email": "caique@teste.com",
  "message": "Olá, este é um teste!"
}
```

**Resposta de sucesso:**

```json
{
  "success": true,
  "data": { ... }
}


## ✅ Testando a API

### Via cURL:

bash
curl -X POST http://localhost:5000/api/email \
  -H "Content-Type: application/json" \
  -d '{"name":"Caique","email":"teste@teste.com","message":"Mensagem de teste"}'


### Via Postman/Insomnia:

* Método: **POST**
* URL: `http://localhost:5000/api/email`
* Body → JSON →


  {
    "name": "Caique",
    "email": "teste@teste.com",
    "message": "Mensagem de teste"
  }






# 💡 Funcionalidades


# 📚 Aprendizados & Roadmap



# 🤝 Contato



# 📄 Licença

MIT — Use este template à vontade, só não esquece de me marcar!
Feito com ❤️ por Caique Petris.