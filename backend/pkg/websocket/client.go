package websocket

import (
	"log"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string          `json:"id"`
	Conn *websocket.Conn `json:"conn"`
	Pool *Pool           `json:"pool"`
}

type Message struct {
	Type int    `json:"type"`
	Body string `json:"body"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	for {
		messageType, p, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		message := Message{Type: messageType, Body: string(p)}
		c.Pool.Broadcast <- message
	}
}
