import React from 'react'

const List = ({text,className}) => {
  return (
    <li><a href="#" className={`text-listColor font-dm text-sm hover:text-primaryColor hover:font-bold ${className}`}>{text}</a></li>
  )
}

export default List


