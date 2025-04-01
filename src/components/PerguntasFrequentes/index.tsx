import { useState, useRef, useEffect, FC } from "react";
import { motion, useAnimation, AnimationControls, Variants } from 'framer-motion';
import "./style.css";

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
    const ref = useRef<HTMLDivElement>(null);
    const controls: AnimationControls = useAnimation();

    // Função para alternar o estado de um módulo específico
    const toggleModule = (moduleId: number) => {
        setIsActive(!isActive);
        setActiveModuleId(prevActiveId => {
            // Se o módulo clicado já está ativo, desativa-o
            // Caso contrário, ativa o módulo clicado e desativa o anterior
            return prevActiveId === moduleId ? null : moduleId;
        });
    };

    // Check if element is in view for animation
    useEffect(() => {
        const checkIfInView = (): void => {
            if (!ref.current) return;
            const element: HTMLDivElement = ref.current;
            const rect: DOMRect = element.getBoundingClientRect();
            const windowHeight: number = window.innerHeight;
            
            // If the top of the element is in view
            if (rect.top <= windowHeight * 0.75) {
                controls.start("visible");
            }
        };
        
        window.addEventListener("scroll", checkIfInView);
        // Check once on mount
        checkIfInView();
        
        return () => {
            window.removeEventListener("scroll", checkIfInView);
        };
    }, [controls]);

    // Animation variants - apenas fade in, sem movimento
    const containerVariants: Variants = {
        hidden: { 
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="container-perguntas-frequentes"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
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
        </motion.div>
    );
}

export default PerguntasFrequentes;