import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import ModalJobCreation from '../../components/ModalJobCreation'
import ModalJobRemoval from '../../components/ModalJobRemoval/ModalJobRemoval'

const ModalContext = createContext({})

const MODALS = {
  createJob: () => <ModalJobCreation />,
  removeJob: () => <ModalJobRemoval />,
  empty: () => <></>
}

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState(null)

  const openModal = (name) => {
    setName(name)
    setShow(true)
  }

  const closeModal = () => {
    setName(null)
    setShow(true)
  }

  return (
    <ModalContext.Provider value={{ show, name, closeModal, openModal }}>
      {children}
      {show && (MODALS[name] || MODALS.empty)()}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node
}

export const useModal = () => useContext(ModalContext)
