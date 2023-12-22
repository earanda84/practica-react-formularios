// import React from 'react'
import PropTypes from 'prop-types'

const Button = ({label, type, className, onClick}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{label}</button>
  )
}

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button','reset']),
    className: PropTypes.string,
    // deleteTodo: PropTypes.func,
    onClick: PropTypes.func,
}

export default Button