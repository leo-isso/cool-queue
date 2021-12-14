import { v4 as uuid } from 'uuid'

import { secondsToMinutes } from '../utils/time/timeFormat'

const createJob = ({ name, duration, timeFormat }) => {
  const formattedDuration = timeFormat === 'minutes' ? duration : secondsToMinutes(duration)

  // TODO: add job index
  return {
    name,
    duration: formattedDuration,
    id: uuid(),
    isRunning: false,
    status: 'pending',
    progress: 0
  }
}

export default createJob
