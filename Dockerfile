FROM node:12.10-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk update && apk upgrade

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["vue-cli-service", "serve"]
