import { User } from '../interfaces'

interface IUserPictureProps {
  user: User;
}

const UserPicture = ({user: { picture }} : IUserPictureProps) => {
  return (
    // <div>{picture}</div>
    <img src={picture} alt='#' />
  )
}

export default UserPicture;