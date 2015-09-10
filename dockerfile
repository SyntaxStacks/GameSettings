FROM node
WORKDIR /app
RUN npm install
CMD node app.js
