import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { Bar, ExtLink, List, PageHeader, Photo, SectionTitle } from './components'
import {
  academics,
  arc,
  awards,
  articles,
  arts,
  cancerStudy,
  community,
  contact,
  featuredPress,
  financeStudy,
  gallery,
  hpv,
  ics,
  impactStats,
  leadership,
  media,
  narrative,
  profile,
  sahara,
  suraksha,
  tech,
} from './content'
import { pages } from './routes'

const pageBlurbs: Record<string, string> = {
  '/about': 'Student, researcher and public health & cancer awareness advocate.',
  '/research': 'Psychosocial experience of cancer diagnosis in India — 77 patients.',
  '/cancer-public-health': 'Indian Cancer Society internship and community health work.',
  '/suraksha-in-pink': 'Student-led breast-cancer awareness and early detection.',
  '/sahara-kit': 'An emotional-support toolkit for cancer patients and families.',
  '/hpv-cancer-prevention': 'HPV vaccination, cervical-cancer prevention and screening.',
  '/technology-innovation': 'A CNN-based breast cancer classification website.',
  '/publications': 'Conference research, journal publication and articles.',
  '/academic-journey': 'University of Chicago — Biological Psychology.',
  '/arts-leadership': 'Hindustani classical music, drums and editorial leadership.',
  '/media-recognition': 'Conferences, publications, features and awards.',
  '/gallery': 'Photographs from workshops, research and events.',
  '/contact': 'Get in touch.',
}

