FROM node:16 as dev

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./migrations ./migrations

RUN npm run build