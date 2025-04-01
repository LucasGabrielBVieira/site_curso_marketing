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
        descricao: "Elevando sua Base – Posicionamento e Estruturação do Negócio (Construindo um negócio sólido desde a base)",
        aulas: ["O Primeiro Passo para se ELEVAR – O que é posicionamento de mercado e como aplicá-lo ao seu nicho.",
            "Construindo sua Identidade Única – Como criar uma proposta de valor diferenciada para atrair clientes.",
            "Segredo das Grandes Marcas – Criando uma oferta irresistível que converte.",
            "Fundamentos Empresariais para Pequenos Negócios – Estruturando um negócio lucrativo e escalável."]
    },
    {
        id: 2,
        nome: "Módulo 2",
        descricao: "Elevando sua Presença Digital – Estruturando seu Negócio Online (Do zero ou otimizando o que já existe)",
        aulas: ["A Primeira Impressão é a que Fica – Criando uma identidade visual profissional.",
            "A Consistência é a Chave – Desenvolvendo um guia de identidade para redes sociais e site.",
            "Seu Espaço no Digital – Criando um site estratégico para conversão.",
            "Conectando-se com o Mundo – Criando e otimizando suas redes sociais para vendas."]
    },
    {
        id: 3,
        nome: "Módulo 3",
        descricao: "Elevando sua Visibilidade – Seus Primeiros Anúncios e Estratégia de Marketing (Gerando tráfego qualificado com ou sem dinheiro)",
        aulas: ["O Poder da Publicidade Digital – Como funciona o Meta Ads e por que investir nele.",
            "Estruturando sua Máquina de Crescimento – Configurando sua conta e instalando pixels.",
            "Seu Primeiro Passo no Tráfego Pago – Criando uma campanha de alto impacto.",
            "Marketing Orgânico e Tráfego Gratuito – Como gerar vendas sem investir em anúncios."]
    },
    {
        id: 4,
        nome: "Módulo 4",
        descricao: "Elevando seu Faturamento – Convertendo Engajamento em Vendas (Transformando seguidores em clientes fiéis)",
        aulas: ["Transformando Interesse em Compra – Entendendo a jornada do cliente.",
            "A Arte da Persuasão – Como usar gatilhos mentais e técnicas de copywriting para vender mais.",
            "Técnicas de Vendas para Negócios Digitais e Locais – Estratégias aplicáveis para qualquer tipo de negócio."]
    },
    {
        id: 5,
        nome: "Módulo 5",
        descricao: "Estratégia ELEVAR para suas Primeiras Campanhas (O passo a passo para seu primeiro faturamento online)",
        aulas: ["O Caminho Certo para Começar – Como estruturar sua primeira campanha de sucesso.",
            "Aprimorando seus Resultados – Como otimizar e escalar suas campanhas de anúncios."]
    },
    {
        id: 6,
        nome: "Módulo 6",
        descricao: "Bônus – Planejamento Estratégico para Crescimento Contínuo (Manutenção e crescimento do seu negócio no longo prazo)",
        aulas: ["Construindo um Negócio Sólido – Criando um plano estratégico sustentável.",
            "Crescendo sem Limites – Como se adaptar às mudanças do mercado e escalar seu negócio."]
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