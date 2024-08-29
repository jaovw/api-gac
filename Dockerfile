# Usando a imagem oficial do Node.js como base
FROM node:20-alpine

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o arquivo package.json e yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instalando as dependências
RUN yarn install --production

# Copiando o restante dos arquivos da aplicação
COPY . .

# Copiando o arquivo .env
COPY .env .env

# Build da aplicação NestJS (caso esteja usando TypeScript)
RUN yarn build

# Expondo a porta 3000 do container
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start:prod"]