import { chatStore } from "@/store/chat";
import { useState, useLayoutEffect, useRef, FormEvent } from "react";
const SecondPerson = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    const messageObject = {
      person: "second-person",
      text: e.target.elements.messageInput.value.trim(),
    };
    chatStore.sendMessage(messageObject);
    ref.current?.reset();
  };

  const onClearChat = () => {
    chatStore.clearChat();
  };

  return (
    <div className="container">
      <h2>Mycroft</h2>
      <div className="chat-box">
        {chatState.data.map((message) => (
          <div>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </div>
        ))}
      </div>
      <form id="messageForm" ref={ref} onSubmit={onFormSubmit}>
        <input
          type="text"
          id="messageInput"
          name="messageInput"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button> <br />
      </form>

      <button className="clear-button" onClick={onClearChat}>
        Clear Chat
      </button>
    </div>
  );
};
export default SecondPerson;
