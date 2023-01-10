import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';

const App: React.FC = () => {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = () => {
    setLoading(true);
    axios.get('https://randomuser.me/api/')
    .then(res => {
      console.log(res);
      setUserData(res.data.results);
    })
    .catch(error => {
      console.log(error)
      setLoading(true);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="App">
      <h1>Random User Generator App</h1>
      <Button 
        // isActive={activeUser}  
        handleClick={onClickHandler}
      />
    </div>
  );
}

export default App;
