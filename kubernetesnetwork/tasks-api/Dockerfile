FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

# create a 'tasks' folder for JS to store data
RUN mkdir tasks

CMD [ "node", "tasks-app.js" ]
