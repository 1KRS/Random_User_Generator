import React from 'react'

interface Props {
  isActive: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC <Props> = ({isActive, handleClick}) => {
  return (
    <div>
      <button onClick = {handleClick}>{isActive ? 'Get another user' : 'Get user'}</button>
    </div>
  )
}

export default Button