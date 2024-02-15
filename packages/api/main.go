package main

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"log"
	"net/smtp"
	"os"
)

type Message struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func SendMail(m *Message) error {
	// Sender data.
	from := os.Getenv("EMAIL")
	password := os.Getenv("PASSWORD")

	// Receiver email address.
	to := []string{
		"me@koustav.dev",
		"koustavmondal55@gmail.com",
	}

	// smtp server configuration.
	smtpHost := "smtp.zoho.in"
	smtpPort := "587"

	// MIME type
	mime := "Content-Type: text/html; charset=UTF-8\r\n\r\n"

	// Message.
	message := []byte(
		"From:" + "Portfolio" + m.Name + "<api@koustav.dev>\r\n" +
			"To: me@koustav.dev\r\n" +
			"Subject: New message from " + m.Name + "\r\n" +
			mime +
			m.Message + "\r\n")

	// Authentication.
	auth := smtp.PlainAuth("", from, password, smtpHost)

	// Sending email.
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, message)
	if err != nil {
		fmt.Println(err)
		return err
	}

	return nil
}

func main() {
	if err := godotenv.Load(); err != nil {
		panic(err)
	}

	app := fiber.New()

	app.Use(cors.New())

	app.Post("/send-message", func(c *fiber.Ctx) error {
		m := Message{}

		if err := c.BodyParser(&m); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Invalid request",
			})
		}

		if err := SendMail(&m); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "Failed to send message",
			})
		}

		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"message": "Message sent",
		})
	})

	log.Fatal(app.Listen(os.Getenv("PORT")))
}
