FROM node:latest

# Creating app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

COPY package.json /usr/src/server
COPY . /usr/src/server
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]