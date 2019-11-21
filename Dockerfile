FROM node:lts-alpine as vue-build

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build 

FROM golang:latest as go-builder
ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64 \
    GO111MODULE=on
WORKDIR /app
COPY . /app
RUN go build main.go 

FROM alpine

WORKDIR /app
COPY --from=vue-build  /app/dist ./dist
COPY --from=go-builder /app/main  .
CMD /app/main