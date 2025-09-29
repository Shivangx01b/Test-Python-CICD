package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// API v1 group - should create grouped APIs
	v1 := r.Group("/api/v1")
	{
		v1.GET("/users", func(c *gin.Context) {
			// Expected full_path: /api/v1/users
			resp, _ := http.Get("https://external-api.com/users")
			c.JSON(200, gin.H{"data": resp})
		})

		v1.POST("/users", func(c *gin.Context) {
			// Expected full_path: /api/v1/users
			http.Post("https://validation-api.com/users", "application/json", nil)
			c.JSON(201, gin.H{"status": "created"})
		})

		v1.GET("/users/:id", func(c *gin.Context) {
			// Expected full_path: /api/v1/users/:id
			c.JSON(200, gin.H{"id": c.Param("id")})
		})

		// Nested grouping
		posts := v1.Group("/posts")
		{
			posts.GET("", func(c *gin.Context) {
				// Expected full_path: /api/v1/posts
				c.JSON(200, gin.H{"posts": []string{}})
			})

			posts.GET("/:id", func(c *gin.Context) {
				// Expected full_path: /api/v1/posts/:id
				c.JSON(200, gin.H{"post_id": c.Param("id")})
			})
		}
	}

	// API v2 group
	v2 := r.Group("/api/v2")
	{
		v2.GET("/users", func(c *gin.Context) {
			// Expected full_path: /api/v2/users
			c.JSON(200, gin.H{"version": "v2"})
		})
	}

	// Direct routes (no grouping)
	r.GET("/health", func(c *gin.Context) {
		// Expected full_path: /health
		c.JSON(200, gin.H{"status": "healthy"})
	})

	r.Run()
}