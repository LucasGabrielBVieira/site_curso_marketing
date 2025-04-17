// index.tsx
import './style.css';
import foguete from '../../assets/foguete.png';
import logo from '../../assets/logo.svg';
import ButtomSalle from '../ButtomSalle';

function Welcome() {
  // Array de benefícios para criar a lista de forma mais estruturada
  const beneficios = [
    'Aprenda a se posicionar no mercado',
    'Crie sua identidade visual e presença digital',
    'Domine o tráfego pago e orgânico com estratégia',
    'Tudo com ferramentas acessíveis e apoio da inteligência artificial'
  ];

  return (
    <section className='boas-vindas'>
      <div className='boas-vindas-txt'>
        <h1 className='mg40-bottom'>
          Estruture Seu Negócio e Alcance Seus Primeiros Clientes com Estratégia e Clareza
          <img className='img-icone' src={foguete} alt="" />
        </h1>
        
        <p className='mg40-top mg40-bottom'>
          O Treinamento <span>ELEVAR</span> é o passo a passo completo para 
          autônomos, comércios locais e empreendedores iniciantes que querem sair do zero, 
          construir uma presença profissional e transformar sua ideia em um negócio visível, 
          confiável e pronto para crescer.
        </p>
        
        <ul className='beneficios-lista mg40-bottom'>
          {beneficios.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        <ButtomSalle />
        
        <p className='promocao-txt promocao-txt-p'>
        De <s>R$147,00</s> por apenas <strong>R$47,00</strong>
          <br />
          Oferta por tempo limitado!
        </p>
      </div>
      
      <div>
        <img className='img-logo' src={logo} alt="" />
      </div>
    </section>
  );
}

export default Welcome;