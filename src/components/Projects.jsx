import { useParallax, useInView } from '../hooks/useParallax'
import styles from './Projects.module.css'

const projects = [
  {
    id: '01',
    title: 'FilmeBox',
    description:
      'Plataforma de avaliações de filmes e bibilioteca pessoal, com sistema de recomendações e integração com API externa.',
    stack: ['React', 'javascript', 'SupaBase', 'Vite'],
    status: 'Concluído',
    links: { live: 'https://filme-box.vercel.app/', github: 'https://github.com/victxrcb/FilmeBox' },
    featured: true,
  },
  {
    id: '02',
    title: 'FocusTracker',
    description:
      'Aplicação que indentifica períodos de foco e distração usando detecção de atividade do usuário apartir da camera, além disso indetifica se oque está sendo exibindo é uma pessoa, animal ou um objeto.',
    stack: ['Python', 'MediaPipe', 'YOLO', 'Pygame'],
    status: 'Concluído',
    links: { github: 'https://github.com/victxrcb/FocusTracker' },
  },
  {
    id: '03',
    title: 'Modern Physics',
    description:
      'Blog sobre fisica, abrangendo tópicos de mecânica quântica, relatividade e física classica, com explicações e visualizações interativas.',
    stack: ['HTML5', 'JavaScript', 'CSS3'],
    status: 'Em desenvolvimento',
    links: { },
  },
  {
    id: '04',
    title: 'Dell cred',
    description:
      'Sistema de gerenciamento de dados para uma empresa que atua com fundo de investimento em direitos creditórios, com painel administrativo para controle de usuários, lembretes de entregas e geração de relatórios financeiros.',
    stack: ['React', 'JAVA', 'Javascript', 'Figma' , 'MySQL' , 'Spring Boot', 'Docker', 'vite', 'Vercel' ,],
    status: 'Em desenvolvimento',
    links: { github: 'https://github.com/victxrcb/ProjetoVictor' },
  },
  {
    id: '05',
    title: 'Ecoin',
    description:
      'Dashboard para controle financeiro pessoal com gráficos interativos e exportação de relatórios.',
    stack: ['React', 'vite', 'JavaScript',],
    status: 'Em desenvolvimento',
    links: {},
  },
  {
    id: '06',
    title: 'CLI Dev Tools',
    description:
      'Conjunto de ferramentas de linha de comando para automação de tarefas repetitivas no workflow de desenvolvimento.',
    stack: ['Python', 'Click', 'Shell', 'Docker'],
    status: 'Concluído',
    links: { github: '#' },
  },
]

const statusColor = {
  'Em produção': 'accent',
  'Concluído': 'done',
  'Em desenvolvimento': 'warn',
}

function ProjectCard({ project, delay, inView }) {
  return (
    <div
      className={`${styles.card} ${project.featured ? styles.featured : ''} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardNum}>{project.id}</span>
        <div className={styles.cardLinks}>
          {project.links.github && (
            <a href={project.links.github} className={styles.iconLink} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} className={styles.iconLink} aria-label="Live">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>

      <div className={styles.cardFooter}>
        <div className={styles.stack}>
          {project.stack.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <span className={`${styles.status} ${styles[statusColor[project.status]]}`}>
          {project.status}
        </span>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref: parallaxRef, offset } = useParallax(0.15)
  const { ref, inView } = useInView()

  return (
    <section id="projects" className={styles.section}>
      <div
        ref={parallaxRef}
        className={styles.bg}
        style={{ transform: `translateY(${offset}px)` }}
      />

      <div className={styles.container} ref={ref}>
        <div className={`${styles.label} ${inView ? styles.visible : ''}`}>
          <span>03</span> Projetos
        </div>

        <div className={styles.headerRow}>
          <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
            O que <span className={styles.accent}>construí</span>
          </h2>
          <p className={`${styles.sub} ${inView ? styles.visible : ''}`}>
            Alguns dos projetos que desenvolvi — pessoais e academicos — demonstrando minhas habilidades e paixão por criar soluções web modernas.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
