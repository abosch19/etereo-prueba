FROM node:12-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 8080
