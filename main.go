package main

import (
	"orgole/pkg/handler"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Static("/", "dist/")
	r.POST("/request", handler.Request_music)
	r.Run()
}
