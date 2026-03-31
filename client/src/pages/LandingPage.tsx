import React from "react";
import { Link } from "react-router-dom";

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="info-card">
      <h3 className="info-title">{title}</h3>
      <p className="info-text">{children}</p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand" aria-label="Mini Olympics">
          <span className="brand-badge" aria-hidden="true" />
          <span>Mini Olympics</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <div className="kicker">
              <span>May 30, 2026</span>
              <span className="kicker-dot" aria-hidden="true" />
              <span>Ages 5 - 10</span>
            </div>

            <h1 className="hero-title">Mini Olympics 2026</h1>
            <p className="hero-subtitle">
              A fun, friendly sports day for kids. Games, teamwork, and big
              smiles. Details coming soon.
            </p>

            <Link to="/forms" className="btn btn-primary">
              Register
            </Link>
          </div>

          <div className="hero-media">
            <img
              className="poster"
              src="/assets/mini-olympics-poster.png"
              alt="Mini Olympics event poster"
            />
          </div>
        </section>

        <section className="info">
          <div className="container">
            <h2 className="section-title">Program Details (Placeholder)</h2>
            <p className="section-lead">
              This section is intentionally left blank for you to populate later
              with schedule, location, and other key info.
            </p>

            <div className="info-grid">
              <InfoCard title="Events">
                Add events and activities here (e.g. sprint races, mini relays,
                and skills challenges).
              </InfoCard>
              <InfoCard title="Rules & Safety">
                Add age-group rules, safety notes, and check-in instructions.
              </InfoCard>
              <InfoCard title="What to Bring">
                Add clothing and item checklist (water, comfy shoes, etc.).
              </InfoCard>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <span>Mini Olympics Theme</span>
            <span className="footer-muted">Kawthar Studios</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
