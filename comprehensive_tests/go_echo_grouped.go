package main

import (
	"net/http"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// API v1 group - should create grouped APIs
	v1 := e.Group("/api/v1")
	{
		v1.GET("/users", func(c echo.Context) error {
			// Expected full_path: /api/v1/users
			resp, _ := http.Get("https://external-api.com/users")
			return c.JSON(200, map[string]interface{}{"data": resp})
		})

		v1.POST("/users", func(c echo.Context) error {
			// Expected full_path: /api/v1/users
			http.Post("https://validation-api.com/users", "application/json", nil)
			return c.JSON(201, map[string]string{"status": "created"})
		})

		v1.GET("/users/:id", func(c echo.Context) error {
			// Expected full_path: /api/v1/users/:id
			return c.JSON(200, map[string]string{"id": c.Param("id")})
		})

		// Nested grouping
		posts := v1.Group("/posts")
		posts.GET("", func(c echo.Context) error {
			// Expected full_path: /api/v1/posts
			return c.JSON(200, []string{})
		})
	}

	// API v2 group
	v2 := e.Group("/api/v2")
	v2.GET("/users", func(c echo.Context) error {
		// Expected full_path: /api/v2/users
		return c.JSON(200, map[string]string{"version": "v2"})
	})

	// Direct routes (no grouping)
	e.GET("/health", func(c echo.Context) error {
		// Expected full_path: /health
		return c.String(200, "OK")
	})

	e.Logger.Fatal(e.Start(":8080"))
}