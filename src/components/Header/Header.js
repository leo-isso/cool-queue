import React from 'react'
import { FaClipboardList, FaPlusSquare } from 'react-icons/fa'
import { useModal } from '../../contexts/Modals/Modal.context'

import * as Components from './Header.styles'
import Container from '../Container'

/**
 * Header Component
*/
function Header () {
  const { openModal } = useModal()
  return (
    <Components.Header>
      <Container>
        <Components.Wrapper>
          <Components.Brand>
            <FaClipboardList /> Cool Queue
          </Components.Brand>
          <Components.Nav>
            <Components.NavItem onClick={() => openModal('createJob')}>
              <FaPlusSquare />{' '}
              <Components.NavItemText>New Job</Components.NavItemText>
            </Components.NavItem>
          </Components.Nav>
        </Components.Wrapper>
      </Container>
    </Components.Header>
  )
}

export default Header
