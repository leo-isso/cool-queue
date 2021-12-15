import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import ModalJobCreation from '../../components/ModalJobCreation'
import ModalJobRemoval from '../../components/ModalJobRemoval/ModalJobRemoval'

const ModalContext = createContext({})

const MODALS = {
  createJob: (props) => <ModalJobCreation {...props} />,
  removeJob: (props) => <ModalJobRemoval {...props} />,
  empty: () => <></>
}

export const ModalProvider = ({ children }) => {
  const initialModalConfiguration = {
    show: false,
    name: null,
    props: {}
  }

  const [modalConfiguration, setModalConfiguration] = useState(initialModalConfiguration)

  const openModal = (name, props = {}) => {
    setModalConfiguration({
      show: true,
      name,
      props
    })
  }

  const closeModal = () => {
    setModalConfiguration(initialModalConfiguration)
  }

  console.log(modalConfiguration)

  return (
    <ModalContext.Provider value={{ closeModal, openModal }}>
      {children}
      {modalConfiguration.show &&
        (MODALS[modalConfiguration.name] || MODALS.empty)(
          modalConfiguration.props
        )}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node
}

export const useModal = () => useContext(ModalContext)
