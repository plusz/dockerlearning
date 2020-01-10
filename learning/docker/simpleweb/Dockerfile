# Use an existing docker image as a base
FROM node:alpine

# Working directory
WORKDIR /usr/app

# Download and install a dependency
COPY ./ ./
RUN npm install


# Tell the image what to do wneh it starts 
#as a container
CMD ["npm", "start"]