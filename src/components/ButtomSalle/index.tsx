// index.tsx
import './style.css';

function ButtomSalle() {
  return (
    <a href="https://pay.kiwify.com.br/P2CXDO0">
      <div className='div-buttom'>
        <button className='buttom'>
          <span className='buttom-glow'></span>
          <span className='buttom-content'>
            <p className='bottom-txt'>Quero me <strong className='bottom-strong'>inscrever agora</strong></p>
          </span>
        </button>
      </div>
    </a>
  );
}

export default ButtomSalle;