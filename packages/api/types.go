package main

type Message struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

type VerifyTokenReq struct {
	Secret   string `json:"secret" form:"secret"`
	Response string `json:"response" form:"response"`
	RemoteIp string `json:"remoteip" form:"remoteip"`
}

type VerifyTokenRes struct {
	Success bool `json:"success"`
}
