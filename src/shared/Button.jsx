import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children,type,version,isDisabled }) => {
  return (
    <button 
    className={`btn btn-${version}`} 
    type={type}
    disabled={isDisabled}

     >{children}</button>
  )
}

export default Button

Button.defaultProps={
    isDisabled:false

}

Button.propTypes={
    isDisabled:PropTypes.bool
}