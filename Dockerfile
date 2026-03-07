FROM node:20

WORKDIR /app

COPY package*.json ./
COPY public /app/public
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]