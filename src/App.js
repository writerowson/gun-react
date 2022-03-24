
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [guns, setGuns] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])
  return (
    <div className="App">
      <Navbar ></Navbar>
      <div className="gun-container">
        {
          guns.map(gun => <Card key={gun.id} data={gun}></Card>

          )}
      </div>

    </div>
  );
}

export default App;

// video 1:54:00