FROM node:16.16.0-alpine
WORKDIR App
COPY . .
RUN yarn install
EXPOSE 8000
CMD ["yarn", "build-and-start"]
