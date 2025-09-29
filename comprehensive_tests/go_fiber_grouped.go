package main

import (
	"net/http"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	// API v1 group - should create grouped APIs
	v1 := app.Group("/api/v1")
	{
		v1.Get("/users", func(c *fiber.Ctx) error {
			// Expected full_path: /api/v1/users
			resp, _ := http.Get("https://external-api.com/users")
			return c.JSON(fiber.Map{"data": resp})
		})

		v1.Post("/users", func(c *fiber.Ctx) error {
			// Expected full_path: /api/v1/users
			http.Post("https://validation-api.com/users", "application/json", nil)
			return c.Status(201).JSON(fiber.Map{"status": "created"})
		})

		v1.Get("/users/:id", func(c *fiber.Ctx) error {
			// Expected full_path: /api/v1/users/:id
			return c.JSON(fiber.Map{"id": c.Params("id")})
		})

		// Nested grouping
		posts := v1.Group("/posts")
		posts.Get("/", func(c *fiber.Ctx) error {
			// Expected full_path: /api/v1/posts/
			return c.JSON([]string{})
		})
	}

	// API v2 group
	v2 := app.Group("/api/v2")
	v2.Get("/users", func(c *fiber.Ctx) error {
		// Expected full_path: /api/v2/users
		return c.JSON(fiber.Map{"version": "v2"})
	})

	// Direct routes (no grouping)
	app.Get("/health", func(c *fiber.Ctx) error {
		// Expected full_path: /health
		return c.SendString("OK")
	})

	app.Listen(":3000")
}