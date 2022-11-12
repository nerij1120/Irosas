import React from 'react';
import { Button } from 'react-bootstrap';

const PrimaryButton = ({text, className}) => {
  return (
    <Button className={className} variant='primary'>{text}</Button>
  )
}

export default PrimaryButton