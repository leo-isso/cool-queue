import React from 'react'
import PropTypes from 'prop-types'

import JobCard from '../JobCard'
import * as Components from './JobList.styles'

/**
 * JobList component
 * @param {object} jobs
 */
function JobList ({ jobs }) {
  return (
    <Components.Wrapper>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          onCancelItem={(job) => console.log(job)}
          />
      ))}
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
