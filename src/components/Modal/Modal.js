import React from 'react'
import PropTypes from 'prop-types'

import * as Components from './Modal.styles'
import { FaWindowClose } from 'react-icons/fa'

function Modal ({ children, show, onClose }) {
  if (!show) return null

  return (
    <Components.Background onClick={() => onClose()}>
      <Components.ModalBase onClick={(event) => event.stopPropagation()}>
        <Components.Close onClick={() => onClose()}>
          <FaWindowClose />
        </Components.Close>
        {children}
      </Components.ModalBase>
    </Components.Background>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
