import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import JobCard from '../JobCard'
import * as Components from './JobList.styles'
import { queueRemovePendingJob, queueRemoveWorkingJob } from '../../redux/actions/queue'

/**
 * JobList component
 * @param {object} jobs
 */
function JobList ({ jobs }) {
  const dispatch = useDispatch()
  const hasJobs = jobs && jobs.length > 0

  const handleCancelItem = (job) => {
    if (job.status === 'pending') {
      dispatch(queueRemovePendingJob(job))
    }
    dispatch(queueRemoveWorkingJob(job))
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
