package main

import (
	"fmt"
	"net/url"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"gopkg.in/olahol/melody.v1"
)

var M = melody.New()
var MusicList []MusicData
var NowMusic MusicData

func main() {
	r := gin.Default()

	r.Use(static.Serve("/", static.LocalFile("./dist", true)))

	r.POST("/request", Request_music)
	r.GET("/musiclist", Music_List)
	r.GET("/next", Next_Music)
	// r.GET("/now", Music_Now)
	r.GET("/websocket", func(c *gin.Context) {
		M.HandleRequest(c.Writer, c.Request)
	})

	r.Run()
}

func Request_music(c *gin.Context) {
	var asset_url MusicValue
	var musicdata MusicData
	var empty MusicData
	c.BindJSON(&asset_url)
	u, _ := url.Parse(asset_url.Url)
	query := u.Query().Get("v")
	musicdata.Url = query

	if len(MusicList) == 0 && NowMusic == empty {
		NowMusic.Url = query
		M.Broadcast([]byte(query))

	} else {
		MusicList = append(MusicList, musicdata)
	}
}

func Music_List(c *gin.Context) {

	c.JSON(200, MusicList)
}

// func Music_Now(c *gin.Context) {
// 	var musicdata MusicData
// 	if len(NowMusic.Url) == 0 {
// 		musicdata = MusicList[0]
// 	} else {
// 		musicdata = NowMusic
// 	}

// 	c.JSON(200, musicdata)
// }

func Next_Music(c *gin.Context) {

	url := MusicList[0].Url
	NowMusic = MusicList[0]
	MusicList = MusicList[1:]
	fmt.Println(url)
	M.Broadcast([]byte(url))
}

type MusicValue struct {
	Url string `json:"url"`
}
type MusicData struct {
	// Title string
	Url string
}
