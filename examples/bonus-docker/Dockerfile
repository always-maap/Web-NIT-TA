FROM node:18.12-alpine3.16

WORKDIR /app

COPY ./index.html /app
COPY ./script.js /app
COPY ./styles.css /app
COPY ./package.json /app

RUN npm install

CMD ["npm", "start"]
