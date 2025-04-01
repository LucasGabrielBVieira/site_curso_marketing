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
            <h3>Ficha Técnica</h3>
            <h4>Esta es la ficha técnica del producto.</h4>
            <div className="ficha-tecnica-content">
                <h5>Nombre del producto</h5>
                <ul>
                    <li>Nombre 1</li>
                    <li>Nombre 2</li>
                    <li>Nombre 3</li>
                    <li>Nombre 4</li>
                </ul>
                <h5>Precio</h5>
                <ul>
                    <li>Precio 1</li>
                    <li>Precio 2</li>
                    <li>Precio 3</li>
                    <li>Precio 4</li>
                </ul>
                <h5>Características</h5>
                <ul>
                    <li>Característica 1</li>
                    <li>Característica 2</li>
                    <li>Característica 3</li>
                    <li>Característica 4</li>
                </ul>
            </div>
        </motion.div>
    );
}

export default FichaTecnica;