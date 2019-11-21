package main

import (
	"orgol/pkg/handler"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(static.Serve("/", static.LocalFile("./dist", true)))

	r.POST("/request", handler.Request_music)
	r.GET("/musiclist", handler.Music_List)
	r.GET("/next", handler.Next_Music)
	r.GET("/websocket", func(c *gin.Context) {
		handler.M.HandleRequest(c.Writer, c.Request)
	})

	r.Run()
}
