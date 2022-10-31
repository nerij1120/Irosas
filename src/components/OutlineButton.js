import React from 'react'
import { Button } from 'react-bootstrap'

const OutlineButton = ({text, onClick}) => {
  return (
    <Button variant='outline-primary' onClick={onClick}>{text}</Button>
  )
}

export default OutlineButton