FROM node:14-alpine
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]
