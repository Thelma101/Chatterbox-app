import React, { useState } from "react";
import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const SendMessage = () => {
    const [message, setMessage] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        if (message.trim() === "") {
            alert("Enter valid message");
            return;
          }
          const { uid, displayName, photoURL } = auth.currentUser;
            await addDoc(collection(db, 'messages'), {
                text: message,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid,
              });
              setMessage('');
          }
        
    
    return (
      <form className="send-message" onSubmit={(e) => {
        sendMessage(e);
      }} >
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