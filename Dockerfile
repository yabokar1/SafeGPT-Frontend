# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 to allow outside access
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]