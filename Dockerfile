# FROM node:16 as dev

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD [ "node", "dist/main" ]

FROM node:16 as base

FROM base as builder
WORKDIR /app
ENV NEXT_TELEMETRY_DEBUG=1
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
COPY .npmrc ./
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY ./src ./src
COPY ./migrations ./migrations
RUN npm run build

FROM base as prod
WORKDIR /app
COPY .npmrc ./
COPY package*.json ./
COPY ./migrations ./migrations
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/src/client ./src/client
RUN npm prune --production;
EXPOSE 8080
CMD [ "node dist/src/server/main" ]
ENTRYPOINT [ "sh", "-c" ]