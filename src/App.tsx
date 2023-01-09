import { useState } from 'react';
import './App.css';
import Button from './Components/Button';

function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = () => {

  }

  return (
    <div className="App">
      <h1>Ούλε τε και μάλα χαίρε</h1>
      <h1>Random User Generator App</h1>
      <Button isActive={activeUser} clicked={onClickHandler}/>
    </div>
  );
}

export default App;
