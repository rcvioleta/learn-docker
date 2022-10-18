FROM node:16

WORKDIR /backend

COPY package.json .

RUN npm install 

COPY . .

ENV MONGO_DB_UNAME=rovio
ENV MONGO_DB_PASS=secret

EXPOSE 8000

CMD [ "npm", "start" ]