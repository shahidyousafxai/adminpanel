import React from 'react'

const Image = (props) => {
  const {
    src,
    alt,
    imgStyleProps,
    divStyleProps,
  } = props;
  return (
    <div className={`${divStyleProps}`}>
      <img src={src} alt={alt} width="100%" height="100%" className={imgStyleProps} />
    </div>
  )
}

export default Image