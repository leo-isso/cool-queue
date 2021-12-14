import React from 'react'
import PropTypes from 'prop-types'

import * as Components from './TextInput.styles'

/**
 *
 * @param {string} id - The id of the input
 * @param {string} label - The label of the input
 * @param {string} placeholder - The placeholder of the input
 * @param {object} input - input data from Field component from react-final-form
 * @param {object} meta - meta data from Field component from react-final-form
 */
function TextInput ({
  id,
  label,
  input,
  meta,
  placeholder
}) {
  return (
    <Components.Wrapper>
      <Components.Label htmlFor={id}>{label}</Components.Label>
      <Components.Input
        id={id}
        type={input.type || 'text'}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        placeholder={placeholder}
        hasError={meta.touched && (meta.error || meta.submitError)}
      />
      {meta.touched && (meta.error || meta.submitError) && (
        <Components.Error>{meta.error || meta.submitError}</Components.Error>
      )}
    </Components.Wrapper>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default TextInput
