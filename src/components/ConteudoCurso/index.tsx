import { useState, useRef, useEffect, FC } from "react";
import { motion, useAnimation, AnimationControls, Variants } from 'framer-motion';
import "./style.css";
import BigButtonSalle from "../BigButtomSalle";

type Modulo = {
    id: number;
    nome: string;
    descricao: string;
    aulas: string[];
}

const modulos: Modulo[] = [
    {
        id: 1,
        nome: "Módulo 1",
        descricao: "Descrição do módulo 1",
        aulas: ["Aula 1", "Aula 2", "Aula 3"]
    },
    {
        id: 2,
        nome: "Módulo 2",
        descricao: "Descrição do módulo 2",
        aulas: ["Aula 4", "Aula 5", "Aula 6"]
    },
    {
        id: 3,
        nome: "Módulo 3",
        descricao: "Descrição do módulo 3",
        aulas: ["Aula 7", "Aula 8", "Aula 9"]
    },
    {
        id: 4,
        nome: "Módulo 4",
        descricao: "Descrição do módulo 4",
        aulas: ["Aula 10", "Aula 11", "Aula 12"]
    },
    {
        id: 5,
        nome: "Módulo 5",
        descricao: "Descrição do módulo 5",
        aulas: ["Aula 13", "Aula 14", "Aula 15"]
    },
    {
        id: 6,
        nome: "Módulo 6",
        descricao: "Descrição do módulo 6",
        aulas: ["Aula 16", "Aula 17", "Aula 18"]
    },
    {
        id: 7,
        nome: "Módulo 7",
        descricao: "Descrição do módulo 7",
        aulas: ["Aula 19", "Aula 20", "Aula 21"]
    }
]

const ConteudoCurso: FC = () => {
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
            className="container-conteudo-curso"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <h3>Emenda detalhada</h3>
            <h4>Conteúdo Programático</h4>
            <div className="container-conteudo-curso-containt">
                {modulos.map((modulo) => (
                    <div key={modulo.id} className="container-modulo">
                        <div 
                            className={`container-modulo-header ${activeModuleId === modulo.id ? 'active' : ''}`}
                            onClick={() => toggleModule(modulo.id)}
                        >
                            <div>
                                <h5>{modulo.nome}</h5>
                                <p>{modulo.descricao}</p>
                            </div>
                            <div className={`container-modulo-header-icon ${activeModuleId === modulo.id ? 'active' : ''}`}>
                                <span></span>
                            </div>
                        </div>
                        <div className={`container-modulo-aulas ${activeModuleId === modulo.id ? 'open' : ''}`}>
                            <ul>
                                {modulo.aulas.map((aula, index) => (
                                    <li key={index}>{aula}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <BigButtonSalle />
        </motion.div>
    );
}

export default ConteudoCurso;