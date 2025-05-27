# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]