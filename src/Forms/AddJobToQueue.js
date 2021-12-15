import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'react-final-form'
import { useDispatch } from 'react-redux'

import Button from '../components/Button'
import TextInput from '../components/TextInput'
import RadioButton from '../components/RadioButton'

import { addPendingJob } from '../redux/actions/pending'

function AddJobToQueue ({ submitCallback, onCancel }) {
  const dispatch = useDispatch()

  const validateForm = ({ name, duration }) => {
    const errors = {}
    if (!name) {
      errors.name = 'The job name is required'
    }
    if (!duration) {
      errors.duration = 'The duration is required'
    }
    return errors
  }

  const onSubmit = values => {
    dispatch(addPendingJob(values))
    submitCallback && submitCallback()
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateForm}
      initialValues={{ timeFormat: 'minutes' }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field id="name" name="name" label="Job name" component={TextInput} />
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '15px 0'
            }}
          >
            <Button variant="default" type="submit">Submit</Button>
            {onCancel && (
              <Button type="button" onClick={onCancel} reverse>
                Cancel
              </Button>
            )}
          </div>
        </form>
      )}
    />
  )
}

AddJobToQueue.propTypes = {
  submitCallback: PropTypes.func,
  onCancel: PropTypes.func
}

export default AddJobToQueue
