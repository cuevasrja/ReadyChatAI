import './App.css';
import { useEffect, useState } from 'react';
import { getMessages } from './functions/requests';
import Chat from './components/Chat';

function App() {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    getMessages()
      .then(data => {
        console.log(data)
        setChat(data)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Chat chat={chat} />
      </header>
    </div>
  );
}

export default App;
