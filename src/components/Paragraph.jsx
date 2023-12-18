import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`font-dmsans text-listColor text-base font-regular ${className}`}>{text}</p>
  )
}

export default Paragraph