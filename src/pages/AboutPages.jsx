import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'

const AboutPages = () => {
  return (
    <Card><h1>
        AboutPages
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, amet!
    </h1>
    <Link to='/'>
    <Button version='secondary'>Back to home</Button>
    </Link>
    </Card>
  )
}

export default AboutPages