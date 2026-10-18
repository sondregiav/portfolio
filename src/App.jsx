import './App.css'

const EMAIL = 'sondregiav@gmail.com'
const GITHUB_URL = 'https://github.com/sondregiav'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

// Prices are defined once and shared by the Services and Pricing sections.
const services = [
  {
    id: 'quick-improvements',
    name: 'Quick improvements',
    price: '$60',
    description:
      'Small, focused updates to an existing website, such as fixing layout problems on mobile, updating content, or improving readability.',
    coverage:
      'Best for one or a few contained changes to a site you already have.',
  },
  {
    id: 'landing-pages',
    name: 'Landing pages',
    price: '$270',
    description:
      'A clear, responsive single page that presents your business, what you offer, and how customers can get in touch.',
    coverage:
      'Covers the design and build of one page. More content or features may increase the cost.',
  },
  {
    id: 'website-refreshes',
    name: 'Website refreshes',
    price: '$430',
    description:
      'A fresh, consistent look and a better mobile experience for an existing multi-section website, while keeping what already works.',
    coverage:
      'Covers restyling and restructuring a larger site. The final cost depends on how many pages and sections are involved.',
  },
]

const projectSections = [
  'Services',
  'Benefits',
  'Process',
  'Pricing',
  'FAQ',
  'Contact',
]

const projectTags = ['React', 'JavaScript', 'CSS', 'Responsive Design']

const steps = [
  {
    name: 'Discover',
    description:
      'We talk about your business, your customers, and what you want the website to do.',
  },
  {
    name: 'Build',
    description:
      'I design and build the site to work well on phones, tablets, and desktops, and keep you updated along the way.',
  },
  {
    name: 'Review',
    description:
      'You look through the result and share feedback, and we agree on any adjustments together.',
  },
  {
    name: 'Deliver',
    description:
      'Once you are happy, I hand over the finished site and answer your questions.',
  },
]

function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top">
            Sondre G.
          </a>
          <nav aria-label="Main">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="section hero" aria-labelledby="hero-title">
          <div className="container">
            <h1 id="hero-title">
              Clean, responsive websites for businesses
            </h1>
            <p className="lead">
              I build easy-to-use websites that look good on every screen, and I
              keep communication clear from the first conversation to the final
              handover.
            </p>
            <div className="cta-group">
              <a className="button button-primary" href="#contact">
                Start a project
              </a>
              <a className="button button-secondary" href="#work">
                See my work
              </a>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="section"
          aria-labelledby="services-title"
        >
          <div className="container">
            <h2 id="services-title">Services</h2>
            <p className="section-intro">
              Three ways to work together, depending on what your business needs.
            </p>
            <div className="card-grid">
              {services.map((service) => (
                <article className="card" key={service.id}>
                  <h3>{service.name}</h3>
                  <p className="price">from {service.price}</p>
                  <p className="muted">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="container">
            <h2 id="work-title">Featured project</h2>
            <article className="card project">
              <p className="badge">Fictional concept project</p>
              <h3>Nordlys Renhold</h3>
              <p className="muted">
                A planned landing page for a fictional cleaning company. It is a
                concept created to show how I approach structure, clarity, and
                responsive design. It is not a real client project, and there is
                no live demo yet.
              </p>
              <h4>Planned content</h4>
              <ul className="tag-list">
                {projectSections.map((section) => (
                  <li key={section}>{section}</li>
                ))}
              </ul>
              <h4>Technology</h4>
              <ul className="tag-list">
                {projectTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section
          id="process"
          className="section"
          aria-labelledby="process-title"
        >
          <div className="container">
            <h2 id="process-title">Process</h2>
            <p className="section-intro">
              A simple, collaborative process with clear communication at every
              step.
            </p>
            <ol className="steps">
              {steps.map((step) => (
                <li className="step" key={step.name}>
                  <h3>{step.name}</h3>
                  <p className="muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="pricing"
          className="section"
          aria-labelledby="pricing-title"
        >
          <div className="container">
            <h2 id="pricing-title">Pricing</h2>
            <p className="section-intro">
              These are starting prices. The final cost depends on the scope of
              your project, and we will agree on it with you before work begins.
            </p>
            <div className="card-grid">
              {services.map((service) => (
                <article className="card" key={service.id}>
                  <h3>{service.name}</h3>
                  <p className="price">from {service.price}</p>
                  <p className="muted">{service.coverage}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <h2 id="contact-title">Contact</h2>
            <p className="section-intro">
              Have a project in mind, or not sure where to start? Send me a
              short message about your business and what you need, and we can
              talk it through.
            </p>
            <a className="button button-primary" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            &copy; {year} Sondre G.
          </p>
          <ul className="footer-links">
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="#top">Back to top</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
