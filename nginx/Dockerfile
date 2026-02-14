# Stage 1 - Build React
FROM node:18-alpine AS build

WORKDIR /app
COPY frontend/package*.json ./
RUN npm install

COPY frontend .
RUN npm run build

# Stage 2 - Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
