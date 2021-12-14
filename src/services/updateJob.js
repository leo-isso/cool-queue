const updateJob = (job, updatedData) => {
  return {
    ...job,
    ...updatedData
  }
}

export default updateJob
