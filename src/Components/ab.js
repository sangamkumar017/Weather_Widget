import React, { useCallback, useEffect, useState } from 'react';
import ChatWidget, { MessageSendHandler, SendClickHandler } from 'react-styled-chat-widget';
import Spinner from '../spinner';

const ab = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // load some messages from history here using setMessages
    setLoading(false);
  }, []);

  // used to switch message delivery indicator
  const onMessageSend = useCallback<MessageSendHandler>((currentID, setDeliveryStatus) => {
    setDeliveryStatus();
  }, []);

  // called when user presses the send button
  const onSendClick = useCallback<SendClickHandler>((message) => {
    setMessages((prevMessages) => {
      const newMessage = {
        id: Math.floor(Math.random() * 10000),
        isPrimary: true,
        date: new Date(),
        sent: true,
        message,
        author: 'You',
      };
      return [...prevMessages, newMessage];
    });
  }, []);

  return (
    <ChatWidget
      defaultPosition="bottomRight"
      messages={messages}
      loading={loading}
      onMessageSend={onMessageSend}
      onSendClick={onSendClick}
      spinner={<Spinner />}
    >
      <div>
        <p>Welcome to the support window!</p>
        <hr />
        <p>Here you can chat directly with moderators. They usually answer in a few hours.</p>
      </div>
    </ChatWidget>
  );
};

export default ab;
