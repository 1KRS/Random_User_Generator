import { User } from '../interfaces'

interface IUserNameProps {
  user: User;
}

const UserName = ({user: { name, surname }} : IUserNameProps) => {
  return (
    <div className='app__first_and_last'>{`${name} ${surname}`}</div>
  )
}

export default UserName;