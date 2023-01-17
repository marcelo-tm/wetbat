FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

EXPOSE 4003

CMD ["npm", "run", "dev"]
