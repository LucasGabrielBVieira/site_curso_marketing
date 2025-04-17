import './style.css'

function BigButtonSalle() {
    return (
        <>
            <div className='container-big-buttom-salle-gold'>
                <a className='a-big-buttom-salle a-gold' href="https://pay.kiwify.com.br/P2CXDO0">
                    <div className="big-buttom-salle-gold">
                        <p>Quero me <span>ELEVAR agora</span></p>
                    </div>
                </a>
                <p className='promocao-txt promocao-txt-p promocao-txt-gold'>
                    De <s>R$147,00</s> por apenas <strong>R$47,00</strong>
                    <br />
                    Oferta por tempo limitado!
                </p>
            </div>
        </>
    );
}
export default BigButtonSalle;