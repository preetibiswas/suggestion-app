import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children,type,version, btnDisabled }) => {
  return (
    <button 
    className={`btn btn-${version}`} 
    type={type}
    disabled={ btnDisabled}

     >{children}</button>
  )
}

export default Button

Button.defaultProps={
    isDisabled:false

}

Button.propTypes={
  btnDisabled:PropTypes.bool
}