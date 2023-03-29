import React, { useState } from "react";
import "./Message.scss"

function Message({message, className}) {
    return (
        <div className={"Message " + className}>{ message }</div>
    )
}

export default Message