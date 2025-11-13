import React from 'react'

const Container =({children,className}) => {
  return (
    <div className={`max-w-[1300px] mx-auto px-2.5 lg:px-2 ${className}`}>{children}</div>
  )
}

export default Container 