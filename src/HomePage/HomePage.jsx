import React from "react";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the Rindull</h1>
      </header>

      <main>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section>
          <h2>Team</h2>
          <ul>
            <li>Member 1</li>
            <li>Member 2</li>
            <li>Member 3</li>
          </ul>
        </section>
      </main>
      <hr />
      <footer>
        <p>&copy; 2023 Rindull. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;