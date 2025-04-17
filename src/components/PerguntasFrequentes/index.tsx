import { useState, FC } from "react";
import "./style.css";
import BigButtomSalleGold from "../BigButtomSalleGold";

type Modulo = {
    id: number;
    pergunta: string;
    resposta: string;
}

const modulos: Modulo[] = [
    {
        id: 1,
        pergunta: "Como funciona o curso?",
        resposta: "O curso é online e você pode assistir as aulas a qualquer momento."
    },
    {
        id: 2,
        pergunta: "Qual a duração do curso?",
        resposta: "O curso tem duração de 3 meses."
    },
    {
        id: 3,
        pergunta: "Preciso de algum conhecimento prévio?",
        resposta: "Não, o curso é voltado para iniciantes."
    },
    {
        id: 4,
        pergunta: "Como faço para tirar dúvidas?",
        resposta: "Você pode tirar dúvidas através do nosso fórum ou grupo no WhatsApp."
    }
]

const PerguntasFrequentes: FC = () => {
    const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
    const [isActive, setIsActive] = useState(false);

    // Função para alternar o estado de um módulo específico
    const toggleModule = (moduleId: number) => {
        setIsActive(!isActive);
        setActiveModuleId(prevActiveId => {
            // Se o módulo clicado já está ativo, desativa-o
            // Caso contrário, ativa o módulo clicado e desativa o anterior
            return prevActiveId === moduleId ? null : moduleId;
        });
    };

    return (
        <>
        <div className="container-perguntas-frequentes">
            <h3>Perguntas Frequentes</h3>
            <div className="container-perguntas-frequentes-containt">
                {modulos.map((modulo) => (
                    <div key={modulo.id} className="container-perguntas">
                        <div 
                            className={`container-perguntas-header ${activeModuleId === modulo.id ? 'active' : ''}`}
                            onClick={() => toggleModule(modulo.id)}
                        >
                            <div className={`container-perguntas-icon ${activeModuleId === modulo.id ? 'active' : ''}`}>
                                <span></span>
                            </div>
                            <div>
                                <h5>{modulo.pergunta}</h5>
                            </div>
                            
                        </div>
                        <div className={`container-perguntas-content ${activeModuleId === modulo.id ? 'open' : ''}`}>
                            <ul>
                                <li>{modulo.resposta}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        <div className="container-perguntas-frequentes-btn">
            <BigButtomSalleGold/>
        </div>
        </>
    );
}

export default PerguntasFrequentes;