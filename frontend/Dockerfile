FROM node:12-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 8080
