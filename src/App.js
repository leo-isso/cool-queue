import { useState } from 'react'
import { useSelector } from 'react-redux'

import CurrentJobBanner from './components/CurrentJobBanner'
import Header from './components/Header'
import JobList from './components/JobList'
import ModalJobCreation from './components/ModalJobCreation'
import Tabs from './components/Tabs'

import jobs from './mocks/jobs'

function App () {
  const [showCreateModal, setShowCreateModal] = useState(false)

  const queue = useSelector((state) => state.queue)
  const { pending, completed } = queue

  const tabItems = [
    {
      title: 'Pending/Working',
      content: () => <JobList jobs={pending} />
    },
    {
      title: 'Finished',
      content: () => <JobList jobs={completed} />
    }
  ]

  return (
    <div className="App">
      <Header
        addToQueue={() => setShowCreateModal(true)}
        updateQueue={() => console.log('update')}
      />
      <CurrentJobBanner
        job={jobs[0]}
      />
      <Tabs
        tabItems={tabItems}
      />
      <ModalJobCreation
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        />
    </div>
  )
}

export default App
