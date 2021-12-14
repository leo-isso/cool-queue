import { useState } from 'react'

import CurrentJobBanner from './components/CurrentJobBanner'
import Header from './components/Header'
import JobList from './components/JobList'
import ModalJobCreation from './components/ModalJobCreation'
import Tabs from './components/Tabs'

import jobs from './mocks/jobs'

function App () {
  const [showCreateModal, setShowCreateModal] = useState(false)

  const renderList = () => {
    return (
      <JobList jobs={jobs} />
    )
  }
  const tabItems = [
    {
      title: 'Tab 1',
      content: () => renderList()
    },
    {
      title: 'Tab 2',
      content: () => renderList()
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
