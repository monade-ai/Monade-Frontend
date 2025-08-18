import React from "react";
import Image from "next/image";
import "../about/about.css";

export default function TeamPage() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Meet Our Team</h1>
        <p>
          The driving force behind Monade.ai is our talented and passionate team of founders, each bringing unique expertise to create world-class AI solutions.
        </p>
      </section>

      <section className="about-team">
        <div className="team-grid">
          <div className="team-member">
            <Image src="/team/Narayan%20Photo.jpg" alt="Narayan Thakur" width={200} height={200} />
            <p>Narayan Thakur</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/shashwat-yashasvi-4082562a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              <a href="https://x.com/shashwatya71079" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="team-member">
            <Image src="/team/Amol%20Photo.jpg" alt="Amol Soans" width={200} height={200} />
            <p>Amol Soans</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/shashwat-yashasvi-4082562a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              <a href="https://x.com/shashwatya71079" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="team-member">
            <Image src="/team/Screenshot%202025-08-18%20141219.png" alt="Aaditya Rangarajan" width={200} height={200} />
            <p>Aaditya Rangarajan</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/shashwat-yashasvi-4082562a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              <a href="https://x.com/shashwatya71079" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="team-member">
            <Image src="/team/shashwat.jpg" alt="Shashwat Yashasvi" width={200} height={200} />
            <p>Shashwat Yashasvi</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
