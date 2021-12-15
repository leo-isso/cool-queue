import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import * as Components from './ModalJobRemoval.styles'
import Modal from '../Modal'
import Button from '../Button'

import { useModal } from '../../contexts/Modals/Modal.context'
import { removePendingJob } from '../../redux/actions/pending'
import { removeWorkingItem } from '../../redux/actions/workingItem'

/**
 * ModalJobRemoval component
 * Extension of Modal component
 * @param {object} job - Job object
 */
function ModalJobRemoval ({ job }) {
  const dispatch = useDispatch()
  const { closeModal } = useModal()

  const handleCancelItem = () => {
    if (job.status === 'pending') {
      dispatch(removePendingJob(job))
    } else {
      dispatch(removeWorkingItem(job))
    }
    closeModal()
  }

  return (
    <Modal onClose={closeModal} title="Remove Job">
      <Components.Wrapper>
        <Button onClick={handleCancelItem}>Remove</Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Components.Wrapper>
    </Modal>
  )
}

ModalJobRemoval.propTypes = {
  job: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number,
    status: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  }).isRequired
}

export default ModalJobRemoval
