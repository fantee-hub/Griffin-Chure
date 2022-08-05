import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Cv = () => {
  const { pathname } = useLocation();

  if (pathname === "/CV") {
    document.title = "Curriculum Vitae - Griffin Chure, PhD";
  }

  return (
    <>
      <Nav />
      <CvSection>
        <div className="cv-header">
          <h1>Curriculum Vitae</h1>
        </div>
        <div className="cv-section">
          <a href="https://gchure.github.io/assets/GriffinChure_CV.pdf">
            <div className="button">Download as pdf</div>
          </a>

          <section className="education">
            <h1>Education</h1>
            <p>
              Ph.D. in Biochemistry and Molecular Biology, University of
              Georgia, 2021
            </p>
            <ul>
              <li>Advisor: Arthur S. Edison PhD</li>
              <li>
                Thesis: Metabolic Phenotyping Meets Machine Learning: Detecting
                Renal Cell Carcinoma in Urine
              </li>
            </ul>
            <p>
              M.Sc in Biotechnology, The Catholic University of America, 2015
            </p>
            <ul>
              <li>Advisor: John S. Choy PhD</li>
              <li>
                Project: Investigating the integration of metabolic signals with
                DNA damage response (DDR) in Saccharomyces cerevisiae
              </li>
            </ul>
            <p>
              B.Sc in Microbiology, Obafemi Awolowo University (Nigeria), 2012
            </p>
            <ul>
              <li>Advisor: Olusuyi Odeyemi PhD, OFR</li>
              <li>
                Thesis: Microbiological examination of air in the neonatal ward
                of a teaching hospital in Nigeria
              </li>
            </ul>
          </section>
          <section className="publications">
            <h1>Publications</h1>
            <p>
              <strong>☭</strong> Indicates equal contribution
            </p>
          </section>
          <section className="forthcoming">
            <h1>Forthcoming Publications</h1>
            <ol>
              <li>
                Machine Learning Reveals Lipidome Dynamics in a Mouse Model of
                Ovarian Cancer. Bifarin et al (In Writing)
              </li>
              <li>
                Olatomiwa O. Bifarin. Interpretable machine learning with
                tree-based Shapley additive explanations: application to
                metabolomics datasets for binary classification. (In Revision)
              </li>
            </ol>
          </section>
          <section className="peer-review">
            <h1>Selected Peer-reviewed Publications</h1>
            <ol>
              <li>
                Olatomiwa O. Bifarin, David A. Gaul, Samyukta Sah, Rebecca S.
                Arnold, Kenneth Ogan, Viraj A Master, John A. Petros, Facundo M.
                Fernández, and Arthur S. Edison. Urine-Based Metabolomics and
                Machine Learning Reveals Metabolites Associated with Renal Cell
                Carcinoma Progression. Cancers 2021, 13, 6253{" "}
                <a href="https://www.mdpi.com/2072-6694/13/24/6253">
                  <span className="button">Publisher Website</span>
                </a>
                <a href="https://github.com/artedison/RCC-staging">
                  <span className="button">GitHub Repository</span>
                </a>
              </li>
              <li>
                Olatomiwa O. Bifarin‡, David A. Gaul‡, Samyukta Sah, Rebecca S.
                Arnold, Kenneth Ogan, Viraj A. Master, David L. Roberts, Sharon
                H. Bergquist, John A. Petros, Facundo M. Fernández, Arthur S.
                Edison. Machine Learning-enabled Renal Cell Carcinoma Status
                Prediction Using Multi-Platform Urine-based Metabolomics.
                <i> J. Proteome Res.</i> 2021, 20, 7, 3629–3641{" "}
                <a href="https://pubs.acs.org/doi/10.1021/acs.jproteome.1c00213">
                  <span className="button">Publisher Website</span>
                </a>
                <a href="https://rccbiomarkers.herokuapp.com/">
                  <span className="button">Web App</span>
                </a>
                <a href="https://github.com/artedison/RCC_MLprediction">
                  <span className="button">Github Repository</span>
                </a>
              </li>
              <li>
                John S. Choy, Bayan Qadri, Leah Henry, Kunal Shroff, Olatomiwa
                Bifarin, and Munira A. Basrai. (2016) A Genome-Wide Screen with
                Nicotinamide to Identify Sirtuin-Dependent Pathways in
                Saccharomyces cerevisiae. G3 (Bethesda)., 6(2): 485–494.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26646153/">
                  <span className="button">Publisher Website</span>
                </a>
              </li>
            </ol>
          </section>
          <section className="doctoral">
            <h1>Doctoral Thesis</h1>
            <ol>
              <li>
                Metabolic Phenotyping Meets Machine Learning: Detecting Renal
                Cell Carcinoma in Urine.{" "}
                <a href="https://esploro.libs.uga.edu/esploro/outputs/doctoral/METABOLIC-PHENOTYPING-MEETS-MACHINE-LEARNING-DETECTING/9949391157902959">
                  <span className="button">Abstract</span>
                </a>
                <Link to="/phd">
                  <span className="button">Website Version</span>
                </Link>
              </li>
            </ol>
          </section>
        </div>
        <Footer />
      </CvSection>
    </>
  );
};

const CvSection = styled.section`
  max-width: 55rem;
  margin: 0 auto;
  padding-top: 5rem;
  .cv-header {
    padding-bottom: 1rem;
  }
  .education {
    padding: 1rem 0;
  }
  .forthcoming,
  .peer-review,
  .doctoral {
    padding: 1.5rem 0;
  }

  .forthcoming span {
    font-size: 0.9rem;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  .peer-review span {
    font-size: 0.9rem;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  .doctoral span {
    font-size: 0.9rem;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default Cv;
