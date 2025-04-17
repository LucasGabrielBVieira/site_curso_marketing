import './style.css'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import BigButtomSalle from '../BigButtomSalle'

function SixPictures() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState<boolean[]>(Array(7).fill(false))

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.getAttribute('data-index') || '0')
                    if (entry.isIntersecting) {
                        setIsVisible(prev => {
                            const newState = [...prev]
                            newState[index] = true
                            return newState
                        })
                    }
                })
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        )

        // Observe the title (h3)
        const title = document.querySelector('h3')
        if (title) {
            title.setAttribute('data-index', '0')
            observer.observe(title)
        }

        // Observe all grid items
        const items = containerRef.current?.querySelectorAll('.grid-item')
        items?.forEach((item, index) => {
            item.setAttribute('data-index', (index + 1).toString())
            observer.observe(item)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    }

    const titleVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    }

    return (
        <>
            <div className='container-six-pictures-content'>
                <motion.h3
                    variants={titleVariants}
                    initial="hidden"
                    animate={isVisible[0] ? "visible" : "hidden"}
                >
                    Recursos do treinamento
                </motion.h3>

                <div className='container-six-pictures-grid' ref={containerRef}>
                    {[
                        { title: "Aulas 100% Gravadas e Práticas", content: "Aprenda no seu ritmo com aulas dinâmicas e diretas ao ponto, focadas em aplicação real no seu negócio. Assista quantas vezes quiser!" },
                        { title: "Materiais Exclusivos de Apoio", content: "Guias estratégicos, checklists e ferramentas para aplicar cada ensinamento na prática e acelerar seus resultados." },
                        { title: "Suporte Direto", content: "Tire dúvidas e interaja recebendo suporte para cada etapa da sua jornada." },
                        { title: "Exercícios Execução Passo a Passo", content: "Nada de teoria vazia! Cada módulo tem tarefas práticas para você estruturar, posicionar e expandir seu negócio com estratégias testadas." },
                        { title: "Estratégias Validadas para Vendas", content: "Aprenda técnicas de tráfego pago e gratuito, copywriting e persuasão para transformar seguidores e visitantes em clientes reais." },
                        { title: "Ferramentas Atualizadas do Mercado", content: "Domine as melhores ferramentas para otimizar e automatizar seu crescimento." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="grid-item"
                            variants={itemVariants}
                            initial="hidden"
                            animate={isVisible[index + 1] ? "visible" : "hidden"}
                        >
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </motion.div>
                    ))}
                </div>
                <BigButtomSalle />
            </div>
        </>
    )
}

export default SixPictures;