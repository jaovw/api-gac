# :jigsaw: API-GAC - Carteira Financeira

Bem-vindo à API-GAC! Este projeto foi desenvolvido para o **Grupo Adriano Cobuccio (GAC)**, com o objetivo de criar uma carteira financeira onde usuários podem realizar transferências de saldo. O projeto foi desenvolvido utilizando **Node.js**, **NestJS**, e **TypeScript**, seguindo as melhores práticas de desenvolvimento e padrões de design.

## 🎯 Objetivo

O objetivo deste projeto é criar uma API que permita a gestão de uma carteira financeira com as seguintes funcionalidades:

- **Cadastro de usuários**: Permitir que novos usuários se registrem no sistema.
- **Autenticação**: Garantir que somente usuários autenticados possam acessar as funcionalidades da carteira.
- **Transferência de saldo**: Usuários podem enviar ou receber dinheiro entre si.
- **Validação de saldo**: Verificar se o usuário tem saldo suficiente antes de realizar uma transferência.
- **Transações reversíveis**: A operação de transferência deve ser passível de reversão em caso de inconsistência ou por solicitação do usuário.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side.
- **NestJS**: Framework progressivo de Node.js para a construção de aplicações escaláveis e eficientes.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos e outros recursos para melhorar o desenvolvimento.

## 📋 Requisitos Funcionais

Para cumprir o objetivo do projeto, os seguintes requisitos foram implementados:

1. **Cadastro**: Sistema para registrar novos usuários na plataforma.
2. **Autenticação**: Implementação de um mecanismo de autenticação para proteger as operações da API.
3. **Transferências**: Função que permite o envio e recebimento de dinheiro entre usuários.
4. **Validação de Saldo**: Verificação de saldo antes de permitir a transferência.
5. **Transações Reversíveis**: Mecanismo para reverter uma transação em caso de erro ou solicitação do usuário.

## 🧠 Avaliação

Durante o desenvolvimento, foram considerados os seguintes pontos para garantir a qualidade do projeto:

- **Segurança**: Implementação de medidas de segurança para proteger os dados dos usuários.
- **Padrões de Design**: Uso de design patterns e princípios SOLID para garantir um código limpo e de fácil manutenção.
- **Modelagem de Dados**: Estruturação adequada dos dados para suportar as funcionalidades da carteira.

### 🏅 Diferencial

O uso do **Docker** para garantir a consistência do ambiente de desenvolvimento e a facilidade na implantação da aplicação.

## 🚀 Como Iniciar o Projeto

Para iniciar o projeto, você pode seguir as instruções abaixo, dependendo do ambiente:

### Ambiente de Desenvolvimento

```bash
# Instalar as dependências
npm install

# Rodar o projeto em ambiente de desenvolvimento
npm run start:dev
```

### Ambiente de Produção

```bash
# Construir o projeto
npm run build

# Iniciar o projeto em ambiente de produção
npm run start:prod
```

### Rodando Testes

Para garantir que o projeto esteja funcionando corretamente, você pode rodar os testes:

```bash
# Executar todos os testes
npm run test

# Rodar os testes em modo watch
npm run test:watch

# Verificar a cobertura dos testes
npm run test:cov
```

## 🐳 Como Subir o Projeto com Docker

Este projeto já inclui um **Dockerfile** e um arquivo **docker-compose.yml** que automatizam a criação do ambiente e do container. Para subir o ambiente, siga os passos abaixo:

1. **Construir e subir o ambiente com Docker Compose**:

   ```bash
   docker-compose up --build

### 🎲 Banco de Dados

O banco de dados utilizado é o **SQLite**, que é armazenado localmente no ambiente Docker. Não é necessário configurar um banco de dados externo, pois o SQLite já está integrado na aplicação.
