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
        aulas: [
          "O Primeiro Passo para se ELEVAR – Como se Posicionar no Mercado",
          "Construindo sua Identidade Única – Criando uma Proposta de Valor Poderosa",
          "O Segredo das Grandes Marcas – Como Criar uma Oferta Irresistível",
          "Fundamentos Empresariais – Estruturando um Negócio Lucrativo e Escalável"
        ]
      },
      {
        id: 2,
        nome: "Módulo 2",
        descricao: "Elevando sua Presença Digital – Estruturando seu Negócio Online (Criando uma presença digital profissional e estratégica)",
        aulas: [
          "Comece com o Pé Direito – E-mail Profissional e Preparação Inicial",
          "Clareza na Estratégia – Definindo seu Posicionamento com Apoio da IA",
          "Sua Marca Começa Aqui – Fundamentos da Identidade Visual",
          "Ferramenta de Design na Prática – Primeiros Passos no Visual",
          "Construindo sua Marca – Logo e Guia Visual do Zero",
          "Entrando no Digital – Criando a Base do seu Site",
          "Explorando Recursos Visuais – Ajustes e Elementos de Página",
          "Site Estratégico – Estrutura Profissional do Zero",
          "Otimização de Presença – Ajustes para Negócios e Lojas",
          "Pronto para o Mundo – Conectando Domínio e Publicando",
          "Sua Marca nas Redes – Criação de Perfis Profissionais",
          "Perfil Estratégico – Configuração para Atrair e Vender"
        ]
      },
      {
        id: 3,
        nome: "Módulo 3",
        descricao: "Elevando sua Visibilidade - Impulsionando seu alcance nos meios digitais (Estratégias para aumentar sua visibilidade e atrair clientes)",
        aulas: [
          "Entendendo o Jogo – Fundamentos do Tráfego que Gera Resultado",
          "Estrutura Profissional – Criando e Configurando sua Conta de Anúncios",
          "Monitoramento Inteligente – Rastreamento e Métricas de Conversão",
          "Comece a Anunciar – Configurando sua Primeira Campanha",
          "Visibilidade Sem Investir – Estratégia de Tráfego Orgânico com Clareza",
          "Conteúdos que Conectam – Criando Posts Visuais Estratégicos",
          "Postando com Propósito – Publicação e Configuração Otimizada",
          "Criativos que Convertem – Planejando Anúncios com Apoio da IA"
        ]
      },
      {
        id: 4,
        nome: "Módulo 4",
        descricao: "Bônus – Estratégia ELEVAR para suas Primeiras Campanhas e Crescimento Contínuo (Aplicando as estratégias na prática e otimizando resultados)",
        aulas: [
          "Primeiras Campanhas no Ar – Testando Criativos, Públicos e Gerando Conversões",
          "Otimizando para Escalar – Públicos Estratégicos e Estrutura Inteligente",
          "Conclusão e Próximos Passos – O Caminho para Continuar Elevando seus Resultados"
        ]
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