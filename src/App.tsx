import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import { User } from './interfaces';
import UserPicture from './Components/UserPicture';
import UserName from './Components/UserName';
import UserAge from './Components/UserAge';
import UserAddress from './Components/UserAddress';

const App: React.FC = () => {

  // Not yet implemented
  // const [userData, setUserData] = useState([]);
  // const [lang, setLang] = useState('ελληνικά');
  
  const [user, setUser] = useState<User>({
    picture: '',
    name: '',
    surname: '',
    age: '',
    address: '',
  })
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  // Not yet implemented
  // const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = () => {
    setLoading(true);
    axios.get('https://randomuser.me/api/')
    .then(res => {
      console.log('Data:', res.data.results[0])
      // setUserData(res.data.results[0]);
      setUser({
          picture: res.data.results[0].picture.large,
          name: res.data.results[0].name.first,
          surname: res.data.results[0].name.last,
          age: `Age: ${res.data.results[0].dob.age}`,
          address: `Address: ${res.data.results[0].location.street.name}`,
      })
    })
    .catch(error => {
      console.log(error)
      setLoading(true);
    })
    .finally(() => {
      setLoading(false);
      setActiveUser(true);
    })
  }

  // Not yet implemented

  // const icons = [
  //   'fas fa-user fa-2x',
  //   'fas fa-envelope fa-2x',
  //   'fas fa-calendar-alt fa-2x',
  //   'fas fa-map-marker fa-2x',
  //   'fas fa-phone fa-2x',
  // ]

  return (
    <div className="App">
      <div>

      </div>
      <h1>Random User Generator App</h1>
      <Button 
        isActive={activeUser}  
        handleClick={onClickHandler}
      />
      {loading ? 
        <h3>Φορτώνει...</h3> : 
        <main>
          <div>
            <UserPicture user={user} />
          </div>
          {/* 
          // Not yet implemented
          <PhraseGenerator user={user}/>
          */}
          <div className='app__name'>
              <UserName user={user} />
          </div>
          <UserAge user={user} />
          <UserAddress user={user} />

          {/*
          // Not yet implemented
          <div className='app__icons'>
            {icons.map((icon, index) => {
              return <i className={icon} key={index}></i>;
            })}
          </div>
          */}

        </main>
      }
    </div>
  );
}

export default App;
