import CurrentJobBanner from './components/CurrentJobBanner/'
import Header from './components/Header/'

function App () {
  return (
    <div className="App">
      <Header
        addToQueue={() => console.log('add')}
        updateQueue={() => console.log('update')}
      />
      <CurrentJobBanner
        job={{ name: 'The big test man' }}
      />
    </div>
  )
}

export default App
