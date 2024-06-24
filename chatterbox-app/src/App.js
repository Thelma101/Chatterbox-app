import logo from './logo.svg';
import './App.css';
import ChatBox from './components/ChatBox';
import Message from './components/Message';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <ChatBox />} 
    </div>
  );
}

export default App;
