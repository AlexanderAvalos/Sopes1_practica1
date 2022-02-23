package server

import (
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type api struct {
	router http.Handler
}

type Server interface {
	Router() http.Handler
}

func New() Server {
	a := &api{}

	r := mux.NewRouter()
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	})
	handler := c.Handler(r)
	r.HandleFunc("/datos", a.obtener).Methods(http.MethodPost)
	a.router = handler
	return a
}

func (a *api) Router() http.Handler {
	return a.router
}

func (a *api) obtener(w http.ResponseWriter, r *http.Request) {
	datos, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Fatal(err)
	}
	w.Header().Set("Content-Type", "application/json")
	datosComoString := string(datos)
	w.Write([]byte(datosComoString))

}
