import './style.css';
import montanha from '../../assets/montanha.png';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Description: React.FC = () => {
    // Usando useInView para detectar quando o elemento está visível na viewport
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2, // 20% do elemento precisa estar visível
    });

    // Usando useScroll para animações baseadas na posição de rolagem
    const { scrollYProgress } = useScroll();
    const imgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);
    // Variantes de animação para textos com tipagem correta
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const highlightVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.3,
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            className='section-description'
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='container-description'>
                <div>
                    <motion.h2
                        variants={titleVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        TREINAMENTO ELEVAR {" "}
                        <motion.div
                            variants={highlightVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            Da Estruturação a Escála
                        </motion.div>
                    </motion.h2>

                    <motion.p className='description-txt'>
                        <motion.span
                            custom={0}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            Você sente que, por mais que se esforce, seu negócio ainda não alcançou o reconhecimento e as vendas que merece? Está começando agora e não sabe por onde iniciar para criar um negócio sólido e visível no mercado? <br/> <br />
                            Eu sei exatamente como é essa sensação. Foi por isso que criei o Treinamento ELEVAR, um método testado e comprovado que guia você, passo a passo, para estruturar seu negócio, se posicionar no digital e atrair clientes de forma consistente – tudo isso sem precisar ser um especialista ou investir rios de dinheiro. <br /> <br />
                            Com um método direto e ferramentas acessíveis, você aprenderá a:
                        </motion.span>

                        <motion.p
                            custom={1}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            <div>✅ Criar um negócio sólido desde a base</div> – Defina um posicionamento forte e uma proposta de valor diferenciada que fará seu cliente escolher você ao invés da concorrência.
                        </motion.p>

                        <motion.p
                            custom={2}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            <div>✅ Construir sua presença digital profissional</div> – Tenha um site estratégico, redes sociais otimizadas e uma identidade visual que transmita autoridade.
                        </motion.p>

                        <motion.p
                            custom={3}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            <div>✅ Atrair clientes todos os dias, com ou sem investimento</div> – Descubra como gerar tráfego qualificado através de anúncios no Meta Ads ou estratégias gratuitas de marketing orgânico.
                        </motion.p>

                        <motion.p
                            custom={4}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            <div>✅ Converter seguidores e visitantes em compradores</div> – Use técnicas de copywriting, gatilhos mentais e automação para transformar interesse em vendas reais. <br/> <br />
                            <div>✅ Escalar e manter seu crescimento no longo prazo</div> – Aplique estratégias de planejamento para continuar expandindo seu negócio de forma sustentável.
                        </motion.p>
                    </motion.p>
                </div>

                <motion.div
                    style={{
                        opacity: imgOpacity,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.img
                        src={montanha}
                        alt="Montanha"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Description;