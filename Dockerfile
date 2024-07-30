# Stage 1: Building app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Nginx server
FROM nginx:alpine
COPY --from=builder /app/dist/fe-agencies-reto /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
