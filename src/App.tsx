import './App.css'
import TheePoints from './components/TheePoints'
import Welcome from './components/Welcome'
import './App.css'
import Description from './components/Description'
import SixPictures from './components/SixPictures'
import FichaTecnica from './components/FichaTecnica'
import ConteudoCurso from './components/ConteudoCurso'


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
      <div>
        <FichaTecnica />
      </div>
      <div>
        <ConteudoCurso />
      </div>
    </>
  )
}

export default App
