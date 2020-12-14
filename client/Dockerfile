FROM node:14.1 AS build

WORKDIR /app

COPY client/package.json client/package-lock.json ./

RUN npm ci --production

COPY client/ ./

CMD ["node", "src/start.js"]
