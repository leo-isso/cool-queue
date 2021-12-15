import React from 'react'
import PropTypes from 'prop-types'

import JobCard from '../JobCard'
import * as Components from './JobList.styles'

import { useModal } from '../../contexts/Modals/Modal.context'

/**
 * JobList component
 * @param {object} jobs
 */
function JobList ({ jobs }) {
  const { openModal } = useModal()
  const hasJobs = jobs && jobs.length > 0

  const handleCancelItem = (job) => {
    openModal('removeJob', { job })
  }

  return (
    <Components.Wrapper>
      {hasJobs
        ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onCancelItem={(job) => handleCancelItem(job)}
              />
            ))
          )
        : (
            <Components.Empty>
              <Components.EmptyText>{'No items found :('}</Components.EmptyText>
            </Components.Empty>
          )}
    </Components.Wrapper>
  )
}

JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      duration: PropTypes.string,
      id: PropTypes.string,
      index: PropTypes.number,
      status: PropTypes.string,
      progress: PropTypes.number
    })
  )
}

export default JobList
