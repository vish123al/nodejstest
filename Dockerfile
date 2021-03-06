FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY TestNodeWebApp/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY TestNodeWebApp/. /usr/src/app

EXPOSE 8080 8081
CMD [ "npm", "start" ]
