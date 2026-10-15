import { useState } from 'react'
import './App.css'

const destinations = [
  {
    name: 'The Dolomites',
    country: 'Italy',
    detail: 'Alpine air & quiet trails',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85',
    alt: 'Mountain peaks beneath a starry sky',
  },
  {
    name: 'Kyoto, slowly',
    country: 'Japan',
    detail: 'Temple mornings & tea',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85',
    alt: 'Traditional wooden street in Kyoto',
  },
  {
    name: 'The wild coast',
    country: 'Portugal',
    detail: 'Salt air & long lunches',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85',
    alt: 'Waves rolling into a quiet coastline',
  },
]

function App() {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Elsewhere home">
          elsewhere<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#places">Places</a>
          <a href="#notes">Our point of view</a>
        </nav>
        <a className="header-link" href="#places">
          Find your somewhere <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="feature" id="top" aria-labelledby="feature-title">
        <img
          className="feature-image"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=90"
          alt="Sunlight falling across a vast, open mountain landscape"
        />
        <div className="feature-shade" />
        <div className="feature-topline">
          <span>Independent travel, thoughtfully found</span>
          <span className="issue-label">Field notes No. 08 / 2026</span>
        </div>
        <div className="feature-copy">
          <p className="eyebrow"><span /> For the beautifully unhurried</p>
          <h1 id="feature-title">Go where<br />you feel <em>more.</em></h1>
          <p className="feature-description">
            Thoughtful places for people who would rather feel a place than
            tick it off.
          </p>
          <a className="feature-cta" href="#places">
            Find your next somewhere <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="feature-caption">
          <span>01 / 03</span>
          <span>Somewhere in the Dolomites, Italy</span>
          <span>46° 24' N&nbsp;&nbsp; 11° 51' E</span>
        </div>
      </section>

      <section className="places-section" id="places">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow"><span /> A little further</p>
            <h2>Places that stay with you.</h2>
          </div>
          <a className="text-link" href="#notes">
            See our way of travelling <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <a className="destination" href="#notes" key={destination.name}>
              <div className="destination-image-wrap">
                <img src={destination.image} alt={destination.alt} />
                <span className="destination-index">0{index + 1}</span>
                <span className="destination-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="destination-meta">
                <div>
                  <h3>{destination.name}</h3>
                  <p>{destination.detail}</p>
                </div>
                <span>{destination.country}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="closing-note" id="notes">
        <p className="eyebrow"><span /> A note from elsewhere</p>
        <div className="closing-content">
          <h2>Less itinerary.<br /><em>More instinct.</em></h2>
          <div className="closing-side">
            <p>
              We collect the small, good things: a locally owned inn, the long
              way home, a table worth lingering at. Start anywhere.
            </p>
            <button
              className={`save-button${isSaved ? ' is-saved' : ''}`}
              type="button"
              aria-pressed={isSaved}
              onClick={() => setIsSaved(!isSaved)}
            >
              <span aria-hidden="true">{isSaved ? '✓' : '+'}</span>
              {isSaved ? 'Saved for later' : 'Save this thought'}
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">elsewhere<span>.</span></a>
        <span>Take the scenic route.</span>
        <a href="#top">Back to the beginning ↑</a>
      </footer>
    </main>
  )
}

export default App
