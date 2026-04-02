import React from "react";
import {
  MINI_OLYMPICS_FORM_URL,
  PING_PONG_FOOSBALL_FORM_URL,
} from "../formUrls";

function DeadlineBanner() {
  return (
    <p className="deadline-banner">
      <strong>Deadline:</strong> April 12, 2026 · 10:00 PM EDT (Montreal)
    </p>
  );
}

/** Poster-inspired SHIA letter dots (Mini Shia Olympics look). */
function ShiaDots() {
  return (
    <div className="shia-dots" aria-hidden="true">
      <span className="shia-dot shia-dot--s">S</span>
      <span className="shia-dot shia-dot--h">H</span>
      <span className="shia-dot shia-dot--i">I</span>
      <span className="shia-dot shia-dot--a">A</span>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="page">
      <header className="header">
        <a href="#top" className="brand brand-link">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-mark__gold" />
          </span>
          <span className="brand-text">Shiane Haidery</span>
        </a>
        <nav className="header-nav" aria-label="On this page">
          <a className="nav-pill nav-pill--olympics" href="#mini-olympics">
            Mini Olympics
          </a>
          <a
            className="nav-pill nav-pill--tournament"
            href="#ping-pong-foosball"
          >
            Ping Pong & Foosball
          </a>
          <a className="nav-pill nav-pill--payment" href="#payment">
            Payment
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="site-intro">
          <div className="site-intro__clouds" aria-hidden="true" />
          <div className="container site-intro__inner">
            <p className="intro-eyebrow">Saturday · May 30, 2026</p>
            <h1 className="intro-title">Two events · One day</h1>
            <p className="intro-lead">
              Mini Olympics for ages 5–10, plus a Ping Pong & Foosball
              tournament. Same venue — register for each event separately.
            </p>
            <DeadlineBanner />
          </div>
        </section>

        <section
          id="mini-olympics"
          className="event-section event-section--olympics"
          aria-labelledby="mini-olympics-heading"
        >
          <div className="container event-shell">
            <div className="event-grid">
              <div className="event-copy event-copy--olympics">
                <div className="event-heading-row">
                  <ShiaDots />
                  <h2 id="mini-olympics-heading" className="event-title">
                    Mini Olympics
                  </h2>
                </div>
                <p className="event-tagline">
                  Morning games for kids <strong>5–10</strong> · 9:00 a.m.
                </p>

                <div className="detail-block">
                  <h3 className="detail-heading">Register</h3>
                  <ul className="detail-list">
                    <li>
                      Ages <strong>5–10</strong> on event day
                    </li>
                    <li>
                      <strong>One Google Form per child</strong>
                    </li>
                    <li>
                      <strong>$20 CAD</strong> per child (extra contributions
                      welcome)
                    </li>
                  </ul>
                </div>

                <div className="detail-block detail-block--games">
                  <h3 className="detail-heading">Games</h3>
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
                    Register
                  </a>
                  <a
                    href="#payment"
                    className="btn btn-secondary btn-olympics-outline"
                  >
                    Payment
                  </a>
                </div>
              </div>

              <figure className="event-poster event-poster--olympics">
                <img
                  className="poster-img"
                  src="/assets/mini-olympics-poster.png"
                  alt="Mini Shia Olympics poster"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section
          id="ping-pong-foosball"
          className="event-section event-section--tournament"
          aria-labelledby="tournament-heading"
        >
          <div className="container event-shell">
            <div className="event-grid event-grid--reverse">
              <div className="event-copy event-copy--tournament">
                <h2
                  id="tournament-heading"
                  className="event-title event-title--tournament"
                >
                  Ping Pong & Foosball
                </h2>
                <p className="event-subtitle">
                  Tournament · May 30 · Shiane Haidery
                </p>

                <div className="fee-row">
                  <div className="fee-tile fee-tile--pp">
                    <span className="fee-tile__label">Ping Pong</span>
                    <span className="fee-tile__price">$20 / person</span>
                  </div>
                  <div className="fee-tile fee-tile--fb">
                    <span className="fee-tile__label">Foosball</span>
                    <span className="fee-tile__price">$30 / team</span>
                  </div>
                </div>

                <div className="detail-block">
                  <h3 className="detail-heading detail-heading--tournament">
                    <span
                      className="detail-icon detail-icon--pp"
                      aria-hidden="true"
                    />
                    Ping Pong · Individual
                  </h3>
                  <ul className="detail-list">
                    <li>
                      <strong>11–14</strong> years
                    </li>
                    <li>
                      <strong>15+</strong> years
                    </li>
                  </ul>
                </div>

                <div className="detail-block">
                  <h3 className="detail-heading detail-heading--tournament">
                    <span
                      className="detail-icon detail-icon--fb"
                      aria-hidden="true"
                    />
                    Foosball · Teams of 2
                  </h3>
                  <ul className="detail-list">
                    <li>
                      <strong>15+</strong> years
                    </li>
                    <li>
                      One form includes <strong>both</strong> players&apos;
                      names
                    </li>
                  </ul>
                </div>

                <div className="detail-block">
                  <h3 className="detail-heading">Notes</h3>
                  <ul className="detail-list">
                    <li>
                      Active <strong>WhatsApp</strong> for updates
                    </li>
                    <li>One form per Ping Pong player or per Foosball team</li>
                  </ul>
                </div>

                <div className="cta-row">
                  <a
                    href={PING_PONG_FOOSBALL_FORM_URL}
                    className="btn btn-primary btn-tournament"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                  <a
                    href="#payment"
                    className="btn btn-secondary btn-tournament-outline"
                  >
                    Payment
                  </a>
                </div>
              </div>

              <figure className="event-poster event-poster--tournament">
                <img
                  className="poster-img"
                  src="/assets/ping-pong-foosball-poster.png"
                  alt="Ping Pong and Foosball tournament poster"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
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
              Payment
            </h2>
            <p className="payment-section-lead">
              Same e-Transfer details for both events. Mini Olympics{" "}
              <strong>Where</strong> and <strong>When</strong> are in the cards
              beside payment.
            </p>
            <div className="payment-split">
              <div className="payment-card payment-card--shared">
                <h3 className="payment-split-card-title">Payment</h3>
                <p className="payment-text payment-text--lead">
                  <strong>e-Transfer</strong> to{" "}
                  <a href="mailto:shia.retreat@gmail.com">
                    shia.retreat@gmail.com
                  </a>
                  <br />
                  Password: <strong>mini26</strong>
                </p>
                <p className="payment-note">
                  Registration is confirmed after payment is received.
                </p>
                <DeadlineBanner />
              </div>
              <div className="venue-card">
                <h3 className="payment-split-card-title">Where</h3>
                <ul className="detail-list detail-list--plain venue-card__list">
                  <li>Shiane Haidery Islamic Association</li>
                  <li>2174 Belgrave Ave, Montreal, QC H4A 2L8</li>
                </ul>
              </div>
              <div className="when-card">
                <h3 className="payment-split-card-title">When</h3>
                <p className="when-card__datetime">
                  Saturday, May 30, 2026 · 9:00 a.m.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <span className="footer-brand">Shiane Haidery Inc.</span>
            <span className="footer-muted">Kawthar Studios</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
