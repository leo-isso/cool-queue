import React from 'react'
import PropTypes from 'prop-types'
import { FaPlusSquare, FaSyncAlt } from 'react-icons/fa'

import * as Components from './Header.styles'
import Container from '../Container'

function Header ({ addToQueue, updateQueue }) {
  return (
    <Components.Header>
      <Container>
        <Components.Wrapper>
          <Components.Brand>Cool Queue</Components.Brand>
          <Components.Nav>
            <Components.NavItem onClick={() => addToQueue('add')}><FaPlusSquare/></Components.NavItem>
            <Components.NavItem onClick={() => updateQueue('update')}><FaSyncAlt/></Components.NavItem>
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
