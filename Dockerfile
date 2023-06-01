FROM node:18

WORKDIR /usr/src/app

COPY . .
RUN npm install husky --force
RUN npm install --force
RUN npm run build
CMD ["npm", "start"]