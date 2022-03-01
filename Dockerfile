FROM node:lts-alpine
ENV NODE_ENV=production
ENV ATLAS_USER="tu user en mongoatlas"
ENV ATLAS_PASSWORD="tu password en mongoatlas"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
