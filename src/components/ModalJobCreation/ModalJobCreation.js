import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import * as Components from './ModalJobCreation.styles'
import JobCreationForm from './Form'
import Modal from '../Modal'

function ModalJobCreation ({ show, onClose }) {
  return (
    <Modal show={show} onClose={onClose} title="Add item to queue">
      <Components.Wrapper>
        <Form
          onSubmit={(values) => console.log(values)}
          validate={(values) => console.log(values)}
          initialValues={{ timeFormat: 'minutes' }}
          render={({ handleSubmit, submitting }) => (
            <JobCreationForm handleSubmit={handleSubmit} submitting={submitting}/>
          )}
      />
      </Components.Wrapper>
    </Modal>
  )
}

ModalJobCreation.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ModalJobCreation
