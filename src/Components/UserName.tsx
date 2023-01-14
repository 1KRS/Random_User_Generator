import { User } from '../interfaces'

interface IUserNameProps {
  user: User;
}

const UserName = ({user: { name }} : IUserNameProps) => {
  return (
    <div>{name}</div>
  )
}

export default UserName;