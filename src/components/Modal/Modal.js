import React from 'react'
import PropTypes from 'prop-types'
import { FaWindowClose } from 'react-icons/fa'

import * as Components from './Modal.styles'

/**
 *  Modal component
 * @param {Component} children - The children of the modal
 * @param {string} title - The title of the modal
 * @param {boolean} show - Whether or not the modal is visible
 * @param {function} onClose - The function to call when the modal is closed
 */
function Modal ({ children, show, onClose, title }) {
  if (!show) return null
  return (
    <Components.Background onClick={() => onClose()}>
      <Components.ModalBase onClick={(event) => event.stopPropagation()}>
        <Components.Close onClick={() => onClose()}>
          <FaWindowClose />
        </Components.Close>
        <Components.Header>{title}</Components.Header>
        {children}
      </Components.ModalBase>
    </Components.Background>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Modal
