import React from 'react'

const Badge = ({text, className}) => {
  return (
    <div className={`${className} py-2 px-7 bg-primaryColor text-dm text-white w-[92px]`}>{text}</div>
  )
}

export default Badge