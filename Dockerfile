FROM node:7.3

RUN npm install -g angular-cli
RUN npm install

EXPOSE 4200
EXPOSE 49152

ADD . /app

WORKDIR /app

CMD [ "ng", "serve", "--host", "0.0.0.0" ]
