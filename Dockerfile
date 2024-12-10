# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install Gatsby CLI
RUN npm install -g gatsby-cli

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the port Gatsby serves on
EXPOSE 9000

# Command to start the app
CMD ["gatsby", "serve", "--host", "0.0.0.0", "--port", "9000"]

