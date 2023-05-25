FROM node:18.16.0-alpine

ARG APP_DIR=/usr/app
ARG SOURCE

WORKDIR $APP_DIR

# Install app dependencies

COPY $SOURCE .
RUN npm i -g pnpm && pnpm install
RUN pnpm install
# ENTRYPOINT pnpm run start
EXPOSE 3000