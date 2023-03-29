import React, { useEffect } from "react";
import Message from "../Message/Message";
import "./ChatHistory.scss"

const ChatHistory = (props) => {
    const id = localStorage.getItem('id')
    useEffect(function() {
        scrollToBottom()
    },  [props.chatHistory])

    const message = props.chatHistory.map((msg, index) => {
        const data = JSON.parse(msg.data)
        console.log(data);
        const dataParse = JSON.parse(data.body)
        console.log(dataParse.msg);

        return (
            <Message 
                key={index} 
                className={id == dataParse.id ? 'me' : ''} 
                message={dataParse.msg} 
            />)
    })

    const scrollToBottom = () => {
        const chat = document.querySelector(".ChatHistory")
        chat.scrollTop = chat.scrollHeight
    }

    return (
        <div className="ChatHistory">
            <h2>Chat History</h2>
            {message}
        </div>
    )
}

export default ChatHistory