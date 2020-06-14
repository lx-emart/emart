FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install express

COPY server .

EXPOSE 4200
CMD [ "node", "server.js" ]

