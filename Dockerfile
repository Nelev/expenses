FROM node:18

WORKDIR /usr/src/app

COPY . .

# Install ALL dependencies, including devDependencies
RUN npm install

RUN npm run build

EXPOSE 3000

COPY . .

CMD ["npm", "start"]