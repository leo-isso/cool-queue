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
          <Components.TextBlock>
            {workingItem
              ? (
              <>
                <Components.Title style={{ textDecoration: 'underline' }}>
                  Current Running Job:
                </Components.Title>
                <Components.Text style={{ margin: '10px 0 0' }}>
                  Job name: {workingItem.name}
                </Components.Text>
                <Components.Text style={{ margin: '10px 0 0' }}>
                  Job duration: {workingItem.duration}
                </Components.Text>
                <Components.Text style={{ margin: '10px 0 0' }}>
                  Progress:
                </Components.Text>
                <ProgressBar progress={workingItem.progress} />
              </>
                )
              : (
              <Components.Title style={{ textDecoration: 'underline' }}>
                No Current Running Job
              </Components.Title>
                )}
          </Components.TextBlock>
        </Components.Wrapper>
      </Container>
    </Components.CurrentJobBanner>
  )
}

CurrentJobBanner.propTypes = {
  job: PropTypes.object
}

export default CurrentJobBanner
