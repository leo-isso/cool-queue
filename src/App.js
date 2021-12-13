import './App.css'
import Header from './components/Header/Header'

function App () {
  return (
    <div className="App">
      <Header
        addToQueue={() => console.log('add')}
        updateQueue={() => console.log('update')}
      />
    </div>
  )
}

export default App
