import React from 'react'
import PropTypes from 'prop-types'

import * as Components from './Container.styles'

function Container ({ children }) {
  return (
    <Components.Container>
      {children}
    </Components.Container>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
