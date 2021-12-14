import React from 'react'
import PropTypes from 'prop-types'
import { FaCheckCircle, FaClock, FaMinusCircle, FaRegTrashAlt, FaTag } from 'react-icons/fa'

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
      icon: <FaRegTrashAlt color={colors.primaryDark} />,
      action: () => onCancelItem && onCancelItem(job)
    },
    working: {
      icon: <FaMinusCircle color={colors.danger} />,
      action: () => onCancelItem && onCancelItem(job)
    },
    finished: {
      icon: <FaCheckCircle color={colors.success} />,
      action: null
    },
    cancelled: {
      icon: <FaMinusCircle color={colors.primaryDark} />,
      action: null
    }
  }

  // selects icon and action based on status
  const { icon, action } = iconsByStatus[status] || { icon: null, action: null }

  return (
    <Components.Card>
      <Components.Wrapper>
        <Components.Data>
          <Components.DataText>
            <FaTag/> <strong>Job name: </strong>{name}
          </Components.DataText>
          <Components.DataText>
            <FaClock/> <strong>Duration: </strong>{duration} minutes
          </Components.DataText>
        </Components.Data>
        <Components.Icon onClick={action}>
          {icon}
        </Components.Icon>
      </Components.Wrapper>
    </Components.Card>
  )
}

JobCard.propTypes = {
  job: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  }).isRequired,
  onCancelItem: PropTypes.func
}

export default JobCard
