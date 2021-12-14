import CurrentJobBanner from './components/CurrentJobBanner'
import Header from './components/Header'
import Tabs from './components/Tabs'

function App () {
  const tabItems = [
    {
      title: 'Tab 1',
      content: () => <p>Tab 1</p>
    },
    {
      title: 'Tab 2',
      content: () => <p>Tab 2</p>
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
