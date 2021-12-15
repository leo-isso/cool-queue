import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import * as Components from './CurrentJobBanner.styles'
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import Button from '../Button'

import { useModal } from '../../contexts/Modals/Modal.context'

/**
 * CurrentJobBanner Component
 */
function CurrentJobBanner () {
  const { openModal } = useModal()
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
                  Job duration: {workingItem.duration} minutes
                </Components.Text>
                <Components.Text>Progress:</Components.Text>
                <Components.OptionsWrapper>
                  <ProgressBar progress={workingItem.progress} />
                  <Button variant="danger"
                    onClick={(job) => openModal('removeJob', { job })}>
                    Cancel
                  </Button>
                </Components.OptionsWrapper>
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
