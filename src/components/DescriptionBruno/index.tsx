import './style.css';
import brunoImg from '../../assets/brunoimg.png';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const DescriptionBruno: React.FC = () => {
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

    return (
        <motion.section
            className='section-descriptionBruno'
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='container-descriptionBruno'>
                <div>
                    <motion.h2
                        variants={titleVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        Quem é Bruno Henrique Morais?
                    </motion.h2>

                    <motion.p className='descriptionBruno-txt'>
                        <motion.p
                            custom={0}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            Olá, sou Bruno Henrique Morais, designer gráfico e gestor comercial com 8 anos de experiência. Minha jornada começou com a paixão por criar e comunicar, mas logo percebi que saber criar era só uma parte do processo. Enfrentei muitos desafios, cometi erros e vi negócios promissores falharem por falta de direção e posicionamento no mercado. Aprendi a duras penas o que realmente fazia a diferença para estruturar um negócio de sucesso e atrair clientes de forma consistente.
                        </motion.p>

                        <motion.p
                            custom={1}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            Com esse aprendizado, desenvolvi o Treinamento ELEVAR: um método prático e acessível, pensado para quem quer começar do jeito certo e evitar os erros que cometi. Aqui, compartilho tudo o que aprendi sobre construção de base sólida, posicionamento estratégico e como usar ferramentas para aumentar a visibilidade e as vendas. Além disso, utilizei esse mesmo conhecimento dentro da minha empresa, onde entrego soluções de marketing para outras empresas, aplicando as estratégias otimizadas baseadas no que ensino no treinamento. Se você está pronto para transformar esforço em resultados, estou aqui para te guiar nessa jornada.
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
                        src={brunoImg}
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

export default DescriptionBruno;