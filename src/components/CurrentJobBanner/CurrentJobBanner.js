import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import * as Components from './CurrentJobBanner.styles'
import Title from '../utils/Title'

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
          <Components.Text>
            <Title style={{ color: 'white', textDecoration: 'underline' }}>
              Current Running Job:
            </Title>
            <Title style={{ color: 'white', margin: '10px 0 0' }}>
              {job.name}
            </Title>
          </Components.Text>
        </Components.Wrapper>
      </Container>
    </Components.CurrentJobBanner>
  )
}

CurrentJobBanner.propTypes = {
  job: PropTypes.object.isRequired
}

export default CurrentJobBanner
