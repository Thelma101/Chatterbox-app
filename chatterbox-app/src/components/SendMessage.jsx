import React, { useState } from "react";
import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const SendMessage = () => {
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if (!message) return;

        const timestamp = serverTimestamp();

        addDoc(collection(db, 'messages'), {
            timestamp,
            message,
            
    })
    }
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
          value={message}
          onClick={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    );
};

export default SendMessage;