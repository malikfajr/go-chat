import "./App.css";
import { connect, sendMsg } from "./api";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

const id = Math.floor(Math.random() * 100);

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    localStorage.setItem("id", id);

    connect((msg) => {
      console.log(msg);
      setChatHistory([...chatHistory, msg]);
    });
  }, [chatHistory]);

  const send = (event) => {
    if (event.keyCode === 13 && event.target.value != "") {
      sendMsg(id, event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
}

export default App;
