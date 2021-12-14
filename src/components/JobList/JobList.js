import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import JobCard from '../JobCard'
import * as Components from './JobList.styles'
import { queueRemovePendingJob } from '../../redux/actions/queue'

/**
 * JobList component
 * @param {object} jobs
 */
function JobList ({ jobs }) {
  const dispatch = useDispatch()
  const hasJobs = jobs && jobs.length > 0

  const handleCancelItem = (job) => {
    dispatch(queueRemovePendingJob(job))
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
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      index: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired
    })
  ).isRequired
}

export default JobList
