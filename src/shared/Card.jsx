import React from 'react'
import PropTypes from 'prop-types'

const Card = ({children}) => {
  return (
    <div className='card'>{children}</div>
  )
}

export default Card

Card.defaultProps={reerse:false}
Card.propTypes={children:PropTypes.node.isRequired,
reserve:PropTypes.bool}