FROM node:14 AS development

WORKDIR /nest
# RUN npm config set registry http://registry.npmjs.org/ --global

COPY package*.json ./
RUN yarn install --production=false

COPY . .

RUN yarn global add @nestjs/cli

EXPOSE 3000

CMD ["npm", "run", "start:debug", "tenant"]

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /nest

COPY --from=development /nest/node_modules ./node_modules
COPY --from=development /nest/dist ./dist

CMD ["node", "dist/apps/ws-authentication/main.js"]