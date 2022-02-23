package main

import (
	"log"
	"net/http"

	server "server.com/pkg"
)

func main() {

	s := server.New()
	log.Fatal(http.ListenAndServe(":8080", s.Router()))

}
