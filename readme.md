
<img width="1408" alt="Captura de Tela 2024-06-27 às 13 45 04" src="https://github.com/alysonvilela/poke-bff/assets/22202745/315c8e95-1feb-4a23-9473-9f9a56c80b89">

Você pode ver em produção [aqui](https://poke-bff.vercel.app/)

## Tecnologias utilizadas
### BACKEND:
- Fastify
- Zod
- Typescript
- Vitest
- ESBuild (tsup)
- PM2
- Docker
- Github Actions

### FRONTEND:
- Nextjs
- Zod
- Shadcn UI + Radix UI
- React-query
- React-hook-form
- Vite + react-testing-library
- Docker

## Inicialização de projeto
Você pode inicializar o projeto via docker ou fluxo local após clonar o projeto.

### Usando docker
2. Adicionar variáveis ambientes de acordo com os arquivos .env.example dentro de cada aplicação
    1. `backend/.env`
    2. `frontend/.env.local` 
3. Acionar o comando
    1. `pnpm run docker:dev` para ambiente de desenvolvimento
    2. `pnpm run docker:para produção`

Após toda instalação você pode acessar separadamente cada aplicação nos endpoints
Backend: http://localhost:4000/
Frontend: http://localhost:3000/

### Localmente
Para ambiente de desenvolvimento, acesse o aplicativo e use os comandos para subir o ambiente

Inicializar comandos de desenvolvimento
	- Backend: `pnpm dev`
	- Frontend: `pnpm dev`
