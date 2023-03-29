import React from "react";
import "./ChatInput.scss"

function ChatInput(props) {
    return (
        <div className="ChatInput">
            <input type="text" onKeyDown={props.send} placeholder="Type Message... Hit Enter to Send" />
        </div>
    )
}

export default ChatInput