import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
/** image */
import profile from "../images/bifarin_phd.jpeg";
/** image */
/**Footer */
import Footer from "../footer/Footer";
/** Footer */

const About = () => {
  const { pathname } = useLocation();

  if (pathname === "/About") {
    document.title = "About - Griffin Chure, PhD";
  }

  return (
    <>
      <Nav />
      <AboutSection>
        <div className="about-header">
          <h1>About</h1>
        </div>
        <section className="profile-section">
          <img src={profile} alt="profile" />
        </section>
        <div className="about-content">
          <p>
            I am a post-doctoral fellow working in the Fernandez lab at the
            School of Chemistry and Biochemistry at the Georgia Institute of
            Technology.{" "}
            {/* <span>
              <a href="https://cremerlab.com">Jonas Cremer</a>
            </span>{" "}
            at{" "}
            <span>
              <a href="https://stanford.edu">Stanford University</a>
            </span>{" "} */}
            {/* in Stanford, CA. I love anything microbial, quantitative, or wrapped
            in tortillas. I firmly believe that the future of biology relies on
            an intuition for the physics that governs it. I believe this is
            especially true for evolutionary biology where insights from
            statistical mechanics will help shed light on the fundamental
            evolutionary processes that sculpt genomes. */}
          </p>
          <p>
            My research work is at the interface of biochemistry, cancer
            metabolism, and applied machine learning.
          </p>
          <p>
            Postdoctoral research: discovery of metabolic biomarkers for ovarian
            cancer.
          </p>
          <p>
            I carried out various projects during my Ph.D program, some were
            successful, while some were not. Some of the projects include
          </p>
          <ol>
            <li>
              Detection and staging of kidney cancer using urine metabolomics
              and machine learning
            </li>
            <li>Insilico toxicity prediction with deep learning</li>
            <li>Computer vision for microscopy image analysis and,</li>
            <li>Explainable AI for metabolomics studies</li>
          </ol>
          <p>
            My previous research experience includes the study of DNA damage
            response using yeast genomics and metabolic investigations of the
            role of glycosyltransferases in Caenorhabditis elegans.
          </p>
          <p>
            At my leisure, I write transdisciplinary essays at Bifarin V
            Substack which can be found at this URL:{" "}
            <span>
              <a href="bifarinthefifth.substack.com">
                bifarinthefifth.substack.com.
              </a>
            </span>{" "}
            In addition, I have written computational essays on data science and
            AI at{" "}
            <span>
              <a href="bifarinthefifth.com/ai">bifarinthefifth.com/ai</a>
            </span>
          </p>
        </div>
        <Footer />
      </AboutSection>
    </>
  );
};

const AboutSection = styled.section`
  max-width: 55rem;
  margin: 0 auto;
  padding-top: 5rem;
  .profile-section {
    padding-top: 3rem;
    text-align: center;
  }
  .profile-section img {
    max-width: 25rem;
    max-height: 30rem;
    object-fit: cover;
    border-radius: 0.8rem;
    border: none;
  }
  .about-content {
    padding-top: 3rem;
  }
  .about-content span {
    position: relative;
  }
  .about-content span a {
    text-decoration: none;
    color: #4b4b4b;
    font-weight: 600;
    text-decoration-color: #4f76ba;
    text-decoration-style: solid;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default About;
