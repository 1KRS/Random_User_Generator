import React from 'react'

interface Props {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC <Props> = ({handleClick}) => {
  return (
    <div>
      <button onClick = {handleClick}>Get User</button>
    </div>
  )
}

export default Button