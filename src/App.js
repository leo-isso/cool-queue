import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CurrentJobBanner from './components/CurrentJobBanner'
import Header from './components/Header'
import JobList from './components/JobList'
import Tabs from './components/Tabs'

import { addWorkingItem } from './redux/actions/workingItem'

const renderTabs = () => {
  const pending = useSelector((state) => state.pending)
  const completed = useSelector((state) => state.completed)

  const tabItems = [
    {
      title: 'Pending',
      content: () => (
        <JobList jobs={pending} />
      )
    },
    {
      title: 'Finished/Cancelled',
      content: () => <JobList jobs={completed} />
    }
  ]

  return <Tabs tabItems={tabItems} />
}

function App () {
  console.log('render')
  const dispatch = useDispatch()

  const pending = useSelector((state) => state.pending)
  const workingItem = useSelector((state) => state.working_item)

  useEffect(() => {
    if (!workingItem && pending.length > 0) {
      dispatch(addWorkingItem(pending[0]))
    }
  }, [pending, workingItem])

  return (
    <div className="App">
      <Header />
      <CurrentJobBanner job={workingItem} />
      {renderTabs()}
    </div>
  )
}

export default App
