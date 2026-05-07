import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo}>
        <span className={styles.logoAccent}>&lt;</span>victor
        <span className={styles.logoAccent}>/&gt;</span>
      </span>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => handleLink(e, l.href)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
