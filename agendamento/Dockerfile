FROM node:22.2.0-alpine3.20
EXPOSE 4200
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install 
COPY . .
RUN npm install -g @angular/cli
CMD ng serve --host 0.0.0.0