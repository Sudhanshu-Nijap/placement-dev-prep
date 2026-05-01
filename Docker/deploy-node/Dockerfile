# Use official Node.js image (already has node + npm)
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
# * means "anything"
# So package*.json = package.json + package-lock.json
COPY package*.json ./

# Install all dependencies (like express)
RUN npm install

# Copy all remaining project files
COPY . .

# Tell Docker app runs on port 8000
EXPOSE 8000

# Command to start the app
CMD ["node", "index.js"]