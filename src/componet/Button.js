import React from 'react'
import './Button.css'

export const Button = (props) => {
  return (
    <>
    <button style={{
        backgroundColor:props.backgroundColor,
        color:props.color
    }} className='btn'>{props.children}</button>
    </>
  )
}
