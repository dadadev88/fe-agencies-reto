FROM nginx:alpine
COPY dist/fe-agencies-reto /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
