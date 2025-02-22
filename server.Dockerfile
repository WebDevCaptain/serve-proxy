FROM nginx:1.26.0

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/conf.d/

# Copy Vue.js app file to nginx static folder
COPY dist/ /usr/share/nginx/html