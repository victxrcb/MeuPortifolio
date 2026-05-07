import { useParallax, useInView } from '../hooks/useParallax'
import styles from './About.module.css'

const facts = [
  { label: 'Foco atual', value: 'Full Stack Dev' },
  { label: 'Formação', value: 'Sistemas de Informação' },
  { label: 'Status', value: 'Aberto a oportunidades' },
  { label: 'Localização', value: 'Aracaju - SE, Brasil  ' },
]

export default function About() {
  const { ref: parallaxRef, offset } = useParallax(0.25)
  const { ref: contentRef, inView } = useInView()

  return (
    <section id="about" className={styles.section}>
      <div
        ref={parallaxRef}
        className={styles.bg}
        style={{ transform: `translateY(${offset}px)` }}
      />

      <div className={styles.container} ref={contentRef}>
        <div className={`${styles.label} ${inView ? styles.visible : ''}`}>
          <span>01</span> Sobre mim
        </div>

        <div className={styles.grid}>
          <div className={`${styles.textBlock} ${inView ? styles.visible : ''}`}>
            <h2 className={styles.heading}>
              Sobre
              <span className={styles.accent}> mim</span>
            </h2>
            <p>
              Sou estudante de Sistemas de Informação e desenvolvedor full stack
              focado em construir aplicações web modernas com boa arquitetura e
              experiência de usuário.
            </p>
            <p>
              Gosto de trabalhar em todo o espectro — desde APIs e banco de dados
              até interfaces responsivas e acessíveis. Sempre buscando aprender
              novas tecnologias e melhores práticas.
            </p>
          </div>

          <div className={`${styles.factsGrid} ${inView ? styles.visible : ''}`}>
            {facts.map((f, i) => (
              <div key={f.label} className={styles.fact} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className={styles.factLabel}>{f.label}</span>
                <span className={styles.factValue}>{f.value}</span>
              </div>
            ))}

            <div className={styles.availCard}>
              <div className={styles.availDot} />
              <div>
                <div className={styles.availTitle}>Disponível para projetos</div>
                <div className={styles.availSub}>Estágio · Dev fullstack · Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
