import React from 'react'
import PropTypes from 'prop-types'
import { FaCheckCircle, FaChevronCircleRight, FaClock, FaMinusCircle, FaRegTrashAlt, FaTag } from 'react-icons/fa'

import * as Components from './JobCard.styles'
import colors from '../../styles/colors'

/**
 * JobCard component
 * @param {object} job
 * @param {function} onCancelItem
 */
function JobCard ({ job, onCancelItem }) {
  const { status, name, duration } = job

  const iconsByStatus = {
    pending: {
      color: colors.primary,
      icon: <FaRegTrashAlt color={colors.primaryDark} />,
      action: () => onCancelItem && onCancelItem(job)
    },
    working: {
      color: colors.success,
      icon: <FaMinusCircle color={colors.danger} />,
      action: () => onCancelItem && onCancelItem(job)
    },
    finished: {
      color: colors.success,
      icon: <FaCheckCircle color={colors.success} />,
      action: null
    },
    canceled: {
      color: colors.danger,
      icon: <FaMinusCircle color={colors.primaryDark} />,
      action: null
    }
  }

  // selects icon and action based on status
  const { icon, action, color } = iconsByStatus[status] || { icon: null, action: null }

  return (
    <Components.Card>
      <Components.Wrapper>
        <Components.InnerWrapper>
          <Components.Data>
            <Components.DataText>
              <FaTag />{' '}
              <Components.Text>
                <strong>Job name: </strong>
                {name}
              </Components.Text>
            </Components.DataText>
            <Components.DataText>
              <FaClock />{' '}
              <Components.Text>
                <strong>Duration: </strong>
                {duration} minutes
              </Components.Text>
            </Components.DataText>
            <Components.DataText>
              <FaChevronCircleRight />{' '}
              <Components.Text>
                <strong>Status: </strong>
              </Components.Text>
              <Components.Text color={color}>{status}</Components.Text>
            </Components.DataText>
          </Components.Data>
          <Components.Icon onClick={action}>{icon}</Components.Icon>
        </Components.InnerWrapper>
      </Components.Wrapper>
    </Components.Card>
  )
}

JobCard.propTypes = {
  job: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number,
    status: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  }).isRequired,
  onCancelItem: PropTypes.func
}

export default JobCard
