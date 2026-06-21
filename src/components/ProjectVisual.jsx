import { CalendarDays, MapPin, Scissors, Trophy } from 'lucide-react';

function RzoVisual() {
  return (
    <div className="mockup mockup--rzo" aria-label="Aperçu stylisé de RZO Sports">
      <div className="mockup-browser">
        <span />
        <span />
        <span />
        <small>rzosports.com</small>
      </div>
      <div className="rzo-ui">
        <div className="rzo-nav">
          <strong>RZO<span>SPORTS</span></strong>
          <i />
          <i />
          <b />
        </div>
        <div className="rzo-hero">
          <span className="visual-kicker">PLAY. BOOK. REPEAT.</span>
          <h3>Ton prochain terrain t’attend.</h3>
          <div className="search-pill">
            <MapPin size={15} /> Montréal
            <span>Rechercher</span>
          </div>
        </div>
        <div className="venue-row">
          <div><span>PADEL</span></div>
          <div><span>BASKET</span></div>
          <div><span>SOCCER</span></div>
        </div>
      </div>
    </div>
  );
}

function NovaVisual() {
  return (
    <div className="mockup mockup--nova" aria-label="Aperçu stylisé de Nova Hair Studio">
      <div className="mockup-browser mockup-browser--light">
        <span />
        <span />
        <span />
        <small>novahairstudio.com</small>
      </div>
      <div className="nova-ui">
        <div className="nova-nav">
          <strong>NOVA</strong>
          <div>Services &nbsp; Stylists &nbsp; About</div>
          <b>Book now</b>
        </div>
        <div className="nova-copy">
          <span>THE ART OF HAIR</span>
          <h3>Luxury, shaped around you.</h3>
          <button type="button">Book appointment</button>
        </div>
        <div className="nova-booking">
          <Scissors size={18} />
          <span><small>Selected service</small>Balayage</span>
          <CalendarDays size={18} />
          <span><small>Duration</small>180 min</span>
        </div>
      </div>
    </div>
  );
}

function MemoryVisual() {
  const cards = ['🦁', '🌿', '🪐', '🐋', '🌿', '🦁', '🐋', '🪐'];

  return (
    <div className="mockup mockup--memory" aria-label="Aperçu stylisé de Memory Safari">
      <div className="mockup-browser mockup-browser--light">
        <span />
        <span />
        <span />
        <small>memory-safari</small>
      </div>
      <div className="memory-ui">
        <div className="memory-heading">
          <span>🐾</span>
          <div><small>MEMORY SAFARI</small><strong>Animaux</strong></div>
          <b><Trophy size={15} /> 18 coups</b>
        </div>
        <div className="memory-grid">
          {cards.map((card, index) => (
            <span className={index === 2 || index === 5 ? 'is-hidden' : ''} key={`${card}-${index}`}>
              {index === 2 || index === 5 ? '🐾' : card}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.id === 'rzo') return <RzoVisual />;
  if (project.id === 'nova') return <NovaVisual />;
  return <MemoryVisual />;
}

export default ProjectVisual;
