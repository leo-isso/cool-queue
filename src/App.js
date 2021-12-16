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
      title: 'Finished/Canceled',
      content: () => <JobList jobs={completed} />
    }
  ]

  return <Tabs tabItems={tabItems} />
}

function App () {
  const dispatch = useDispatch()

  const pending = useSelector((state) => state.pending)
  // Optimized selector for workingItem that
  // doesn't re-render when progress is updated
  const workingItem = useSelector(
    (state) => state.working_item,
    (prev, next) => ((prev !== null) === (next !== null)))

  // Watches pending list and working item
  // So it can add a new working item when
  // there are available jobs
  useEffect(() => {
    if (workingItem === null && pending.length > 0) {
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
