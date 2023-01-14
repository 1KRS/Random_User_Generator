import { User } from "../interfaces"

interface IUserAgeProps {
  user: User;
}

const UserAge = ({user: { age }}: IUserAgeProps) => {
  return (
    <div>{age}</div>
  )
}

export default UserAge