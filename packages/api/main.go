package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"log"
	"net/http"
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
		"From:" + "Portfolio" + "<api@koustav.dev>\r\n" +
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

	app.Post("/send-message", verifyTokenMiddleware, func(c *fiber.Ctx) error {
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

func verifyTokenMiddleware(c *fiber.Ctx) error {
	var r VerifyTokenRes
	verifyUrl := "https://challenges.cloudflare.com/turnstile/v0/siteverify"

	// Get the token from the request header
	token := c.Get("cf-turnstile-response")

	// Data to be sent to Cloudflare API
	data := VerifyTokenReq{
		Secret:   os.Getenv("CLOUDFLARE_SECRET"),
		Response: token,
		RemoteIp: c.IP(),
	}
	jsonData, _ := json.Marshal(data)
	body := bytes.NewReader(jsonData)

	res, err := http.Post(verifyUrl, "application/json", body)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Invalid token",
		})
	}

	if err := json.NewDecoder(res.Body).Decode(&r); err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Invalid token",
		})
	}

	if !r.Success {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Invalid token",
		})
	}

	return c.Next()
}

type VerifyTokenReq struct {
	Secret   string `json:"secret" form:"secret"`
	Response string `json:"response" form:"response"`
	RemoteIp string `json:"remoteip" form:"remoteip"`
}

type VerifyTokenRes struct {
	Success bool `json:"success"`
}
