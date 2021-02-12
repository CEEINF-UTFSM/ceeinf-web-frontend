FROM node:12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY code/package*.json ./

RUN npm run install:clean

COPY . ./

CMD ["npm", "run", "dev"]
