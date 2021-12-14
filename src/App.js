import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CurrentJobBanner from './components/CurrentJobBanner'
import Header from './components/Header'
import JobList from './components/JobList'
import ModalJobCreation from './components/ModalJobCreation'
import Tabs from './components/Tabs'

import { queueAddWorkingJob } from './redux/actions/queue'

function App () {
  const dispatch = useDispatch()

  const [showCreateModal, setShowCreateModal] = useState(false)

  const queue = useSelector((state) => state.queue)
  const { pending, completed, working_item: workingItem } = queue

  useEffect(() => {
    if (!workingItem && pending.length > 0) {
      dispatch(queueAddWorkingJob(pending[0]))
    }
  }, [workingItem, pending])

  const tabItems = [
    {
      title: 'Pending/Working',
      content: () => <JobList jobs={workingItem ? [workingItem, ...pending] : pending} />
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
        job={pending[0]}
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
