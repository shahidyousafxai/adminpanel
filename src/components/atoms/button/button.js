import React from 'react';

const Button = (props) => {
  const {
    value,
    styleProps,
    handleClick,
  } = props;

  const handleClickprop = handleClick && (() => { handleClick() })
  return (
    <button className={`${styleProps} `} onClick={handleClickprop}>{value}</button>
  )
}

export default Button