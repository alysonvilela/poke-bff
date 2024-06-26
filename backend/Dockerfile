FROM node:20-alpine

WORKDIR /app/backend

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN npm install -g pnpm -Y
RUN pnpm i 

COPY . .

RUN pnpm run build

EXPOSE 3000
