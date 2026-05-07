import { useState } from 'react'
import { useInView } from '../hooks/useParallax'
import styles from './Contact.module.css'

const socials = [
  {
    name: 'GitHub',
    handle: '@VictorCastelo',
    href: 'https://github.com/victxrcb',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'in/VictorCastelo',
    href: 'https://www.linkedin.com/in/victor-castelo-branco-939026334/?skipRedirect=true',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'E-mail',
    handle: 'victorcastelocg24@gmail.com',
    href: 'mailto:victorcastelocg24@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

export default function Contact() {
  const { ref, inView } = useInView()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('victorcastelocg24@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.noise} />

      <div className={styles.container} ref={ref}>
        <div className={`${styles.label} ${inView ? styles.visible : ''}`}>
          <span>04</span> Contato
        </div>

        <div className={styles.inner}>
          <div className={`${styles.left} ${inView ? styles.visible : ''}`}>
            <h2 className={styles.heading}>
              Vamos trabalhar<br />
              <span className={styles.accent}>juntos?</span>
            </h2>
            <p className={styles.desc}>
              Estou aberto a projetos, oportunidades de estágio e posições CLT.
              Se tiver uma ideia ou proposta, entre em contato.
            </p>

            <button className={styles.emailBtn} onClick={copyEmail}>
              <span>victorcastelocg24gmail.com</span>
              <span className={styles.copyBadge}>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>

          <div className={`${styles.right} ${inView ? styles.visible : ''}`}>
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                className={styles.socialCard}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <div className={styles.socialIcon}>{s.icon}</div>
                <div>
                  <div className={styles.socialName}>{s.name}</div>
                  <div className={styles.socialHandle}>{s.handle}</div>
                </div>
                <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
