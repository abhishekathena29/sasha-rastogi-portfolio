import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import {
  academics,
  arc,
  articles,
  arts,
  cancerStudy,
  contact,
  financeStudy,
  gallery,
  hpv,
  ics,
  impactStats,
  profile,
  sahara,
  suraksha,
  tech,
} from './content'
import './App.css'

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#research', label: 'Research' },
  { href: '#about', label: 'About Me' },
  { href: '#contact', label: 'Contact' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Photo({ src, label, className = '' }: { src?: string; label: string; className?: string }) {
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

function SectionHead({ index, kicker, children }: { index: string; kicker: string; children: ReactNode }) {
  return (
    <header className="section-head reveal">
      <p className="kicker">
        <span>{index}</span> {kicker}
      </p>
      <h2>{children}</h2>
    </header>
  )
}

function Bar({ value, label, tone = 'orange' }: { value: number; label: string; tone?: 'orange' | 'yellow' | 'pink' }) {
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

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="ext-link" href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a href="#top" className="logo" aria-label="Sasha Rastogi — home">
          s<span className="logo__dot" />
        </a>
        <button className="nav__toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
        <ul className={`nav__links ${open ? 'is-open' : ''}`}>
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero__media">
        <Photo src={profile.portrait} label={profile.name} className="photo--portrait" />
        <span className="hero__notch" aria-hidden="true" />
      </div>
      <div className="hero__text">
        <p className="hero__hello">Hello there!</p>
        <h1>
          My name is {profile.firstName} and I <em className="c-yellow">research</em> the mind and{' '}
          <em className="c-orange">design</em> for care <i>(one patient at a time)</i>.
        </h1>
        <ul className="hero__roles">
          {profile.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
      <p className="hero__intro">{profile.intro}</p>
    </section>
  )
}

function Impact() {
  return (
    <section className="impact" aria-label="Impact at a glance">
      <div className="container impact__grid">
        {impactStats.map((s) => (
          <div className="impact__item reveal" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section container" id="about">
      <SectionHead index="01" kicker="About Sasha">
        From understanding a problem to <span className="c-orange">designing</span> its solution.
      </SectionHead>
      <div className="about">
        <p className="lead reveal">{profile.theme}</p>
        <p className="reveal">
          Intended major: <strong>{profile.major}</strong>. Her work sits where research, community engagement,
          technology and behavioural science meet.
        </p>
      </div>
      <ol className="arc">
        {arc.map((a, i) => (
          <li className="arc__step reveal" key={a.step} style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="arc__num">0{i + 1}</span>
            <h3>{a.step}</h3>
            <p>{a.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Research() {
  return (
    <section className="section container" id="research">
      <SectionHead index="02" kicker="Research">
        Listening to <span className="c-yellow">77 patients</span> before designing anything.
      </SectionHead>

      <article className="study">
        <div className="study__meta reveal">
          <p className="tag-line">
            {cancerStudy.role} · {cancerStudy.collab}
          </p>
          <h3>{cancerStudy.title}</h3>
          <p className="study__sub">{cancerStudy.subtitle}</p>
          <p>{cancerStudy.summary}</p>
          <ul className="check-list">
            {cancerStudy.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <ul className="chips">
            {cancerStudy.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="study__data">
          <p className="mini-label">Key findings</p>
          {cancerStudy.findings.map((f, i) => (
            <Bar key={f.label} value={f.value} label={f.label} tone={i ? 'yellow' : 'orange'} />
          ))}
          <ul className="recognition reveal">
            {cancerStudy.recognition.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </article>

      <article className="card card--split reveal">
        <div>
          <p className="tag-line">Additional research · {financeStudy.program}</p>
          <h3>{financeStudy.title}</h3>
          <p>
            A behavioural-finance study with <strong>{financeStudy.sample}</strong>, examining:
          </p>
          <ul className="check-list">
            {financeStudy.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <ul className="recognition">
          {financeStudy.recognition.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

function Sahara() {
  return (
    <section className="section section--tint" id="work">
      <div className="container">
        <SectionHead index="03" kicker="The Sahara Kit">
          Research, turned into something you can <span className="c-orange">hold</span>.
        </SectionHead>
        <div className="sahara">
          <div className="reveal">
            <p className="tag-line">
              {sahara.role} · {sahara.partner}
            </p>
            <p className="lead">{sahara.summary}</p>
            <ul className="kit">
              {sahara.components.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}</strong>
                  <span>{c.note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mini-label">What the data said</p>
            {sahara.data.map((d, i) => (
              <Bar key={d.label} value={d.value} label={d.label} tone={i === 2 ? 'pink' : i ? 'yellow' : 'orange'} />
            ))}
            <blockquote className="insight reveal">{sahara.insight}</blockquote>
            <div className="big-number reveal">
              <strong>{sahara.distributed}</strong>
              <span>
                kits distributed at Prashanti,
                <br />
                the Indian Cancer Society’s healing centre
              </span>
            </div>
          </div>
        </div>
        <div className="photo-row">
          {sahara.images.map((src, i) => (
            <Photo key={src} src={src} label={`Sahara Kit — photo ${i + 1}`} className="reveal" />
          ))}
        </div>
      </div>
    </section>
  )
}

function Suraksha() {
  return (
    <section className="section container" id="suraksha">
      <SectionHead index="04" kicker="Suraksha in Pink">
        Taking early detection into <span className="c-pink">living rooms</span> and classrooms.
      </SectionHead>
      <div className="suraksha">
        <div className="reveal">
          <p className="tag-line">{suraksha.role}</p>
          <p className="lead">{suraksha.summary}</p>
          <div className="stat-row">
            {suraksha.stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="highlight">{suraksha.crowdfund}</p>
          <p className="muted">{suraksha.feature}</p>
          <ExtLink href={suraksha.instagram}>Follow @suraksha_in_pink</ExtLink>
        </div>
        <div className="reveal">
          <p className="mini-label">Workshops held at</p>
          <ul className="venues">
            {suraksha.venues.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          <p className="mini-label">Each session covered</p>
          <ul className="check-list">
            {suraksha.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="photo-row photo-row--two">
        {suraksha.images.map((src, i) => (
          <Photo key={src} src={src} label={`Suraksha in Pink — workshop ${i + 1}`} className="reveal" />
        ))}
      </div>
    </section>
  )
}

function Outreach() {
  return (
    <section className="section container" id="prevention">
      <SectionHead index="05" kicker="Cancer & Public Health">
        Making accurate health information <span className="c-yellow">impossible to scroll past</span>.
      </SectionHead>
      <div className="outreach">
        <article className="card reveal">
          <p className="tag-line">{ics.org}</p>
          <h3>{ics.role}</h3>
          {ics.groups.map((g) => (
            <div key={g.title} className="card__group">
              <p className="mini-label">{g.title}</p>
              <ul className="check-list">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
          <ExtLink href={ics.link}>See the social media work</ExtLink>
          <div className="photo-row photo-row--two photo-row--tight">
            {ics.images.map((src, i) => (
              <Photo key={src} src={src} label={`ICS comic ${i + 1}`} />
            ))}
          </div>
        </article>
        <article className="card card--dark reveal">
          <p className="tag-line">{hpv.partner}</p>
          <h3>{hpv.role}</h3>
          <div className="big-number big-number--light">
            <strong>{hpv.reach}</strong>
            <span>students and staff reached</span>
          </div>
          <ul className="chips chips--light">
            {hpv.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <Photo src={hpv.image} label="HPV awareness presentation" />
          <ExtLink href={hpv.link}>Event photos</ExtLink>
        </article>
      </div>
    </section>
  )
}

function Tech() {
  return (
    <section className="section section--navy" id="technology">
      <div className="container">
        <SectionHead index="06" kicker="Technology & Innovation">
          Teaching a machine to read <span className="c-yellow">biopsy images</span>.
        </SectionHead>
        <div className="tech">
          <div className="reveal">
            <p className="tag-line">{tech.role}</p>
            <h3>{tech.title}</h3>
            <p className="lead">{tech.summary}</p>
            <ul className="check-list">
              {tech.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <ul className="chips chips--light">
              {tech.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <ExtLink href={tech.link}>Try the classifier</ExtLink>
          </div>
          <div className="rings">
            {tech.metrics.map((m) => (
              <div className="ring reveal" key={m.label} style={{ '--p': m.value } as CSSProperties}>
                <div className="ring__inner">
                  <strong>{m.value}%</strong>
                </div>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Writing() {
  return (
    <section className="section container" id="publications">
      <SectionHead index="07" kicker="Publications & Writing">
        Explaining the brain to people who <span className="c-orange">have one</span>.
      </SectionHead>
      <div className="writing">
        <div className="reveal">
          <p className="tag-line">
            {articles.outlet} · {articles.focus}
          </p>
          <p className="lead">6 research-backed articles on AI, memory, conditioning and decision-making.</p>
          <p className="muted">{articles.reach}</p>
          <div className="pub reveal">
            <p className="mini-label">Conference research</p>
            <p>“{cancerStudy.title}: {cancerStudy.subtitle}”</p>
            <p className="muted">Oxford Global Psychology Conference · 77 patients · AIIMS / DoctorsForYou</p>
          </div>
          <div className="pub reveal">
            <p className="mini-label">Journal publication</p>
            <p>“{financeStudy.title}”</p>
            <p className="muted">Oxford Journal of Student Scholarship · EBES Conference</p>
          </div>
        </div>
        <ol className="articles">
          {articles.list.map((a, i) => (
            <li key={a} className="reveal">
              <span>{String(i + 1).padStart(2, '0')}</span>
              {a}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Academics() {
  return (
    <section className="section section--tint" id="academics">
      <div className="container">
        <SectionHead index="08" kicker="Academic Journey">
          Adding <span className="c-yellow">biology</span> to the sociocultural lens.
        </SectionHead>
        <div className="academics reveal">
          <div>
            <p className="tag-line">
              {academics.school} · {academics.program}
            </p>
            <h3>{academics.course}</h3>
            <p className="muted">Instructor: {academics.instructor}</p>
            <p>{academics.note}</p>
          </div>
          <div className="stat-col">
            {academics.results.map((r) => (
              <div key={r.label}>
                <strong>{r.value}</strong>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Arts() {
  return (
    <section className="section container" id="arts">
      <SectionHead index="09" kicker="Arts & Leadership">
        Raags, rudiments and <span className="c-orange">red pens</span>.
      </SectionHead>
      <div className="arts">
        {arts.map((a, i) => (
          <article className="art reveal" key={a.title} style={{ transitionDelay: `${i * 70}ms` }}>
            <p className="tag-line">{a.org}</p>
            <h3>{a.title}</h3>
            <p className="art__headline">{a.headline}</p>
            <p>{a.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="section container" id="gallery">
      <SectionHead index="10" kicker="Gallery">
        The work, <span className="c-yellow">in the room</span>.
      </SectionHead>
      <div className="gallery">
        {gallery.map((g) => (
          <div className="gallery__item reveal" key={g.title}>
            <Photo src={g.src} label={g.title} />
            <h3>{g.title}</h3>
            <p className="muted">{g.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="kicker">
          <span>11</span> Contact
        </p>
        <h2 className="contact__title">
          Let’s talk about <span className="c-orange">care</span>, <span className="c-yellow">minds</span> and
          what comes next.
        </h2>
        {contact.email && (
          <a className="contact__mail" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        )}
        <ul className="contact__links">
          {contact.links.map((l) => (
            <li key={l.href}>
              <ExtLink href={l.href}>{l.label}</ExtLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <About />
        <Research />
        <Sahara />
        <Suraksha />
        <Outreach />
        <Tech />
        <Writing />
        <Academics />
        <Arts />
        <Gallery />
        <Contact />
      </main>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Research → Understand → Design → Implement → Impact</span>
      </footer>
    </>
  )
}
