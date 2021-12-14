import React from 'react'
import PropTypes from 'prop-types'
import { FaClipboardList, FaPlusSquare, FaSyncAlt } from 'react-icons/fa'

import * as Components from './Header.styles'
import Container from '../Container'

/**
 * Header Component
 * @param {function} addToQueue - function to add a new item to the queue
 * @param {function} updateQueue - function to update the queue
*/
function Header ({ addToQueue, updateQueue }) {
  return (
    <Components.Header>
      <Container>
        <Components.Wrapper>
          <Components.Brand>
            <FaClipboardList /> Cool Queue
          </Components.Brand>
          <Components.Nav>
            <Components.NavItem onClick={() => addToQueue()}>
              <FaPlusSquare />{' '}
              <Components.NavItemText>New Job</Components.NavItemText>
            </Components.NavItem>
            <Components.NavItem onClick={() => updateQueue()}>
              <FaSyncAlt />{' '}
              <Components.NavItemText>Update Queue</Components.NavItemText>
            </Components.NavItem>
          </Components.Nav>
        </Components.Wrapper>
      </Container>
    </Components.Header>
  )
}

Header.propTypes = {
  addToQueue: PropTypes.func.isRequired,
  updateQueue: PropTypes.func.isRequired
}

export default Header
