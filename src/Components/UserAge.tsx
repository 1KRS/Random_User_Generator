import { User } from "../interfaces"

interface IUserAgeProps {
  user: User;
}

const UserAge = ({user: { age }}: IUserAgeProps) => {
  return (
    <div className='app__maininfo'>{age}</div>
  )
}

export default UserAge