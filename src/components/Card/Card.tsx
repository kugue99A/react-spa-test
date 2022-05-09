import React, { VFC } from 'react';

type CardProps = {
  width?: string;
  height?: string;
  gap?: string;
  children?: React.ReactNode;
}

const Card: React.VFC<CardProps> = (props) => {
  return (
    <>
      <div>
        { props.children }
      </div>
    </>
  )
}

export default Card;
