import store from '../redux/store'
import { queueUpdatWorkingJob } from '../redux/actions/queue'

/**
 * The inProgressJobSpy should be instanced only once
 * and it should be injected in the inProgressJob service
 * in order to watch and retrieve info from the current job
 * It has both methods that supports watching and stoping the interval
 * Regularly this code could be replaced by an websocket event reciever,
 * a poilling system or a sync server request
 */
const inProgressJobSpy = () => ({
  duration: 0,
  intervalId: '',
  progress: 0,

  setDuration (duration) {
    this.duration = duration
  },

  setIntervalId (id) {
    this.intervalId = id
  },

  stopInterval () {
    clearInterval(this.intervalId)
  },

  setProgress (time) {
    this.progress = parseInt((time * 100) / this.duration)
  },

  dispatchProgress () {
    store.dispatch(queueUpdatWorkingJob({ progress: this.progress }))
  }
})

const inProgressJobSpyInstance = inProgressJobSpy()

export default inProgressJobSpyInstance
