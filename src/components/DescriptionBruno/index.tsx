import './style.css';
import montanha from '../../assets/montanha.png';
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
                        Quem é Bruno Morais?
                    </motion.h2>
                    
                    <motion.p className='descriptionBruno-txt'>
                        <motion.span
                            custom={0}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </motion.span>
                        
                        <motion.p
                            custom={1}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            Quisquam, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </motion.p>
                        
                        <motion.p
                            custom={2}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            Quisquam, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, voluptatibus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, soluta laboriosam sequi doloribus magnam perspiciatis ab temporibus obcaecati, officiis explicabo id ex sint maiores. Dolores asperiores non praesentium itaque labore.
                        </motion.p>
                        
                        <motion.p
                            custom={3}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati cupiditate quisquam tenetur commodi. Temporibus odio optio et officiis quasi omnis doloremque distinctio alias numquam, commodi ea earum quod delectus!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores atque, velit eos fuga vitae in aut accusantium quis. Possimus voluptate repellendus natus perferendis corporis officiis magnam hic, voluptas exercitationem quis?
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

export default DescriptionBruno;