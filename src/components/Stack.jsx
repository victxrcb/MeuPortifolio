import { useParallax, useInView } from '../hooks/useParallax'
import styles from './Stack.module.css'

const categories = [
  {
    name: 'Frontend',
    techs: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Next.js', level: 50 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Vite', level: 85 },
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Java', level: 78},
      { name: 'Node.js', level: 82 },
      { name: 'Python', level: 70 },
      { name: 'NestJS', level: 45 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    name: 'Ferramentas',
    techs: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Vercel', level: 90 },
      { name: 'Figma', level: 92 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

function TechBar({ name, level, visible, delay }) {
  return (
    <div className={styles.techItem}>
      <div className={styles.techHeader}>
        <span className={styles.techName}>{name}</span>
        <span className={styles.techLevel}>{level}%</span>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.barFill}
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Stack() {
  const { ref: parallaxRef, offset } = useParallax(0.2)
  const { ref, inView } = useInView()

  return (
    <section id="stack" className={styles.section}>
      <div
        ref={parallaxRef}
        className={styles.bg}
        style={{ transform: `translateY(${offset}px)` }}
      />

      <div className={styles.container} ref={ref}>
        <div className={`${styles.label} ${inView ? styles.visible : ''}`}>
          <span>02</span> Tech Stack
        </div>

        <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
          Tecnologias que <span className={styles.accent}>utilizo</span>
        </h2>

        <div className={styles.grid}>
          {categories.map((cat, ci) => (
            <div
              key={cat.name}
              className={`${styles.card} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${ci * 120}ms` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>0{ci + 1}</span>
                <span className={styles.cardTitle}>{cat.name}</span>
              </div>
              <div className={styles.techList}>
                {cat.techs.map((t, ti) => (
                  <TechBar
                    key={t.name}
                    {...t}
                    visible={inView}
                    delay={ci * 120 + ti * 80 + 300}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
