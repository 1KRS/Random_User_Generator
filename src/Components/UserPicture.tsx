import { User } from '../interfaces'

interface IUserPictureProps {
  user: User;
}

const UserPicture = ({user: { picture }} : IUserPictureProps) => {
  return (
    <img src={picture} alt='#' />
  )
}

export default UserPicture;