# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Bundle app source
COPY . .

# Install dependencies
RUN npm install

# Start the application
CMD npm run dev
