import React from "react";
import { Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import { clearMessage } from "../store/actions/messages";

function MessageComponent() {
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  return (
    <Message
      className="message-block"
      color={message.isPositive ? "green" : "red"}
      compact
      hidden={!message.isShown}
      onDismiss={() => dispatch(clearMessage())}
    >
      <Message.Header>{message.header}</Message.Header>
      {message.body}
    </Message>
  )
}
export default MessageComponent;