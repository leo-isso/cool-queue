import React from 'react'
import PropTypes from 'prop-types'

import * as Components from './Button.styles'

function Button ({
  children,
  disabled,
  id,
  form,
  onClick,
  reverse,
  type
}) {
  return (
    <Components.Button
      id={id}
      type={type}
      disabled={disabled}
      form={form}
      onClick={onClick}
      reverse={reverse}>
      {children}
    </Components.Button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.string,
  id: PropTypes.string,
  form: PropTypes.string,
  onClick: PropTypes.string,
  reverse: PropTypes.bool,
  type: PropTypes.string
}

export default Button
