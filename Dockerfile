FROM node:16-alpine

ENV NODE_ENV production

WORKDIR /src

ADD portfolio-domain /src/portfolio-domain
ADD server /src/server

# copy global package.json
COPY package.json .

# copy yarn lock to install from it
COPY yarn.lock .

RUN yarn install --production --pure-lockfile --non-interactive --cache-folder ./ycache; rm -rf ./ycache
# RUN yarn server add @types/express @types/knex @types/morgan typescript ts-node
# RUN yarn domain add @types/lodash typescript

RUN yarn server start

EXPOSE 8080
