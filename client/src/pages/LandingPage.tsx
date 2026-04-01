import React from "react";
import {
  MINI_OLYMPICS_FORM_URL,
  PING_PONG_FOOSBALL_FORM_URL,
} from "../formUrls";

function DeadlineBanner() {
  return (
    <p className="deadline-banner">
      <strong>Registration deadline:</strong> April 12, 2026 at 10:00 PM EDT
      (Montreal time)
    </p>
  );
}

export default function LandingPage() {
  return (
    <div className="page">
      <header className="header">
        <a href="#top" className="brand brand-link">
          <span className="brand-badge" aria-hidden="true" />
          <span>Shiane Haidery Events</span>
        </a>
        <nav className="header-nav" aria-label="On this page">
          <a className="nav-pill" href="#mini-olympics">
            Mini Olympics
          </a>
          <a className="nav-pill nav-pill--accent" href="#ping-pong-foosball">
            Ping Pong & Foosball
          </a>
          <a className="nav-pill nav-pill--payment" href="#payment">
            Payment
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="site-intro">
          <div className="container">
            <p className="intro-eyebrow">Saturday, May 30, 2026</p>
            <h1 className="intro-title">Two events, one great day</h1>
            <p className="intro-lead">
              Join us at <strong>Shiane Haidery</strong> for the{" "}
              <strong>Mini Olympics</strong> (kids 5–10) and the{" "}
              <strong>Ping Pong & Foosball Tournament</strong>. Register for
              each event separately below.
            </p>
            <DeadlineBanner />
          </div>
        </section>

        {/* Mini Olympics */}
        <section
          id="mini-olympics"
          className="event-section event-section--olympics"
          aria-labelledby="mini-olympics-heading"
        >
          <div className="container event-grid">
            <div className="event-copy">
              <h2 id="mini-olympics-heading" className="event-title">
                Mini Olympics
              </h2>
              <p className="event-tagline">
                A fun morning of games for children ages{" "}
                <strong>5–10</strong>.
              </p>

              <div className="detail-block">
                <h3 className="detail-heading">Before you register</h3>
                <ul className="detail-list">
                  <li>
                    Participants must be between <strong>5 and 10 years old</strong>{" "}
                    on the day of the Mini Olympics.
                  </li>
                  <li>
                    <strong>One form per child</strong> you register.
                  </li>
                  <li>
                    Fee: <strong>$20 CAD per child</strong>. Additional
                    contributions toward the event are welcome.
                  </li>
                  <li>
                    <strong>Venue:</strong> Shiane Haidery Islamic Association
                  </li>
                  <li>
                    <strong>Address:</strong> 2174 Belgrave Ave, Montreal,
                    Quebec H4A 2L8
                  </li>
                  <li>
                    <strong>Date & time:</strong> Saturday, May 30, 2026 at{" "}
                    <strong>9:00 a.m.</strong>
                  </li>
                </ul>
              </div>

              <div className="detail-block">
                <h3 className="detail-heading">Mini Olympics games</h3>
                <ol className="games-list">
                  <li>Balloon Balance Challenge</li>
                  <li>Jump Rope</li>
                  <li>Long Jump</li>
                  <li>Limbo</li>
                  <li>Shot Put</li>
                </ol>
              </div>

              <div className="cta-row">
                <a
                  href={MINI_OLYMPICS_FORM_URL}
                  className="btn btn-primary btn-olympics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register — Mini Olympics
                </a>
                <a
                  href="#payment"
                  className="btn btn-secondary btn-olympics-outline"
                >
                  Payment & deadline
                </a>
              </div>
            </div>

            <div className="event-poster-wrap">
              <img
                className="poster"
                src="/assets/mini-olympics-poster.png"
                alt="Mini Shia Olympics promotional poster"
              />
            </div>
          </div>
        </section>

        {/* Ping Pong & Foosball */}
        <section
          id="ping-pong-foosball"
          className="event-section event-section--tournament"
          aria-labelledby="tournament-heading"
        >
          <div className="container event-grid event-grid--reverse">
            <div className="event-copy">
              <h2 id="tournament-heading" className="event-title">
                Ping Pong & Foosball Tournament
              </h2>
              <p className="event-meta">
                <span className="meta-item">
                  <span aria-hidden="true">📅</span>{" "}
                  <strong>Event date:</strong> May 30
                </span>
                <span className="meta-item">
                  <span aria-hidden="true">📍</span>{" "}
                  <strong>Location:</strong> Shiane Haidery
                </span>
              </p>

              <div className="fee-strip">
                <div>
                  <strong>Ping Pong:</strong> $20 per participant
                </div>
                <div>
                  <strong>Foosball:</strong> $30 per team
                </div>
              </div>

              <div className="detail-block">
                <h3 className="detail-heading">
                  <span aria-hidden="true">🏓</span> Ping Pong (individual)
                </h3>
                <ul className="detail-list">
                  <li>
                    <strong>Age group 1:</strong> 11 to 14 years
                  </li>
                  <li>
                    <strong>Age group 2:</strong> 15 years and up
                  </li>
                </ul>
              </div>

              <div className="detail-block">
                <h3 className="detail-heading">
                  <span aria-hidden="true">⚽</span> Foosball (teams of 2)
                </h3>
                <ul className="detail-list">
                  <li>
                    <strong>Age group:</strong> 15 years and up
                  </li>
                  <li>
                    One player completes the form and includes{" "}
                    <strong>both</strong> team members&apos; names.
                  </li>
                </ul>
              </div>

              <div className="detail-block">
                <h3 className="detail-heading">Important</h3>
                <ul className="detail-list">
                  <li>
                    Provide an <strong>active WhatsApp number</strong> for
                    tournament updates.
                  </li>
                  <li>
                    Submit <strong>one form per</strong> Ping Pong player or{" "}
                    <strong>one form per</strong> Foosball team.
                  </li>
                </ul>
              </div>

              <div className="cta-row">
                <a
                  href={PING_PONG_FOOSBALL_FORM_URL}
                  className="btn btn-primary btn-tournament"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register — Tournament
                </a>
                <a
                  href="#payment"
                  className="btn btn-secondary btn-tournament-outline"
                >
                  Payment & deadline
                </a>
              </div>
            </div>

            <div className="event-poster-wrap event-poster-wrap--tournament">
              <img
                className="poster"
                src="/assets/ping-pong-foosball-poster.png"
                alt="Ping Pong and Foosball tournament promotional poster"
              />
            </div>
          </div>
        </section>

        <section
          id="payment"
          className="payment-section"
          aria-labelledby="payment-heading"
        >
          <div className="container">
            <h2 id="payment-heading" className="payment-section-title">
              Payment & registration deadline
            </h2>
            <p className="payment-section-lead">
              The same payment instructions apply to the Mini Olympics and the
              Ping Pong & Foosball tournament.
            </p>
            <div className="payment-card payment-card--shared">
              <h3 className="payment-title">e-Transfer</h3>
              <p className="payment-text">
                Pay by <strong>e-Transfer</strong> to{" "}
                <a href="mailto:shia.retreat@gmail.com">
                  shia.retreat@gmail.com
                </a>
                . Use password: <strong>mini26</strong>
              </p>
              <p className="payment-note">
                Registration is confirmed only after payment is received.
              </p>
              <DeadlineBanner />
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <span>Shiane Haidery — May 30, 2026</span>
            <span className="footer-muted">
              Mini Olympics · Ping Pong & Foosball
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
