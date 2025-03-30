import './App.css'
import img1 from './assets/imagem-1.png'
import foguete from './assets/foguete.png'
import ButtomSalle from './components/ButtomSalle'


function App() {

  return (
    <>
      <main className="container">
        <section className='boas-vindas'>
          <div className='boas-vindas-txt'>
            <h1 className='mg40-bottom'>Feche pelo menos 3 contratos de R$1.500 nos próximos 30 dias <img className='img-icone' src={foguete} alt="" /></h1>
            <p className='mg40-top mg40-bottom'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Accusamus in corrupti cumque sit natus neque facilis unde dolores itaque similique obcaecati, officia atque veniam. 
              Quis commodi voluptatibus rerum provident officiis.</p>
            <ButtomSalle />
            <p className='promocao-txt'>
              Promo fim de ano!
              <br />
              De <s>R$453,00</s> por apenas <strong>R$97,00</strong>
            </p>
          </div>
          <div >
            <img className='img-container' src={img1} alt="Logo Salle" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
