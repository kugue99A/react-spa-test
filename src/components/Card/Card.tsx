import React, { VFC } from 'react'

type CardProps = {
  width?: string
  height?: string
  gap?: string
  children?: React.ReactNode
}

const Card: React.VFC<CardProps> = (props) => {
  return (
    <>
      <div className="flex flex-col content-center items-center p-[3rem] shadow-xl">
        {props.children}
      </div>
    </>
  )
}

export default Card
