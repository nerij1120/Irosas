import React from 'react';
import { Button } from 'react-bootstrap';
import '../index.css';

const PrimaryButton = ({text}) => {
  return (
    <Button variant='primary'>{text}</Button>
  )
}

export default PrimaryButton