package handler

import (
	"net/url"
	"orgol/pkg/api"

	"github.com/gin-gonic/gin"
	"gopkg.in/olahol/melody.v1"
)

var M = melody.New()
var MusicList []api.MusicData
var NowMusic api.MusicData

func Request_music(c *gin.Context) {
	var asset_url api.MusicValue
	var musicdata api.MusicData
	var empty api.MusicData
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

func Next_Music(c *gin.Context) {

	url := MusicList[0].Url
	NowMusic = MusicList[0]
	MusicList = MusicList[1:]
	M.Broadcast([]byte(url))
}
