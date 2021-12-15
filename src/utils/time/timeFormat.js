export const secondsToMinutes = (seconds) => {
  return parseFloat(seconds / 60).toFixed(2)
}

export const secondsToMiliseconds = (seconds) => {
  return parseInt(seconds * 1000)
}

export const minutesToSeconds = (minutes) => {
  return parseInt(minutes * 60)
}

export const minutesToMiliseconds = (minutes) => {
  return parseInt(minutes * 60000)
}
