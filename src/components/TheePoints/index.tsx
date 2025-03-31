import './style.css'
import modulo from '../../assets/modulo.png'
import comunidade from '../../assets/comunidade.png'
import suporte from '../../assets/suporte.png'

function TheePoints() {
    return (
        <>
            <div className='container-three-points'>
                <div className='container-moldura point-1'>
                    <img src={modulo} alt="" />
                    <p>9 módulos disponíveis</p>
                </div>
                <div className='container-moldura point2'>
                    <img src={comunidade} alt="" />
                    <p>Comunidade VIP</p>
                </div>
                <div className='container-moldura point3'>
                    <img src={suporte} alt="" />
                    <p>Equipe de suporte</p>
                </div>
            </div>
            <div className='three-points-txt'>
                <p>✔Você vai aprender a posicionar a sua empresa no mercado digital</p>
                <p>✔Ensinamos várias ferramentas para turbinar seu marketing</p>
            </div>
        </>
    )

}

export default TheePoints;