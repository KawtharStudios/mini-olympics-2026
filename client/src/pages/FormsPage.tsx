import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MINI_OLYMPICS_FORM_URL,
  PING_PONG_FOOSBALL_FORM_URL,
} from "../formUrls";

const REDIRECT_BY_SLUG: Record<string, string> = {
  "mini-olympics": MINI_OLYMPICS_FORM_URL,
  "ping-pong-foosball": PING_PONG_FOOSBALL_FORM_URL,
};

export default function FormsPage() {
  const { eventSlug } = useParams<{ eventSlug: string }>();
  const targetUrl =
    eventSlug && REDIRECT_BY_SLUG[eventSlug]
      ? REDIRECT_BY_SLUG[eventSlug]
      : null;

  useEffect(() => {
    if (targetUrl) {
      window.location.replace(targetUrl);
    }
  }, [targetUrl]);

  if (targetUrl) {
    return (
      <div className="page">
        <header className="header">
          <Link to="/" className="brand brand-link">
            <span className="brand-badge" aria-hidden="true" />
            <span>Shiane Haidery Events</span>
          </Link>
          <Link to="/" className="link-back">
            Back to home
          </Link>
        </header>
        <main className="forms">
          <div className="container">
            <p className="forms-lead" style={{ marginTop: "2rem" }}>
              Redirecting to Google Forms…
            </p>
            <p className="forms-note">
              If you are not redirected,{" "}
              <a href={targetUrl}>open the registration form</a>.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="header">
        <Link to="/" className="brand brand-link">
          <span className="brand-badge" aria-hidden="true" />
          <span>Shiane Haidery Events</span>
        </Link>
        <Link to="/" className="link-back">
          Back to home
        </Link>
      </header>
      <main className="forms">
        <div className="container">
          <h1 className="forms-title">Form not found</h1>
          <p className="forms-lead">
            Choose an event from the home page and use its Register button.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to events
          </Link>
        </div>
      </main>
    </div>
  );
}
