export const secondsToMinutes = (seconds) => {
  return parseFloat(seconds / 60).toFixed(2)
}

export const minutesToSeconds = (minutes) => {
  return parseFloat(minutes * 60).toFixed(2)
}
