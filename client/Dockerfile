FROM node:alpine

# Creating app directory
RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

COPY . /usr/src/client/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]