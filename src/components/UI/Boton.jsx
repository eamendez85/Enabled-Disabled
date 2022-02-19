import React from 'react'

export const Boton = ({text, event}) => {
  return (
    <button id='btn' onClick={event}>{text}</button>
  )
}
