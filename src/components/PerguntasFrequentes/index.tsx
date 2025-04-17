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
        pergunta: "Como funciona a garantia?",
        resposta: "Oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeito, devolvemos 100% do seu investimento."
    },
    {
        id: 2,
        pergunta: "Preciso ter experiência prévia?",
        resposta: "Não! O treinamento foi desenvolvido pensando em iniciantes e inclui todo o passo a passo necessário."
    },
    {
        id: 3,
        pergunta: "Por quanto tempo tenho acesso?",
        resposta: "O acesso é vitalício! Você poderá assistir e revisitar o conteúdo quando quiser."
    },
    {
        id: 4,
        pergunta: "Quais formas de pagamento são aceitas?",
        resposta: "Aceitamos cartão de crédito, PIX e boleto bancário."
    }
    ,
    {
        id: 5,
        pergunta: "O que preciso para executar as ferramentas do treinamento?",
        resposta: "Apenas um computador e um celular com acesso a Internet."
    },
    {
        id: 6,
        pergunta: "Tem suporte durante o curso?",
        resposta: "Sim! Oferecemos suporte via e-mail pela própria plataforma, além de um grupo informativo no whatsapp e lives mensais de dúvidas no instagram."
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