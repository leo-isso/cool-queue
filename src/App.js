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
  console.log('render')
  const dispatch = useDispatch()

  const pending = useSelector(
    (state) => state.pending
  )
  const workingItem = useSelector(
    (state) => state.working_item,
    (prev, next) => {
      return ((prev !== null) === (next !== null))
    }
  )
  console.log(pending, workingItem)
  useEffect(() => {
    console.log('useEffect')
    if (workingItem === null && pending.length > 0) {
      dispatch(addWorkingItem(pending[0]))
    }
  }, [pending])

  // useEffect(() => {
  //   // console.log('useEffect - pending', pending > 0, (!workingItem))
  //   if (pending.length > 0 && workingItem === null) {
  //     dispatch(addWorkingItem(pending[0]))
  //   }
  // }, [pending, workingItem])

  return (
    <div className="App">
      <Header />
      <CurrentJobBanner job={workingItem} />
      {renderTabs()}
    </div>
  )
}

export default App
