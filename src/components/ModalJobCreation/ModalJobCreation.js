import React from 'react'
import PropTypes from 'prop-types'

import * as Components from './ModalJobCreation.styles'
import Modal from '../Modal'
import AddJobToQueue from '../../Forms/AddJobToQueue'

function ModalJobCreation ({ show, onClose }) {
  return (
    <Modal show={show} onClose={onClose} title="Add item to queue">
      <Components.Wrapper>
        <AddJobToQueue/>
      </Components.Wrapper>
    </Modal>
  )
}

ModalJobCreation.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ModalJobCreation
