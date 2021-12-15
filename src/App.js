// import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import CurrentJobBanner from './components/CurrentJobBanner'
import Header from './components/Header'
import JobList from './components/JobList'
import Tabs from './components/Tabs'

import { useModal } from './contexts/Modals/Modal.context'
// import { queueAddWorkingJob } from './redux/actions/queue'

function App () {
  console.log('render')
  // const dispatch = useDispatch()
  const { openModal } = useModal()

  const pending = useSelector((state) => state.pending)
  const completed = useSelector((state) => state.completed)
  const workingItem = useSelector((state) => state.working_item)
  // const { pending, completed, working_item: workingItem } = queue
  // const noWorkingItem = (!workingItem)

  // useEffect(() => {
  //   console.log('App.js: useEffect')
  //   if (!workingItem && pending.length > 0) {
  //     dispatch(queueAddWorkingJob(pending[0]))
  //   }
  // }, [noWorkingItem, pending])

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
