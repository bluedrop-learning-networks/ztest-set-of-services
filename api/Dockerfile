FROM node:12.0-alpine AS build

WORKDIR /app

COPY api/package.json api/package-lock.json ./

RUN npm ci --production

COPY api/ ./

CMD ["node", "src/start.js"]
