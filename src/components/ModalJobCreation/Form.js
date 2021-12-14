import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import TextInput from '../TextInput'

function CreateJobForm ({ handleSubmit, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field id="job" name="job" label="Job name" component={TextInput} />
      <Field id="duration" name="duration" label="Duration" type='number' component={TextInput} />
      <button type="submit">Submit</button>
    </form>
  )
}

CreateJobForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
}

export default CreateJobForm
