# we create this container from a standard nodejs container
FROM node:14

# we create the app directory, this will be our working directory
WORKDIR /usr/src/app

# we install the app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY app/package*.json ./

RUN npm install

# we bundle app source
COPY ./app .

# and last but not least, we run the app
CMD [ "node", "app.js" ]