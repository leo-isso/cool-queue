import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CurrentJobBanner from './components/CurrentJobBanner'
import Header from './components/Header'
import JobList from './components/JobList'
import Tabs from './components/Tabs'

import { useModal } from './contexts/Modals/Modal.context'
import { addWorkingItem } from './redux/actions/workingItem'

function App () {
  console.log('render')
  const dispatch = useDispatch()
  const { openModal } = useModal()

  const pending = useSelector((state) => state.pending)
  const completed = useSelector((state) => state.completed)
  const workingItem = useSelector((state) => state.working_item)

  useEffect(() => {
    if (!workingItem && pending.length > 0) {
      dispatch(addWorkingItem(pending[0]))
    }
  }, [pending])
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
        addToQueue={() => openModal('createJob')}
        updateQueue={() => console.log('update')}
      />
      <CurrentJobBanner job={workingItem} />
      <Tabs tabItems={tabItems} />
    </div>
  )
}

export default App
