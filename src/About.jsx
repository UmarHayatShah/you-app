import React from "react";

const About = () => {
  return (
    <div className="about-container      about-container-expand-lg  about-container-dark bg-primry">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>Hamare Baare Mein (About Us)</h1>
        <p>Hum behtareen digital tajurba aur sahuliyat faraham karne ke liye koshishon mein masroof hain.</p>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-content">
        <div className="about-card">
          <h2>Hamara Maksad (Mission)</h2>
          <p>
            Humara maksad apne users ko aisi high-quality services aur products dena hai jo unki rozmarra ki zindagi ko aasan aur behtar bana sakein. Hum innovation aur trust par yaqeen rakhte hain.
          </p>
        </div>

        <div className="about-card">
          <h2>Hamara Khwab (Vision)</h2>
          <p>
            Hum aane wale waqt mein technology ki duniya mein ek ahem mukam hasil karna chahte hain, jahan har shakhs hamari banayi hui sahuliyat se faida utha sake.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Hamari Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-img">👤</div>
            <h3>Ali Khan</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-img">👤</div>
          <h3>Ayesha Ahmed</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <div className="member-img">👤</div>
          <h3>Zain Malik</h3>
          <p>UI/UX Designer</p>
        </div>
      </section>
    </div>
  );
};

export default About;