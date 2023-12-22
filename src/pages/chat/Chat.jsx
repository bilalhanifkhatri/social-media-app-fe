import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./chat.css";
import LogoSearch from "../../components/logoSearch/LogoSearch";
import { fetchChats } from "../../redux/actions/chatActions";
import Conversation from "../../components/conversation/Conversation";

const Chat = () => {
  const { user } = useSelector((state) => state?.authReducer?.authData);
  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetching = async () => {
      const data = await dispatch(fetchChats(user?._id));
      setChats(data);
      console.log(data);
    };
    fetching();
  }, [dispatch, user]);
  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="left-side-chat">
        <LogoSearch />
        <div className="chat-container">
          <h2>Chats</h2>
          <div className="chat-list">
            {chats?.map((chat) => (
              <>
                <Conversation data={chat} currentUser={user?._id} />
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side-chat">
        <h2>Chats</h2>
      </div>
    </div>
  );
};

export default Chat;
