import { minutesToSeconds } from '../utils/time/timeFormat'

/**
 * The inProgressJobSpy is a job simulator based on a setInterval
 * It is watched by the inProgressJobSpy instance that is injected
 * and retrieves info from the current job
 * @param {object} job - Job object
 * @param {inProgressJobSpy} spy - inProgressJobSpy instance
 * @returns {Promise} - Promise that resolves when the job is completed
 */
const inProgressJob = async (job, spy) => {
  const { duration } = job
  let time = 0
  let interval
  const durationInSeconds = minutesToSeconds(duration)

  spy.setDuration(durationInSeconds)

  return await new Promise((resolve) => {
    interval = setInterval(() => {
      spy.setProgress(time)
      spy.dispatchProgress()
      if (time >= durationInSeconds) {
        resolve(time)
        clearInterval(interval)
      } else {
        time++
      }
    }, 1000)
    spy.setIntervalId(interval)
  })
}

export default inProgressJob
