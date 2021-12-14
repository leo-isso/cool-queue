import CurrentJobBanner from './components/CurrentJobBanner'
import Header from './components/Header'
import JobList from './components/JobList'
import Tabs from './components/Tabs'

import jobs from './mocks/jobs'

function App () {
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
        addToQueue={() => console.log('add')}
        updateQueue={() => console.log('update')}
      />
      <CurrentJobBanner
        job={{ name: 'The big test man' }}
      />
      <Tabs
        tabItems={tabItems}
      />
    </div>
  )
}

export default App
