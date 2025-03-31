import './App.css'
import TheePoints from './components/TheePoints'
import Welcome from './components/Welcome'
import './App.css'
import Description from './components/Description'
import SixPictures from './components/SixPictures'


function App() {

  return (
    <>
      <main className="container">
        <Welcome />
        <TheePoints />
      </main>
      <Description />
      <div className='container-six-pictures'>
        <SixPictures />
      </div>
    </>
  )
}

export default App
