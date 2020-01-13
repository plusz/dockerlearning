# Use an existing docker image as a base
FROM node:alpine

# Working directory
WORKDIR '/app'

# Download and install a dependency
COPY package.json .
RUN npm install
COPY . .

# Tell the image what to do wneh it starts 
#as a container
CMD ["npm", "start"]