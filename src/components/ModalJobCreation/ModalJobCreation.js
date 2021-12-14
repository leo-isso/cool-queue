import React from 'react'

import * as Components from './ModalJobCreation.styles'
import Modal from '../Modal'
import AddJobToQueue from '../../Forms/AddJobToQueue'
import { useModal } from '../../contexts/Modals/Modal.context'

/**
 * ModalJobCreation component
 * Extension of Modal component
 */
function ModalJobCreation () {
  const { closeModal } = useModal()
  return (
    <Modal onClose={closeModal} title="Add item to queue">
      <Components.Wrapper>
        <AddJobToQueue submitCallback={closeModal} onCancel={closeModal}/>
      </Components.Wrapper>
    </Modal>
  )
}

export default ModalJobCreation
