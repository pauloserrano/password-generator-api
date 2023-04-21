FROM node

WORKDIR /

COPY . .

EXPOSE 5000

RUN npm i
RUN npm run build

CMD [ "npm", "start" ]