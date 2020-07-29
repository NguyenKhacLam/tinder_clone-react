import React from "react";
import "./../styles/Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Jisoo"
        message="Hi"
        timestamp="4 days ago"
        profilePic="https://i.pinimg.com/736x/9c/51/5e/9c515eef27985bd444b5b11b69c878d1.jpg"
      />
      <Chat
        name="Nancy"
        message="Hi"
        timestamp="4 days ago"
        profilePic="https://i.pinimg.com/originals/ca/60/2f/ca602fb60da834ef3fd82e70ae300acf.jpg"
      />
      <Chat
        name="Mark"
        message="Hi"
        timestamp="4 days ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      />
    </div>
  );
}

export default Chats;
