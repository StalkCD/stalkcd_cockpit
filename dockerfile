# Stage 1: Build the Node.js application
FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Copy the build artifacts to the Nginx image
FROM nginx:alpine
COPY --from=node /app/dist/stalk-cd-cockpit /usr/share/nginx/html

# Ensure the directory exists for the mount (optional)
RUN mkdir -p /data  # Optional: if you need a /data folder

# Expose port 80 for Nginx
EXPOSE 80