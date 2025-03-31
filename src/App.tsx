import './App.css'
import TheePoints from './components/TheePoints'
import Welcome from './components/Welcome'
import './App.css'
import Description from './components/Description'


function App() {

  return (
    <>
      <main className="container">
        <Welcome/>
        <TheePoints/>
      </main>
      <Description/>
    </>
  )
}

export default App
