import { User } from "../interfaces"

interface IUserAddressProps {
  user: User;
}

const UserAddress = ({user: { address }}: IUserAddressProps) => {
  return (
    <div className='app__maininfo'>{address}</div>
  )
}

export default UserAddress