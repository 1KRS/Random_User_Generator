import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Button from './Components/Button';
import { User } from './interfaces';
import UserPicture from './Components/UserPicture';
import UserName from './Components/UserName';
import UserAge from './Components/UserAge';
import UserAddress from './Components/UserAddress';

const App: React.FC = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState<User>({
    picture: '',
    name: '',
    age: '',
    address: '',
  })
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = () => {
    setLoading(true);
    axios.get('https://randomuser.me/api/')
    .then(res => {
      console.log('Data:', res.data.results[0])
      setUserData(res.data.results[0]);
      setUser({
          picture: res.data.results[0].picture.large,
          name: res.data.results[0].name.first,
          age: res.data.results[0].dob.age,
          address: res.data.results[0].location.street.name,
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

  return (
    <div className="App">
      <h1>Random User Generator App</h1>
      <Button 
        isActive={activeUser}  
        handleClick={onClickHandler}
      />
      {loading ? 
        <h3>Φορτώνει...</h3> : 
        <main>
          <UserPicture user={user} />
          <UserName user={user} />
          <UserAge user={user} />
          <UserAddress user={user} />
        </main>
      }
    </div>
  );
}

export default App;


// eslint-disable-next-line no-lone-blocks
{/* <div className='todoList'>
  {todoList.map((task: ITask, key: number) => {
    return <ToDoTask key={key} task={task} completeTask={completeTask}/>
  } )}
</div> */}