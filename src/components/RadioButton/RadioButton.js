import React from 'react'
import PropTypes from 'prop-types'

import * as Components from './RadioButton.styles'

function RadioButton ({ id, label, input, placeholder }) {
  return (
    <Components.Wrapper>
      <Components.Input
        id={id}
        type={'radio'}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
        placeholder={placeholder}
        checked={input.checked}
      />
      <Components.Label htmlFor={id}>{label}</Components.Label>
    </Components.Wrapper>
  )
}

RadioButton.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default RadioButton
