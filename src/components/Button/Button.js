import React from 'react'
import PropTypes from 'prop-types'

import * as Components from './Button.styles'

import { variantConfig } from './configuration'

/**
 * Button component
 * @param {Node} children - The children of the button
 * @param {boolean} disabled - The disabled state of the button
 * @param {boolean} reverse - The reverse style state of the button
 * @param {string} type - The type of the button
 * @param {string} id - The id of the button
 * @param {Function} onClick - The onClick handler of the button
 */
function Button ({
  children,
  disabled,
  id,
  form,
  onClick,
  variant,
  type
}) {
  const variantOption = () => variantConfig[variant] || variantConfig.default

  return (
    <Components.Button
      id={id}
      type={type}
      disabled={disabled}
      form={form}
      onClick={onClick}
      variant={variantOption()}
    >
      {children}
    </Components.Button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.string,
  id: PropTypes.string,
  form: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'default',
    'reverse',
    'danger'
  ]),
  type: PropTypes.string
}

Button.defaultProps = {
  variant: 'default'
}

export default Button
