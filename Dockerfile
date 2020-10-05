
#=============================== Node.js runtime image ===========================
FROM 945964072782.dkr.ecr.us-west-2.amazonaws.com/nodejs-web-app:latest

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN  ls /usr/local/lib/ \
        && npm install \
        && node -v
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]