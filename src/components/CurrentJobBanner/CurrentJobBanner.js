import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import * as Components from './CurrentJobBanner.styles'
import Container from '../Container'
import ProgressBar from '../ProgressBar/'

/**
 * CurrentJobBanner Component
 */
function CurrentJobBanner () {
  const workingItem = useSelector((state) => state.working_item)

  return (
    <Components.CurrentJobBanner>
      <Container>
        <Components.Wrapper>
          <Components.ContentBlock>
            {workingItem
              ? (
              <>
                <Components.Title style={{ textDecoration: 'underline' }}>
                  Current Running Job:
                </Components.Title>
                <Components.Text>Job name: {workingItem.name}</Components.Text>
                <Components.Text>
                  Job duration: {workingItem.duration}
                </Components.Text>
                <Components.Text>Progress:</Components.Text>
                <ProgressBar progress={workingItem.progress} />
              </>
                )
              : (
              <>
                <Components.Title style={{ textDecoration: 'underline' }}>
                  No Current Running Job
                </Components.Title>
                <Components.Text>
                  The running job information will be available here!
                </Components.Text>
              </>
                )}
          </Components.ContentBlock>
        </Components.Wrapper>
      </Container>
    </Components.CurrentJobBanner>
  )
}

CurrentJobBanner.propTypes = {
  job: PropTypes.object
}

export default CurrentJobBanner
