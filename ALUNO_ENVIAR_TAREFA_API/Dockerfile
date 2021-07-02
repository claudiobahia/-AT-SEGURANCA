FROM node:carbon

WORKDIR /alpine/git/alunoapi

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]