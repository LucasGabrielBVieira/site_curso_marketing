import './style.css'
import { useState } from 'react'
import modulo from '../../assets/modulo.png'
import moduloHover from '../../assets/modulo-hover.png'
import comunidade from '../../assets/comunidade.png'
import comundidadeHover from '../../assets/comunidade-hover.png'
import suporte from '../../assets/suporte.png'
import suporteHover from '../../assets/suporte-hover.png'

function TheePoints() {

    const [hoveredModulo, setHoveredModulo] = useState(false);
    const [hoveredComunidade, setHoveredComunidade] = useState(false);
    const [hoveredSuporte, setHoveredSuporte] = useState(false);

    const originalModulo = modulo;
    const originalComunidade = comunidade;
    const originalSuporte = suporte;

    const hoverModulo = moduloHover;
    const hoverComunidade = comundidadeHover;
    const hoverSuporte = suporteHover;

    const handleMouseEnterModulo = () => {
        setHoveredModulo(true);
    };
    const handleMouseLeaveModulo = () => {
        setHoveredModulo(false);
    };

    const handleMouseEnterComunidade = () => {
        setHoveredComunidade(true);
    };
    const handleMouseLeaveComunidade = () => {
        setHoveredComunidade(false);
    };

    const handleMouseEnterSuporte = () => {
        setHoveredSuporte(true);
    };
    const handleMouseLeaveSuporte = () => {
        setHoveredSuporte(false);
    };

    return (
        <>
            <div className='container-three-points'>
                <div
                    onMouseMove={handleMouseEnterModulo}
                    onMouseLeave={handleMouseLeaveModulo}
                    className='container-moldura point-1'>
                    <img src={hoveredModulo ? hoverModulo : originalModulo} alt="" />
                    <h6>Passo a Passo Simples</h6>
                    <p>Métodologia clara e acionável</p>
                </div>
                <div onMouseMove={handleMouseEnterComunidade}
                    onMouseLeave={handleMouseLeaveComunidade}
                    className='container-moldura point2'>
                    <img src={hoveredComunidade ? hoverComunidade : originalComunidade} alt="" />
                    <h6 >Estratégias Atualizadas</h6>
                    <p>Conteúdo sempre atualizado com as últimas tendências</p>
                </div>
                <div
                    onMouseMove={handleMouseEnterSuporte}
                    onMouseLeave={handleMouseLeaveSuporte}
                    className='container-moldura point3'>
                    <img src={hoveredSuporte ? hoverSuporte : originalSuporte} alt="" />
                    <h6>Uso de IA</h6>
                    <p>Ferramentas e estratégias com inteligência artificial</p>
                </div>
                <div className='three-points-txt'>
                    <p className='three-points-txt-p1'>Você vai aprender a posicionar a sua empresa no mercado digital usando apenas um computador e um celular</p>
                    <p className='three-points-txt-p2'>Ensinamos várias ferramentas para turbinar seu marketing de forma prática e fácil</p>
                </div>
            </div>
        </>
    )

}

export default TheePoints;