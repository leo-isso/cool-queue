import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import TextInput from '../TextInput'
import RadioButton from '../RadioButton'
import Button from '../Button'

function CreateJobForm ({ handleSubmit, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field id="job" name="job" label="Job name" component={TextInput} />
      <Field
        id="duration"
        name="duration"
        label="Duration"
        type="number"
        component={TextInput}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Field
          selected={false}
          id="minutes"
          name="timeFormat"
          label="minutes"
          type="radio"
          component={RadioButton}
          value="minutes"
        />
        <Field
          selected={false}
          id="seconds"
          name="timeFormat"
          label="seconds"
          type="radio"
          component={RadioButton}
          value="seconds"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
        <Button type="submit">Submit</Button>
        <Button type="submit" reverse>Cancel</Button>
      </div>
    </form>
  )
}

CreateJobForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
}

export default CreateJobForm
