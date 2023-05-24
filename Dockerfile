# Imagem base com Node.js 18.16.0
FROM node:18.16.0

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "preview"]
