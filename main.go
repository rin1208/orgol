package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	// r.LoadHTMLGlob("./dist/*.html")
	r.Static("/", "dist/")

	r.Run()
}
