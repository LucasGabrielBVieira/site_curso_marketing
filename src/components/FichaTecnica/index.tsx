import './style.css'
import { motion, useAnimation, AnimationControls, Variants } from 'framer-motion'
import { useEffect, useRef, FC } from 'react'

const FichaTecnica: FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const controls: AnimationControls = useAnimation()

    // Check if element is in view
    useEffect(() => {
        const checkIfInView = (): void => {
            if (!ref.current) return
            const element: HTMLDivElement = ref.current
            const rect: DOMRect = element.getBoundingClientRect()
            const windowHeight: number = window.innerHeight

            // If the top of the element is in view
            if (rect.top <= windowHeight * 0.75) {
                controls.start("visible")
            }
        }

        window.addEventListener("scroll", checkIfInView)
        // Check once on mount
        checkIfInView()

        return () => {
            window.removeEventListener("scroll", checkIfInView)
        }
    }, [controls])

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
    }

    return (
        <motion.div
            className="container-ficha-tecnica"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <h3>Informações</h3>
            <h4>Requitos</h4>
            <div className="ficha-tecnica-content">
                <h5>Para quem é o Treinamento?</h5>
                <ul>
                    <li>MEI</li>
                    <li>AUTONÔMOS</li>
                    <li>COMERCIANTES LOCAIS</li>
                    <li>INFOPRODUTORES</li>
                    <li>DONOS DE PEQUENOS NEGÓCIOS</li>
                    <li>PEQUENAS EMPRESAS</li>
                    <li>EMPREENDEDORES NO GERAL</li>
                </ul>
                <h5>PRÉ-REQUISITOS</h5>
                <ul>
                    <li>OBTER UM COMPUTADOR OU NOTBOOK DE ESCRITÓRIO PARA EXECUÇÃO DAS FERRAMENTAS E ACESSO AS MESMAS</li>
                </ul>
                <h5>O QUE VOCÊ VAI APRENDER</h5>
                <ul>
                    <li>Posicionar e Estruturar seu Negócio/Produto (Construindo um negócio sólido desde a base)</li>
                    <li>Estruturar seu Negócio Online (Do zero ou otimizando o que já existe)</li>
                    <li>Fazer seus Primeiros Anúncios e incluir estratégias de Marketing (Gerando tráfego qualificado com ou sem dinheiro)</li>
                    <li>Converter Engajamento em Vendas (Transformando seguidores em clientes fiéis)</li>
                    <li>Estratégia ELEVAR para suas Primeiras Campanhas (O passo a passo para seu primeiro faturamento online)</li>
                    <li>Planejamento Estratégico para Crescimento Contínuo (Manutenção e crescimento do seu negócio no longo prazo)</li>
                </ul>
            </div>
        </motion.div>
    );
}

export default FichaTecnica;