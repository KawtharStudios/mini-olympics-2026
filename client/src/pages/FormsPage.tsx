import React from "react";
import { Link } from "react-router-dom";

export default function FormsPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand" aria-label="Mini Olympics">
          <span className="brand-badge" aria-hidden="true" />
          <span>Mini Olympics</span>
        </div>
        <Link to="/" className="link-back">
          Back to home
        </Link>
      </header>

      <main>
        <section className="forms">
          <div className="container">
            <h1 className="forms-title">Registration Form</h1>
            <p className="forms-lead">
              Placeholder page for your registration form. Wire up the real
              fields and submission when you're ready.
            </p>

            <div className="forms-card" role="region" aria-label="Form placeholder">
              <div className="placeholder-row" />
              <div className="placeholder-row" />
              <div className="placeholder-row placeholder-row--short" />
              <div className="placeholder-row placeholder-row--short" />
              <div className="placeholder-row" />

              <div className="forms-note">
                Tip: replace this placeholder block with a real form component
                later (React Hook Form, Formik, or plain React state).
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

