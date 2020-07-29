import React, { useState } from "react";
import "./../styles/ChatSrceen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatSrceen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Lam",
      image:
        "https://vignette.wikia.nocookie.net/rapviet/images/a/a8/Lisa.jpg/revision/latest/top-crop/width/360/height/450?cb=20200404144301&path-prefix=vi",
      message: "What???",
    },
    {
      name: "Lam",
      image:
        "https://vignette.wikia.nocookie.net/rapviet/images/a/a8/Lisa.jpg/revision/latest/top-crop/width/360/height/450?cb=20200404144301&path-prefix=vi",
      message: "What up???",
    },
    {
      message: "Hi???",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatSrceen">
      <p className="chatSrceen__timestamp">YOU MATCH WITH LISA ON 10/7/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatSrceen__message">
            <Avatar alt={message.name} src={message.image} />
            <p className="chatSrceen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatSrceen__message">
            <p className="chatSrceen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatSrceen__input">
        <input
          className="chatSrceen__inputField"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button
          className="chatSrceen__inputBtn"
          type="submit"
          onClick={handleSend}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatSrceen;
