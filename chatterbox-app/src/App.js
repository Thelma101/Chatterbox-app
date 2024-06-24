import { auth } from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import './App.css';
import ChatBox from './components/ChatBox';
import Message from './components/Message';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  const [user] = useAuthState(auth);

  console.log(user);

  
  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;
