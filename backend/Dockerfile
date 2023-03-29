FROM golang:1.19.5-alpine3.17
RUN mkdir /backend
ADD . /backend
WORKDIR /backend
RUN go mod download
RUN go build -o /main
EXPOSE 8080
CMD ["/main"]
