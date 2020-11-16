import React from 'react';
import '../../styles/MessageWarning.css';

const MessageWarning = (props) => {
  return <div className="MessageWarning">{props.message}</div>;
}

export default MessageWarning;
