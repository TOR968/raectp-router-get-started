import React from "react";

const AboutPage = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>

      <main>
        <section>
          <h2>Our Story</h2>
          <p>
            This is where we provide a compelling narrative about the history
            and background of our company.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Describe our mission statement and the core values that drive our
            organization.
          </p>
        </section>
      </main>
      <hr />
      <footer>
        <p>&copy; 2023 Rindull. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;