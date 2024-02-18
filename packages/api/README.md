# Portfolio - API

![](https://img.shields.io/badge/Go-00ADD8.svg?style=for-the-badge&logo=Go&logoColor=white)
![](https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white)

## Description

This is a simple API that verifies CAPTCHA token from frontend and then send mail to me with the message from contact-me page. The API is containerized using Docker and can be deployed to any cloud provider.

## Endpoints

- `GET /`: Shows status of the API
- `GET /send-message`: Send a message to my email


## Running the API

To run the API, you need to have Go installed in your machine. You can then run the following command:

```bash
go install .
```

```bash
go run .
```

## Licence

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

