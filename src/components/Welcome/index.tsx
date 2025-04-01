import './style.css';
import foguete from '../../assets/foguete.png'
import logo from '../../assets/logo.svg'
import ButtomSalle from '../ButtomSalle'

function Welcome() {
  return (
    <section className='boas-vindas'>
      <div className='boas-vindas-txt'>
        <h1 className='mg40-bottom'>TRANSFORME SEU NEGÓCIO AGORA MESMO!<img className='img-icone' src={foguete} alt="" /></h1>
        <p className='mg40-top mg40-bottom'><span>Treinamento ELEVAR</span> – Está na hora de você se tornar autossuficiente em estruturar seu negócio/produto no digital, aumentar sua visibilidade e vender em grande escala. Teórica e Prática do zero (Passo a Passo) + Materiais exclusivos de estratégias, apoio e desafios + Ferramentas atualizadas para automatizar e otimizar seu negócio + 2 módulos bônus com estratégias únicas para acelerar seus resultados e faturar mais rápido.</p>
        <ButtomSalle />
        <p className='promocao-txt'>
          Oferta Exclusiva para os Primeiros 1.000 Alunos! 
          <br />
          De <s>R$147,00</s> por apenas <strong>R$47,00</strong>
        </p>
      </div>
      <div >
        <img className='img-logo' src={logo} alt="" />
      </div>
    </section>
  )
}

export default Welcome;