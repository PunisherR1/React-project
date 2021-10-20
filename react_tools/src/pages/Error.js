import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    /* Displays error page if user navigates to non-existent page */
    <section className="error-page section">
      <div className="error-container">
        <h1 className="error-paragraph">oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
}
