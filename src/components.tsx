import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { profile } from './content'
import { navGroups, pageByPath, pages } from './routes'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const page = pageByPath(pathname)
    document.title = page && page.path !== '/' ? `${page.title} — ${profile.name}` : `${profile.name} — Portfolio`
  }, [pathname])
  return null
}

export function Photo({ src, label, className = '' }: { src?: string; label: string; className?: string }) {
  const [failed, setFailed] = useState(!src)
  return (
    <figure className={`photo ${className}`}>
      {failed ? (
        <div className="photo__placeholder" role="img" aria-label={label}>
          <span>{label}</span>
        </div>
      ) : (
        <img src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />
      )}
    </figure>
  )
}

export function PageHeader({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker: string
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="page-head container">
      <p className="kicker reveal">{kicker}</p>
      <h1 className="reveal">{title}</h1>
      {subtitle && <p className="page-head__sub reveal">{subtitle}</p>}
      {children}
    </header>
  )
}

export function SectionTitle({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <header className="section-head reveal">
      {label && <p className="kicker">{label}</p>}
      <h2>{children}</h2>
    </header>
  )
}

export function Bar({ value, label, tone = 'orange' }: { value: number; label: string; tone?: 'orange' | 'yellow' | 'pink' }) {
  return (
    <div className="bar reveal">
      <div className="bar__top">
        <strong>{value}%</strong>
        <span>{label}</span>
      </div>
      <div className="bar__track">
        <div className={`bar__fill bar__fill--${tone}`} style={{ '--w': `${value}%` } as CSSProperties} />
      </div>
    </div>
  )
}

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="ext-link" href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

export function List({ items, className = 'check-list' }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

export function NextPage() {
  const { pathname } = useLocation()
  const i = pages.findIndex((p) => p.path === pathname)
  const next = pages[i + 1]
  if (!next) return null
  return (
    <div className="container">
      <Link to={next.path} className="next-page">
        <span className="kicker">Next</span>
        <strong>
          {next.title} <span aria-hidden="true">→</span>
        </strong>
      </Link>
    </div>
  )
}

const title = (path: string) => pageByPath(path)?.title ?? path

export function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="nav" aria-label="Main">
      <div className="container nav__inner">
        <Link to="/" className="logo" aria-label={`${profile.name} — home`}>
          s<span className="logo__dot" />
        </Link>
        <button className="nav__toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
        <ul
          className={`nav__links ${open ? 'is-open' : ''}`}
          onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}
        >
          <li className="nav__home">
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          {navGroups.map((g) => {
            const groupActive = pathname === g.path || g.children?.some((c) => c === pathname)
            return (
              <li key={g.path} className={`nav__item ${g.children ? 'has-children' : ''}`}>
                <NavLink to={g.path} className={groupActive ? 'active' : undefined}>
                  {title(g.path)}
                </NavLink>
                {g.children && (
                  <ul className="nav__sub">
                    {g.children.map((c) => (
                      <li key={c}>
                        <NavLink to={c}>{title(c)}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Link to="/" className="logo logo--light" aria-label="Home">
            s<span className="logo__dot" />
          </Link>
          <p className="footer__tag">{profile.roles.join(' · ')}</p>
        </div>
        <ul className="footer__links">
          {pages.slice(1).map((p) => (
            <li key={p.path}>
              <Link to={p.path}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container footer__base">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Research → Understand → Design → Implement → Impact</span>
      </div>
    </footer>
  )
}
