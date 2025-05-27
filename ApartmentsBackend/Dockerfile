# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose port
EXPOSE 5000

# Run the compiled JavaScript
CMD ["node", "dist/index.js"]