/* ---------------- Home ---------------- */
export function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero__media">
          <Photo src={profile.portrait} label={profile.name} className="photo--portrait" />
          <span className="hero__notch" aria-hidden="true" />
        </div>
        <div className="hero__text">
          <p className="hero__hello">Hello there!</p>
          <h1>
            My name is {profile.firstName} and I am a student, <em className="c-yellow">researcher</em> and{' '}
            <em className="c-orange">public health</em> advocate <i>(intended major: {profile.major})</i>.
          </h1>
          <ul className="hero__roles">
            {profile.roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <p className="hero__intro">{profile.intro}</p>
      </section>

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

      <section className="section container">
        <SectionTitle label="Core Theme">Research → Understand → Design → Implement → Impact</SectionTitle>
        <div className="about">
          <ul className="narrative reveal">
            {narrative.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="reveal">{profile.theme}</p>
        </div>
        <Arc />
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle label="Explore">Sasha’s Work</SectionTitle>
          <div className="explore">
            {pages.slice(1, -1).map((p, i) => (
              <Link to={p.path} className="explore__card reveal" key={p.path}>
                <span className="explore__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{pageBlurbs[p.path]}</p>
                <span className="explore__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Arc() {
  return (
    <ol className="arc">
      {arc.map((a, i) => (
        <li className="arc__step reveal" key={a.step} style={{ transitionDelay: `${i * 80}ms` }}>
          <span className="arc__num">0{i + 1}</span>
          <h3>{a.step}</h3>
          <p>{a.text}</p>
        </li>
      ))}
    </ol>
  )
}

/* ---------------- About ---------------- */
export function AboutPage() {
  return (
    <>
      <PageHeader kicker="About Sasha" title={profile.name} subtitle={profile.roles.join(' | ')} />
      <section className="section section--flush container">
        <div className="about-grid">
          <Photo src={profile.portrait} label={profile.name} className="photo--portrait reveal" />
          <div>
            <SectionTitle label="Scholar Profile">Introduction</SectionTitle>
            <p className="lead reveal">{profile.intro}</p>
            <p className="reveal">{profile.theme}</p>
            <p className="reveal about-major">
              Intended major: <strong>{profile.major}</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionTitle label="Core Theme">Research → Understand → Design → Implement → Impact</SectionTitle>
        <ul className="narrative narrative--row reveal">
          {narrative.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <Arc />
      </section>
    </>
  )
}

/* ---------------- Research ---------------- */
export function ResearchPage() {
  return (
    <>
      <PageHeader
        kicker="Research & Academic Projects"
        title="Research"
        subtitle="Cancer psychology, healthcare communication and behavioural science."
      />
      <section className="section section--flush container">
        <SectionTitle label={`${cancerStudy.role} | ${cancerStudy.collab}`}>{cancerStudy.title}</SectionTitle>
        <article className="study">
          <div className="reveal">
            <p className="study__sub">{cancerStudy.subtitle}</p>
            <p className="lead">{cancerStudy.summary}</p>
            <p className="mini-label">Research focus</p>
            <List items={cancerStudy.tags} className="chips" />
          </div>
          <div>
            <p className="mini-label">Key findings</p>
            {cancerStudy.findings.map((f, i) => (
              <Bar key={f.label} value={f.value} label={f.label} tone={i ? 'yellow' : 'orange'} />
            ))}
            <div className="reveal">
              <List items={cancerStudy.notes} />
            </div>
          </div>
        </article>
        <div className="reveal">
          <p className="mini-label">Recognition</p>
          <List items={cancerStudy.recognition} className="recognition recognition--row" />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle label={`Additional Research | ${financeStudy.program}`}>{financeStudy.title}</SectionTitle>
          <div className="card card--split reveal">
            <div>
              <p className="lead">
                A behavioural-finance study examining gender and investment risk appetite.
              </p>
              <div className="big-number">
                <strong>74</strong>
                <span>Delhi-NCR investors in the research sample</span>
              </div>
              <p className="mini-label" style={{ marginTop: 28 }}>
                The study examined
              </p>
              <List items={financeStudy.points} />
              <p className="mini-label" style={{ marginTop: 28 }}>
                Key finding
              </p>
              <p className="highlight">{financeStudy.finding}</p>
            </div>
            <List items={financeStudy.recognition} className="recognition" />
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- Cancer & Public Health ---------------- */
export function CancerPublicHealthPage() {
  const related = [
    { path: '/suraksha-in-pink', title: 'Suraksha in Pink', text: suraksha.role },
    { path: '/sahara-kit', title: 'The Sahara Kit', text: sahara.role },
    { path: '/hpv-cancer-prevention', title: 'HPV & Cancer Prevention', text: hpv.role },
  ]
  return (
    <>
      <PageHeader
        kicker="Cancer & Public Health"
        title="Cancer & Public Health"
        subtitle="Translating evidence into accessible interventions — and taking them into communities."
      />
      <section className="section section--flush container">
        <SectionTitle label={ics.org}>Indian Cancer Society Internship</SectionTitle>
        <p className="tag-line reveal">{ics.role}</p>
        <p className="lead reveal" style={{ maxWidth: 760 }}>
          Sasha worked with the Indian Cancer Society on public-health communication and cancer-awareness outreach.
        </p>
        <div className="two-col">
          {ics.groups.map((g) => (
            <div key={g.title} className="card reveal">
              <h3>{g.title}</h3>
              <List items={g.items} />
            </div>
          ))}
        </div>
        <ExtLink href={ics.link}>Social media portfolio</ExtLink>
        <div className="photo-row photo-row--two">
          {ics.images.map((src, i) => (
            <Photo key={src} src={src} label={`HPV & breast-cancer comic ${i + 1}`} className="reveal" />
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle label="Community Initiatives">From Research to Communities</SectionTitle>
          <div className="explore explore--three">
            {related.map((r) => (
              <Link to={r.path} className="explore__card reveal" key={r.path}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <span className="explore__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- Suraksha in Pink ---------------- */
export function SurakshaPage() {
  return (
    <>
      <PageHeader
        kicker="Community Service & Public Health"
        title={<span className="c-pink">Suraksha in Pink</span>}
        subtitle={`${suraksha.role} | Community Cancer Awareness`}
      >
        <p className="tag-line reveal" style={{ marginTop: 20 }}>
          {suraksha.partners}
        </p>
      </PageHeader>
      <section className="section section--flush container">
        <div className="suraksha">
          <div className="reveal">
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
            <p className="screening-note">{suraksha.screeningAgreement}</p>
            <p className="mini-label">In the press</p>
            <List items={suraksha.features} className="recognition" />
            <ExtLink href={suraksha.instagram}>Instagram — @suraksha_in_pink</ExtLink>
          </div>
          <div className="reveal">
            <p className="mini-label">Workshops conducted at</p>
            <List items={suraksha.venues} className="venues" />
            <p className="mini-label">The workshops focused on</p>
            <List items={suraksha.topics} />
          </div>
        </div>
        <div className="photo-row photo-row--two">
          {suraksha.images.map((src, i) => (
            <Photo key={src} src={src} label={`Suraksha in Pink — workshop ${i + 1}`} className="reveal" />
          ))}
        </div>
      </section>
    </>
  )
}

/* ---------------- Sahara Kit ---------------- */
export function SaharaPage() {
  return (
    <>
      <PageHeader kicker={sahara.partner} title="The Sahara Kit" subtitle={sahara.role} />
      <section className="section section--flush container">
        <div className="sahara">
          <div className="reveal">
            <p className="lead">{sahara.summary}</p>
            <p className="mini-label">Components included</p>
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
            <p className="mini-label">Sasha’s research showed that</p>
            {sahara.data.map((d, i) => (
              <Bar key={d.label} value={d.value} label={d.label} tone={i === 2 ? 'pink' : i ? 'yellow' : 'orange'} />
            ))}
            <blockquote className="insight reveal">{sahara.insight}</blockquote>
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionTitle label="From pilot to adoption">Implementation</SectionTitle>
          <div className="stat-row stat-row--three reveal">
            <div>
              <strong>{sahara.distributed}</strong>
              <span>kits distributed at Prashanti</span>
            </div>
            <div>
              <strong>{sahara.reducedStress}</strong>
              <span>recipients reported reduced stress</span>
            </div>
            <div>
              <strong>{sahara.shipped}</strong>
              <span>more kits shipped</span>
            </div>
          </div>
          <ol className="timeline">
            {sahara.implementation.map((step, i) => (
              <li key={step.title} className="reveal">
                <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="photo-row" style={{ marginTop: 56 }}>
            {sahara.images.map((src, i) => (
              <Photo key={src} src={src} label={`Sahara Kit — photo ${i + 1}`} className="reveal" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- HPV & Cancer Prevention ---------------- */
export function HpvPage() {
  return (
    <>
      <PageHeader kicker="HPV & Cancer Prevention" title="HPV & Cervical Cancer Awareness" subtitle={`${hpv.role} | ${hpv.partner}`} />
      <section className="section section--flush container">
        <div className="two-col two-col--wide">
          <div className="reveal">
            <p className="lead">Sasha delivered an awareness presentation focused on:</p>
            <List items={hpv.topics} />
            <div className="stat-row stat-row--two" style={{ margin: '32px 0' }}>
              <div>
                <strong>{hpv.reach}</strong>
                <span>students and staff reached</span>
              </div>
              <div>
                <strong>{hpv.assemblies}</strong>
                <span>school assemblies delivered</span>
              </div>
            </div>
            <ExtLink href={hpv.link}>Event photos</ExtLink>
          </div>
          <Photo src={hpv.image} label="HPV awareness presentation" className="reveal" />
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionTitle label="Suraksha in Pink">Screening & Early Detection</SectionTitle>
          <div className="two-col">
            <div className="card reveal">
              <h3>Screening Camp</h3>
              <p>{suraksha.crowdfund}</p>
              <p style={{ marginTop: 12 }}>{suraksha.screeningAgreement}</p>
            </div>
            <div className="card reveal">
              <h3>HPV & Breast-Cancer Comics</h3>
              <p>Educational comics and myth-busting content created for Indian Cancer Society social media.</p>
              <ExtLink href={ics.link}>View</ExtLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- Technology ---------------- */
export function TechPage() {
  return (
    <>
      <PageHeader kicker="Technology & Innovation" title={tech.title} subtitle={tech.role} />
      <section className="section section--navy">
        <div className="container tech">
          <div className="reveal">
            <p className="lead">{tech.summary}</p>
            <p className="mini-label">Sasha</p>
            <List items={tech.steps} />
            <p className="mini-label">Skills</p>
            <List items={tech.skills} className="chips chips--light" />
            {tech.link && <ExtLink href={tech.link}>Website</ExtLink>}
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
      </section>
    </>
  )
}

/* ---------------- Publications ---------------- */
export function PublicationsPage() {
  return (
    <>
      <PageHeader
        kicker="Publications & Research Communication"
        title="Publications"
        subtitle="Conference research, journal publication and research-backed writing."
      />
      <section className="section section--flush container">
        <SectionTitle label="Cancer Research">“{cancerStudy.title}: {cancerStudy.subtitle}”</SectionTitle>
        <dl className="facts reveal">
          <div>
            <dt>Conference</dt>
            <dd>Oxford Global Psychology Conference</dd>
          </div>
          <div>
            <dt>Primary dataset</dt>
            <dd>77 Indian cancer patients</dd>
          </div>
          <div>
            <dt>Collaboration</dt>
            <dd>AIIMS / DoctorsForYou</dd>
          </div>
        </dl>
      </section>
      <section className="section container">
        <SectionTitle label="Behavioural Finance">“{financeStudy.title}”</SectionTitle>
        <dl className="facts reveal">
          <div>
            <dt>Journal</dt>
            <dd>Oxford Journal of Student Scholarship</dd>
          </div>
          <div>
            <dt>Conference</dt>
            <dd>Eurasia Business and Economics Society Conference</dd>
          </div>
          <div>
            <dt>Sample</dt>
            <dd>{financeStudy.sample}</dd>
          </div>
        </dl>
      </section>
      <section className="section section--tint">
        <div className="container writing">
          <div className="reveal">
            <SectionTitle label="Writing & Publications">
              {articles.outlet} — {articles.focus} Writing
            </SectionTitle>
            <p className="lead">Sasha authored 6 research-backed articles exploring AI and cognition, memory, behavioural psychology, conditioning, neuroscience and decision-making.</p>
            <p className="muted">{articles.reach}</p>
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
    </>
  )
}

/* ---------------- Academic Journey ---------------- */
export function AcademicPage() {
  return (
    <>
      <PageHeader kicker="Academic Journey" title="Biological Psychology" subtitle={`${academics.school} — ${academics.program}`} />
      <section className="section section--flush container">
        <div className="academics reveal">
          <div>
            <p className="mini-label">Course</p>
            <h3>{academics.course}</h3>
            <p className="muted">Instructor: {academics.instructor}</p>
            <p className="lead" style={{ marginTop: 24 }}>
              {academics.note}
            </p>
          </div>
          <div className="stat-col">
            <p className="mini-label">Academic performance</p>
            {academics.results.map((r) => (
              <div key={r.label}>
                <strong>{r.value}</strong>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionTitle label="Awards & Honours">Academic Honours</SectionTitle>
        <Awards items={awards.filter((a) => a.title !== 'CREST Gold Award')} />
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionTitle label="Intended Major">{profile.major}</SectionTitle>
          <p className="lead reveal" style={{ maxWidth: 760 }}>
            {profile.intro}
          </p>
        </div>
      </section>
    </>
  )
}

/* ---------------- Arts & Leadership ---------------- */
export function ArtsPage() {
  return (
    <>
      <PageHeader kicker="Arts & Leadership" title="Arts & Leadership" subtitle="Arts & extracurricular activities, school leadership and community engagement." />
      <section className="section section--flush container">
        <SectionTitle label="Arts & Extracurricular Activities">Music</SectionTitle>
        <div className="two-col">
          {arts.map((a) => (
            <article className="art reveal" key={a.title}>
              <p className="tag-line">{a.org}</p>
              <h3>{a.title}</h3>
              <p className="art__headline">{a.headline}</p>
              <List items={a.points} />
            </article>
          ))}
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionTitle label="School Leadership">
            {leadership.title} — {leadership.org}
          </SectionTitle>
          <p className="lead reveal">{leadership.summary}</p>
          <p className="mini-label reveal">Responsibilities included</p>
          <List items={leadership.points} className="check-list check-list--cols reveal" />
        </div>
      </section>
      <section className="section container">
        <SectionTitle label="Other Community Engagement">{community.title}</SectionTitle>
        <div className="two-col reveal">
          <div>
            <p className="tag-line">{community.role}</p>
            <p className="lead">{community.summary}</p>
            <p className="mini-label">She teaches</p>
            <List items={community.subjects} className="chips" />
          </div>
          <div className="stat-col">
            {community.stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Awards({ items }: { items: typeof awards }) {
  return (
    <ol className="awards">
      {items.map((a) => (
        <li key={a.title} className="reveal">
          <span className="awards__level">{a.level}</span>
          <h3>{a.title}</h3>
          <p>{a.detail}</p>
        </li>
      ))}
    </ol>
  )
}

/* ---------------- Media & Recognition ---------------- */
export function MediaPage() {
  return (
    <>
      <PageHeader kicker="Media & Recognition" title="Media & Recognition" subtitle="Awards, press features, publications, conferences and collaborations." />
      <section className="section section--flush container">
        <article className="press reveal">
          <div className="press__masthead">
            <span className="press__outlet">{featuredPress.outlet}</span>
            <span>{featuredPress.section}</span>
            <span>
              {featuredPress.date} · {featuredPress.pages}
            </span>
          </div>
          <div className="press__body">
            <div>
              <span className="press__kicker">{featuredPress.kicker}</span>
              <h2 className="press__title">{featuredPress.title}</h2>
              <p className="press__standfirst">{featuredPress.standfirst}</p>
              <p className="muted">By {featuredPress.author}</p>
              {featuredPress.link && <ExtLink href={featuredPress.link}>Read the article</ExtLink>}
            </div>
            <div>
              <p className="mini-label">The feature covers</p>
              <List items={featuredPress.covers} />
            </div>
          </div>
          <blockquote className="press__quote">“{featuredPress.quote}”</blockquote>
        </article>
      </section>
      <section className="section container">
        <SectionTitle label="Honours">Awards & Honours</SectionTitle>
        <Awards items={awards} />
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionTitle label="Press · Publications · Conferences">Media & Recognition</SectionTitle>
          <ol className="media-list">
            {media.map((m) => (
              <li key={m.title + m.detail} className="reveal">
                <span className="media-list__type">{m.type}</span>
                <h3>{m.title}</h3>
                <p>{m.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

/* ---------------- Gallery ---------------- */
export function GalleryPage() {
  return (
    <>
      <PageHeader kicker="Photography & Visual Assets" title="Gallery" />
      {gallery.map((g, gi) => (
        <section className={`section ${gi % 2 ? 'section--tint' : ''} ${gi === 0 ? 'section--flush' : ''}`} key={g.slug}>
          <div className="container">
            <SectionTitle label={String(gi + 1).padStart(2, '0')}>{g.title}</SectionTitle>
            <div className="gallery">
              {g.items.map((item, i) => (
                <div className="gallery__item reveal" key={item}>
                  <Photo src={`/images/gallery-${g.slug}-${i + 1}.jpg`} label={item} />
                  <p className="gallery__caption">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

/* ---------------- Contact ---------------- */
export function ContactPage() {
  return (
    <section className="contact contact--page">
      <div className="container">
        <p className="kicker">Contact</p>
        <h1 className="contact__title">Get in touch with {profile.firstName}.</h1>
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

export function NotFoundPage() {
  return (
    <PageHeader kicker="404" title="Page not found">
      <Link to="/" className="ext-link">
        Back home
      </Link>
    </PageHeader>
  )
}
