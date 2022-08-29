import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../Nav/Nav";

const Teaching = () => {
  const { pathname } = useLocation();

  if (pathname === "/Teaching") {
    document.title = "Teaching - Griffin Chure, PhD";
  }

  return (
    <>
      <Nav />
      <TeachingSection>
        <h1>Teaching and Mentoring</h1>
        <p>
          I taught an introductory class on machine learning during the COVID-19
          pandemic: The course covers the concept behind popular shallow
          learning algorithms.{" "}
          <a href="https://www.youtube.com/playlist?list=PLT6EohMcXE3SaiUEsU3LMZdbbVCOl3-WD">
            <span className="button">Video Library</span>
          </a>
          <a href="https://github.com/obifarin/machine-learning.ainotes">
            <span className="button">Computational Notebook</span>
          </a>
        </p>
        <div className="computational-tut">
          <div className="sub-header">
            <h2>
              As a graduate teaching assistant at the Department of
              Biochemistry, The University of Georgia (2016-2021)
            </h2>
            <ul>
              <li>
                I assisted professors in grading several undergraduate
                biochemistry classes.
              </li>
              <li>I taught principles of biology class in Fall 2020</li>
            </ul>
          </div>
          <div className="sub-header">
            <h2>
              As Graduate Research Assistant at the Department of Biochemistry,
              The University of Georgia
            </h2>
            <ul>
              <li>
                I trained at least ten undergraduate students as a graduate
                student in the Edison Lab
              </li>
              <ul>
                <li>2016 summer REU: Abigael Kosgei, Claflin University</li>
                <li>2017 summer REU: Gideon Adu, Claflin University</li>
                <li>2017 spring: Sung Alexander, UGA Biochemistry.</li>
                <li>2018 Spring & Fall: Jack Doll, UGA Engineering.</li>
                <li>2018 Fall: Jane Guo, UGA Biochemistry.</li>
                <li>2018 Spring & Fall: Oudhay Sohal, UGA Biochemistry.</li>
                <li>2018 Fall: Julia Roth, UGA Genetics and Biology.</li>
                <li>2018 Fall: Hailey Goldberg, UGA Biochemistry.</li>
                <li>2018 Fall: Taha Rahmatullah, UGA Biochemistry.</li>
                <li>2018 Fall: Sharon Maina, UGA Biochemistry.</li>
              </ul>
            </ul>
          </div>
          <div className="sub-header">
            <h2>
              As Graduate Teaching Assistant (Aug 2013 - May 2015) at the
              department of biology The Catholic University of America{" "}
            </h2>
            <ul>
              <li>
                I assisted the professor in teaching a first-year biology
                laboratory class: BIOL 105 and 106 – the mechanisms of life.
              </li>
              <li>
                The compendium of my work includes preparation for lab sections,
                teaching students, setting quiz questions, and grading lab
                reports.
              </li>
            </ul>
          </div>

          {/* <div className="sub-header">
            <p className="sub-heading">
              Basic DNA Sequence Analysis{" "}
              <a href="http://bi1.caltech.edu/code/t01_sequence_analysis.html">
                <span className="button">Tutorial Notebook</span>
              </a>
              <a href="http://rpdata.caltech.edu/courses/bi1_2017/data/mabuya_atlantica.zip">
                <span className="button">Data Set</span>
              </a>
            </p>
            <p>
              A tutorial on using DNA sequence to understand the biogeography of
              Skinks on Fernando de Naronha. This tutorial is written to given
              an introduction to basic programming skills with Python and
              provides introductory intuition on how DNA sequence can be used to
              identify relationships between species.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Euler-Forward Integration{" "}
              <a href="http://bi1.caltech.edu/code/t02_numerical_integration.html">
                <span className="button">Tutorial Notebook</span>
              </a>
            </p>
            <p>
              This tutorial was used to teach undergraduates how to integrate
              ordinary differential equations using the Euler-Forward method.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Stochastic Simulations{" "}
              <a href="http://bi1.caltech.edu/code/t03_stochastic_simulations.html">
                <span className="button">Tutorial Notebook</span>
              </a>
            </p>
            <p>
              A primer on writing stochastic simulations and using them to
              understand one of the most powerful forces of evolution - genetic
              drift.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Quantitative Image Processing{" "}
              <a href="http://bi1.caltech.edu/code/t04_quantitative_image_processing.html">
                <span className="button">Tutorial Notebook</span>
              </a>
              <a href="http://rpdata.caltech.edu/courses/bi1_2017/data/ecoli_images.zip">
                <span className="button">Data Set</span>
              </a>
            </p>
            <p>
              This tutorial covered the basics of quantitative image processing
              and led students through segmentation of single-celled bacteria to
              compute the intensity distribution of a YFP reporter gene.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Chemical Master Equations{" "}
              <a href="http://bi1.caltech.edu/code/t06_chemical_master_equation.html">
                <span className="button">Tutorial Notebook</span>
              </a>
            </p>
            <p>
              Chemical master equations are incredibly useful in understanding
              the “rates and weights” of biological processes. This tutorial
              teaches the student how to write them and explore their behavior
              computationally.
            </p>
          </div> */}
        </div>
        <div className="other-classes">
          <h2>Invited Talks</h2>
          <p>
            <i>
              Machine Learning-Enabled Renal Cell Carcinoma Status Prediction
              Using Multiplatform Urine-Based Metabolomics,
            </i>{" "}
            Metabolomics Association of North America (MANA) committee for
            Software and Data (SoDa) Exchange. February 2022. Talk{" "}
            <i>Data Analysis for Metabolic Phenotyping,</i> Guest Lecturer for
            CHEM 8823: Metabolomics graduate class at Georgia Institute of
            Technology. The class was taught by David Gaul and Facundo
            Fernandez. March 2022.
          </p>
          <div className="video-container">
            <iframe
              className="responsive-iframe"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/k3cMRdJt1VQ"
              title="Data Analysis in Metabolomics by Olatomiwa Bifarin: CHEM 8823 @ Georgia Tech."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          {/* <div className="sub-header">
            <p className="sub-heading">
              Human Impacts by the Numbers{" "}
              <a href="https://www.rpgroup.caltech.edu/aph150">
                <span className="button">2020</span>
              </a>
            </p>
            <p>
              A zoom-based course open to the public which gave a wide view of
              all the ways in which human action changes the face of the planet.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Evolution{" "}
              <a href="https://www.rpgroup.caltech.edu/bige105">
                <span className="button">2020</span>
              </a>
            </p>
            <p>
              A course for upper-level Caltech undergraduates which provides a
              quantitative and qualitative summary of biology’s greatest idea —
              evolution.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Physical Biology Bootcamp{" "}
              <a href="https://www.rpgroup.caltech.edu/be262/2019">
                <span className="button">2019</span>
              </a>
              <a href="https://www.rpgroup.caltech.edu/be262/2018">
                <span className="button">2018</span>
              </a>
              <a href="https://www.rpgroup.caltech.edu/be262/2017">
                <span className="button">2017</span>
              </a>
            </p>
            <p>
              An intensive week-long graduate course which teaches the utility
              of biological numeracy and its application from theory to
              experiment.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Bi1 - The Great Ideas of Biology{" "}
              <a href="http://bi1.caltech.edu/">
                <span className="button">2017</span>
              </a>
            </p>
            <p>
              A freshman biology course for non-biology majors which teaches the
              fundamental principles of modern biology with an emphasis on
              calculation and quantitative thinking.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Physical Biology of the Cell{" "}
              <a href="http://beaph161.caltech.edu/2018/">
                <span className="button">2018</span>
              </a>
              <a href="http://www.rpgroup.caltech.edu/gist_pboc_2017">
                <span className="button">2017</span>
              </a>
              <a href="http://www.rpgroup.caltech.edu/gist_pboc_2016">
                <span className="button">2016</span>
              </a>
              <a href="http://www.rpdata.caltech.edu/courses/CSHL_PBoC_2015">
                <span className="button">2015</span>
              </a>
            </p>
            <p>
              This courses takes a in-depth view at the investigation of
              biological phenomena using principles from physics. Typical topics
              of inquiry are dynamics of the cytoskeleton, back-of-the-envelope
              estimation, genetic regulation, cellular signaling, and evolution.
              This course is taught all over the world at universities such as
              Caltech, GIST, and Cold Spring Harbor Laboratory
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Intro. to Programming in the Biological Sciences*{" "}
              <a href="http://justinbois.github.io/bootcamp/2016">
                <span className="button">2016</span>
              </a>
            </p>
            <p>
              A week long course attended by undergraduates, graduate students,
              and post-docs which teaches the principles of programming and its
              application to real-life biological problems.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Data Analysis in the Biological Sciences{" "}
              <a href="http://bebi103.caltech.edu/2016">
                <span className="button">2016</span>
              </a>
              <a href="http://bebi103.caltech.edu/2015">
                <span className="button">2015</span>
              </a>
            </p>
            <p>
              This course exposes undergraduates, grad students, and post-docs
              to practical data analysis using Bayesian inferential methods such
              as parameter estimation, hypothesis testing, and regression. The
              homework assignments are almost completely open ended and often
              involve cutting-edge data from Caltech and beyond.
            </p>
          </div>
          <div className="sub-header">
            <p className="sub-heading">
              Bi1x - Exploration through Experimentation{" "}
              <a href="http://bi1x.caltech.edu/2015/">
                <span className="button">2015</span>
              </a>
              <a href="http://bi1x.caltech.edu/2014/">
                <span className="button">2014</span>
              </a>
            </p>
            <p>
              A course aimed at freshmen undergraduates which teaches the “great
              ideas of biology” through experimentation. Students perform a
              variety of experiments including single-cell microscopy,
              optogenetics, and DNA sequencing.
            </p> 
          </div>*/}
        </div>
        <Footer />
      </TeachingSection>
    </>
  );
};

const TeachingSection = styled.section`
  padding-top: 5rem;
  max-width: 55rem;
  margin: 0 auto;
  .sub-header .sub-heading {
    font-weight: 600;
  }
  span {
    margin-right: 0.5rem;
  }
  .computational-tut h2 {
    padding-top: 1.5rem;
  }
  .other-classes h2 {
    padding-top: 3rem;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    .sub-header span {
      margin-top: 0.5rem;
    }
    .video-container {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 56.25%;
      .responsive-iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default Teaching;
