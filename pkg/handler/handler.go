package handler

import (
	"orgole/pkg/domain"

	"github.com/gin-gonic/gin"
)

func Request_music(c *gin.Context) {
	var asset_url domain.MusicValue
	c.BindJSON(&asset_url)

}
