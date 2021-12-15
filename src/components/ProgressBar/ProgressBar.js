import React from 'react'
import PropTypes from 'prop-types'

import * as Components from './ProgressBar.style'

function ProgressBar ({ progress }) {
  return (
    <Components.Bar>
      <Components.CurrentProgress progress={progress} />
    </Components.Bar>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
}

export default ProgressBar
