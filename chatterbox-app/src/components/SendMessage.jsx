import React from "react";
import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const SendMessage = () => {
    return (
      <form className="send-message">
        <label htmlFor="messageInput" hidden>
          Enter Message
        </label>
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          className="form-input__input"
          placeholder="type message..."
        />
        <button type="submit">Send</button>
      </form>
    );
  };

export default SendMessage;