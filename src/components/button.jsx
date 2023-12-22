// import React from 'react'
import PropTypes from 'prop-types'

const Button = ({label, type, className, deleteTodo}) => {
  return (
    <button type={type} className={className} onClick={deleteTodo}>{label}</button>
  )
}

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button','reset']),
    className: PropTypes.string,
    deleteTodo: PropTypes.func,
}

export default Button