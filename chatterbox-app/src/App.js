import React from 'react';
import { auth } from './firebase';
import { useAuthState }  from 'react-firebase-hooks/auth';
import './App.css';
import ChatBox from './components/ChatBox';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Navbar />
      {user ? <ChatBox /> : <Welcome />}
    </div>
  );
}

export default App;
