package main

import (
	// "fmt"
	// "net/url"

	"orgol/pkg/handler"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// var M = melody.New()
// var MusicList []MusicData
// var NowMusic MusicData

func main() {
	r := gin.Default()

	r.Use(static.Serve("/", static.LocalFile("./dist", true)))

	r.POST("/request", handler.Request_music)
	r.GET("/musiclist", handler.Music_List)
	r.GET("/next", handler.Next_Music)
	r.GET("/websocket", func(c *gin.Context) {
		handler.M.HandleRequest(c.Writer, c.Request)
	})

	r.Run(":80")
}

// func Request_music(c *gin.Context) {
// 	var asset_url MusicValue
// 	var musicdata MusicData
// 	var empty MusicData
// 	c.BindJSON(&asset_url)
// 	u, _ := url.Parse(asset_url.Url)
// 	query := u.Query().Get("v")
// 	musicdata.Url = query

// 	if len(MusicList) == 0 && NowMusic == empty {
// 		NowMusic.Url = query
// 		M.Broadcast([]byte(query))

// 	} else {
// 		MusicList = append(MusicList, musicdata)
// 	}
// }

// func Music_List(c *gin.Context) {

// 	c.JSON(200, MusicList)
// }

// func Next_Music(c *gin.Context) {

// 	url := MusicList[0].Url
// 	NowMusic = MusicList[0]
// 	MusicList = MusicList[1:]
// 	fmt.Println(url)
// 	M.Broadcast([]byte(url))
// }

// type MusicValue struct {
// 	Url string `json:"url"`
// }
// type MusicData struct {
// 	// Title string
// 	Url string
// }
