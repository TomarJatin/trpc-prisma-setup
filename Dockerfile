# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if you have one) to the container
COPY package.json package-lock.json* ./

# Install dependencies based on the package.json file
RUN npm ci

# Copy the entire project directory to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Set the command to start the Next.js application
CMD ["npm", "start"]