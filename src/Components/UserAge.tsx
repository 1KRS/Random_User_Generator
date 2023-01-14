import { User } from "../interfaces"

interface IUserAgeProps {
  user: User;
}

const UserAge = ({user: { age }}: IUserAgeProps) => {
  return (
    <div className='app__maininfo'>Age: {age}</div>
  )
}

export default UserAge