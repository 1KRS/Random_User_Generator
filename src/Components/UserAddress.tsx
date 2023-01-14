import { User } from "../interfaces"

interface IUserAddressProps {
  user: User;
}

const UserAddress = ({user: { address }}: IUserAddressProps) => {
  return (
    <div>{address}</div>
  )
}

export default UserAddress