import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";

/** Images */
import dko from "../images/Copy of DKO-OC.png";
import rcc2 from "../images/RCC_Prediction_Graphical_Abstract.png";
import shap from "../images/shap-2.png";
import rcc from "../images/RCC_Staging_Graphical_Abstract.png";
import journal from "../images/g3journal.png";
/** Images */

const Research = () => {
  const { pathname } = useLocation();

  if (pathname === "/Research") {
    document.title = "Research - Griffin Chure, PhD";
  }

  return (
    <>
      <Nav />
      <ResearchSection>
        <div className="research-header">
          <h1>Research</h1>
          <p>
            Here are some details of some of my previous and current research
            projects.
          </p>
        </div>
        <div className="research-content">
          <div className="postdoctoral main-header">
            <h1>Postdoctoral Research</h1>
            <h3 className="sub-header">
              Machine Learning Reveals Lipidome Dynamics in a Mouse Model of
              Ovarian Cancer (In writing)
            </h3>

            <div className="postdoctoral-content">
              <p>
                <span>Teaser:</span>Time-resolved lipidomics in an ovarian
                cancer model are studied through survival analysis and machine
                learning.
              </p>
              <p>
                <span>Abstract:</span>Ovarian cancer (OC) is one of the
                deadliest cancers affecting the female reproductive system. It
                presents little or no symptoms at the early stages, and
                typically unspecific symptoms at later stages. Of the OC
                subtypes, high-grade serous carcinoma (HGSC) is responsible for
                most OC deaths. However, very little is known about the
                metabolic course of this disease. In this longitudinal study, we
                investigated the temporal course of lipidome changes in a
                Dicer-Pten Double-Knockout (DKO) HGSC mouse model using machine
                and statistical learning approaches. Early progression of HGSC
                was marked by increased levels of phosphatidylcholines and
                phosphatidylethanolamines. In contrast, later stages were marked
                by more diverse lipids alterations, including fatty acids and
                their derivatives, triglycerides, ceramides, hexosylceramides,
                sphingomyelins, lysophosphatidylcholines, and
                phosphatidylinositols. These alterations provided evidence of
                perturbations in cell membrane stability, proliferation, and
                survival and candidates for early-stage and prognostic markers
                in humans.
              </p>
              <div className="img-container">
                <img src={dko} alt="growthLimit" />
              </div>
            </div>
          </div>

          <div className="graduate-research main-header">
            <h1>Graduate Research</h1>
            <h3 className="sub-header">
              Interpretable Machine Learning with Tree-based Shapley Additive
              Explanations: Application to Metabolomics Datasets for Binary
              Classification (In writing)
            </h3>

            <div className="grad-research-content">
              <p>
                Machine learning (ML) models are used in clinical metabolomics
                studies most notably for biomarker discoveries, to identify
                metabolites that discriminate between a case and control group.
                To improve understanding of the underlying biomedical problem
                and to bolster confidence in these discoveries, model
                interpretability is germane. In metabolomics, partial least
                square discriminant analysis (PLS-DA) and its variants are
                widely used, partly due to the model’s interpretability with the
                Variable Influence in Projection (VIP) scores, a global
                interpretable method. Herein, Tree-based Shapley Additive
                explanations (SHAP), an interpretable ML method grounded in game
                theory, was used to explain ML models with local explanations
                properties. In this study ML experiments (binary classification)
                was conducted for three published metabolomics datasets using
                PLS-DA, random forests, gradient boosting, and extreme gradient
                boosting (XGBoost). Using one of the datasets, PLS-DA model was
                explained using VIP scores, while a tree-based model was
                interpreted using Tree SHAP. The results show that SHAP has a
                more explanation depth than PLS-DA’s VIP, making it a powerful
                method for rationalizing machine learning predictions from
                metabolomics studies.
              </p>
              <div className="img-container">
                <img src={shap} alt="copy of shap" />
              </div>
            </div>
          </div>
          <div className="shifts main-header">
            <h2>
              Urine-Based Metabolomics and Machine Learning Reveals Metabolites
              Associated with Renal Cell Carcinoma Progression
            </h2>
            <a href="https://www.mdpi.com/2072-6694/13/24/6253">
              <span className="button">Publisher Website</span>
            </a>

            <a href="https://github.com/artedison/RCC-staging">
              <span className="button">GitHub Repository</span>
            </a>

            <div className="shifts-content">
              <p>
                Urine metabolomics profiling has potential for non-invasive RCC
                staging, in addition to providing metabolic insights into
                disease progression. In this study, we utilized liquid
                chromatography-mass spectrometry (LC-MS), nuclear magnetic
                resonance (NMR), and machine learning (ML) for the discovery of
                urine metabolites associated with RCC progression. Two machine
                learning questions were posed in the study: Binary
                classification into early RCC (stage I and II) and advanced RCC
                stages (stage III and IV), and RCC tumor size prediction through
                regression analysis. A total of 82 RCC patients with tumor size
                and metabolomic measurements were used for the regression task,
                and 70 RCC patients with complete tumor-nodes-metastasis (TNM)
                staging information were used for the classification tasks under
                ten-fold cross-validation conditions. A voting ensemble
                regression model consisting of elastic net, ridge, and support
                vector regressor predicted RCC tumor size with a R^2 value of
                0.58. A voting classifier model consisting of random forest,
                support vector machines, logistic regression, and adaptive
                boosting yielded an AUC of 0.96 and an accuracy of 87%. Some
                identified metabolites associated with renal cell carcinoma
                progression included 4-guanidinobutanoic acid,
                7-aminomethyl-7-carbaguanine, 3-hydroxyanthranilic acid,
                lysyl-glycine, glycine, citrate, and pyruvate. Overall, we
                identified a urine metabolic phenotype associated with renal
                cell carcinoma stage, exploring the promise of a urine-based
                metabolomic assay for staging this disease.
              </p>
              <div className="img-container">
                <img src={rcc} alt="mutation" />
              </div>
            </div>
          </div>
          <div className="shifts main-header">
            <h2>
              Machine Learning-enabled Renal Cell Carcinoma Status Prediction
              Using Multi-Platform Urine-based Metabolomics
            </h2>
            <a href="https://pubs.acs.org/doi/10.1021/acs.jproteome.1c00213">
              <span className="button">Publisher Website</span>
            </a>

            <a href="https://github.com/artedison/RCC_MLprediction">
              <span className="button">GitHub Repository</span>
            </a>

            <div className="shifts-content">
              <p>
                Renal cell carcinoma (RCC) is diagnosed through expensive
                cross-sectional imaging, frequently followed by renal mass
                biopsy, which is not only invasive but also prone to sampling
                errors. Hence, there is a critical need for a noninvasive
                diagnostic assay. RCC exhibits altered cellular metabolism
                combined with the close proximity of the tumor(s) to the urine
                in the kidney, suggesting that urine metabolomic profiling is an
                excellent choice for assay development. Here, we acquired liquid
                chromatography–mass spectrometry (LC–MS) and nuclear magnetic
                resonance (NMR) data followed by the use of machine learning
                (ML) to discover candidate metabolomic panels for RCC. The study
                cohort consisted of 105 RCC patients and 179 controls separated
                into two subcohorts: the model cohort and the test cohort.
                Univariate, wrapper, and embedded methods were used to select
                discriminatory features using the model cohort. Three ML
                techniques, each with different induction biases, were used for
                training and hyperparameter tuning. Assessment of RCC status
                prediction was evaluated using the test cohort with the selected
                biomarkers and the optimally tuned ML algorithms. A
                seven-metabolite panel predicted RCC in the test cohort with 88%
                accuracy, 94% sensitivity, 85% specificity, and 0.98 AUC.
              </p>
              <div className="img-container">
                <img src={rcc2} alt="mutation" />
              </div>
            </div>
          </div>
          <div className="shifts main-header">
            <h2>
              A Genome-Wide Screen with Nicotinamide to Identify
              Sirtuin-Dependent Pathways in Saccharomyces cerevisiae.
            </h2>
            <a href="https://www.g3journal.org/content/6/2/485.long">
              <span className="button">Publisher Website</span>
            </a>

            <a href="https://www.g3journal.org/content/ggg/6/2/485.full.pdf">
              <span className="button">PDF</span>
            </a>

            <div className="shifts-content">
              <p>
                Sirtuins are evolutionarily conserved NAD-dependent deacetylases
                that catalyze the cleavage of NAD+ into nicotinamide (NAM),
                which can act as a pan-sirtuin inhibitor in unicellular and
                multicellular organisms. Sirtuins regulate processes such as
                transcription, DNA damage repair, chromosome segrega- tion, and
                longevity extension in yeast and metazoans. The founding member
                of the evolutionarily conserved sirtuin family, SIR2, was first
                identified in budding yeast. Subsequent studies led to the
                identification of four yeast SIR2 homologs HST1, HST2, HST3, and
                HST4. Understanding the downstream physiological conse- quences
                of inhibiting sirtuins can be challenging since most studies
                focus on single or double deletions of sirtuins, and mating
                defects in SIR2 deletions hamper genome-wide screens. This
                represents an important gap in our knowledge of how sirtuins
                function in highly complex biological processes such as aging,
                me- tabolism, and chromosome segregation. In this report, we
                used a genome-wide screen to explore sirtuin- dependent
                processes in Saccharomyces cerevisiae by identifying deletion
                mutants that are sensitive to NAM. We identified 55 genes in
                total, 36 of which have not been previously reported to be
                dependent on sirtuins. We find that genome stability pathways
                are particularly vulnerable to loss of sirtuin activity. Here,
                we provide evidence that defects in sister chromatid cohesion
                renders cells sensitive to growth in the presence of NAM. The
                results of our screen provide a broad view of the biological
                pathways sensitive to inhibition of sirtuins, and advance our
                understanding of the function of sirtuins and NAD+ biology.
              </p>
              <div className="img-container">
                <img src={journal} alt="mutation" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </ResearchSection>
    </>
  );
};

const ResearchSection = styled.section`
  a {
    color: #4b4b4b;
    font-weight: 600;
    text-decoration-color: #4f76ba;
    text-decoration-style: solid;
  }
  padding-top: 5rem;
  max-width: 55rem;
  margin: 0 auto;
  .research-content .main-header {
    padding-top: 3rem;
    span {
      font-weight: 600;
    }
  }
  .research-content .sub-header {
    padding: 1rem 0;
    font-style: italic;
  }
  .research-content img {
    max-width: 35rem;
    max-height: 35rem;
    margin: 0 auto;
    object-fit: contain;
    padding: 1.5rem 0;
  }
  .img-container {
    text-align: center;
  }
  .research-content span {
    margin-right: 0.5rem;
  }
  .shifts p {
    padding: 1rem 0;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
    .research-content span {
      margin-top: 0.5rem;
    }
  }
`;
export default Research;
