import React from "react";

import sureshImg from "../assets/images/Suresh.jpeg";
import rekhaImg from "../assets/images/Rekha.jpg";
import abhilashImg from "../assets/images/Abhilash.jpeg";
import santhoshImg from "../assets/images/Santhosh.jpeg";

const leaders = [
  {
    name: "Sureshkumar M R",
    role: "Managing Partner",
    image: sureshImg,
    description:
      "Sureshkumar M R leads the strategic vision and diversified growth of Multimax Corporation. He possesses deep expertise in the Mines & Minerals sector with extensive knowledge of mining operations, statutory compliance, and regulatory approvals. He has exceptional capability in navigating government regulations, securing legal clearances, and ensuring complete statutory compliance for mining operations. In addition to mining, he has significant expertise in the Real Estate sector, enabling him to identify business opportunities and drive strategic expansion. Recognized for his integrity, transparency, and innovative leadership, he has established Multimax Corporation as a trusted partner for long-term industrial collaborations and high-value business partnerships.",
  },

  {
    name: "Rekha N. Menon",
    role: "Founder & Partner",
    image: rekhaImg,
    description:
      "Rekha N. Menon is the founder of Multimax Corporation, Arun Associates, and Managing Partner of Max Engineering Consultancy. With more than 30 years of professional experience, she is a self-made entrepreneur, certified startup consultant, and business mentor specializing in finance, accounting, business development, and organizational growth. She is widely recognized for delivering quality-driven business solutions while maintaining innovation, professionalism, and customer satisfaction.",
  },

  {
    name: "Abhilash Raveendran",
    role: "Partner",
    image: abhilashImg,
    description:
      "Abhilash Raveendran oversees Multimax Corporation's sales strategy, client relationship management, and international trade operations. With more than 25 years of experience across banking and insurance sectors, he brings extensive expertise in global commerce, export-import documentation, and regulatory compliance. His experience enables Multimax Corporation to streamline domestic and international trade, minimize operational risks, and expand into global markets.",
  },

  {
    name: "Santosh",
    role: "Partner",
    image: santhoshImg,
    description:
      "Santosh is responsible for Multimax Corporation's operational planning, financial strategy, quality management, and logistics. Since the company's inception, he has played a vital role in financial planning, budgeting, and business costing while ensuring operational excellence. With over ten years of expertise in quality control, he oversees quality assurance, transportation, logistics, and supply chain efficiency, ensuring that every product meets high industry standards.",
  },
];

function Leadership() {
  return (
    <section className="leadership-section" id="leadership">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-tag">OUR LEADERSHIP</span>

          <h2>
            The People Behind
            <span> Multimax Corporation</span>
          </h2>

          <p>
            Our leadership team brings together extensive experience in mining,
            industrial trading, finance, logistics, compliance, and business
            development.
          </p>
        </div>

        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>

              <div className="leader-image">
                <img
                  src={leader.image}
                  alt={leader.name}
                />
              </div>

              <div className="leader-content">
                <h3>{leader.name}</h3>

                <h4>{leader.role}</h4>

                <p>{leader.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Leadership;