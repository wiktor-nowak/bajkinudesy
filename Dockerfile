FROM node:18-alpine

WORKDIR /docker-app

COPY package.json package-lock.json* ./
COPY src ./src
COPY eslint.config.mjs ./
COPY next-env.d.ts ./
COPY next.config.ts ./
COPY tsconfig.json ./
COPY postcss.config.mjs ./

ENV NEXT_TELEMETRY_DISABLED=1
ENV BUILD_STANDALONE=true

RUN npm install --include=optional && npm run build

CMD ["npm", "start"]