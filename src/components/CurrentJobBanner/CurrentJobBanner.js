import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import * as Components from './CurrentJobBanner.styles'

/**
 * CurrentJobBanner Component
 * @param {object} job
 * @param {string} job.name - name of the job
 */
function CurrentJobBanner ({ job }) {
  return (
    <Components.CurrentJobBanner>
      <Container>
        <Components.Wrapper>
          <Components.TextBlock>
            <Components.Text
              style={{ textDecoration: 'underline' }}>
              Current Running Job:
            </Components.Text>
            <Components.Text
              style={{ margin: '10px 0 0' }}>
              {job.name}
            </Components.Text>
          </Components.TextBlock>
        </Components.Wrapper>
      </Container>
    </Components.CurrentJobBanner>
  )
}

CurrentJobBanner.propTypes = {
  job: PropTypes.object.isRequired
}

export default CurrentJobBanner
