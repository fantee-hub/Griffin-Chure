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
        <h1>Teaching</h1>
        <p>
          Teaching has played an integral role in my development as a scientist.
          I am interested in teaching interdisciplinary methods to approach
          biological questions across all scales drawing heavily from physics
          and mathematics as well as from the computational sciences.
        </p>
        <div className="computational-tut">
          <h2>Computational tutorials for Bi1 - The Great Ideas of Biology</h2>
          <div className="sub-header">
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
              the ???rates and weights??? of biological processes. This tutorial
              teaches the student how to write them and explore their behavior
              computationally.
            </p>
          </div>
        </div>
        <div className="other-classes">
          <h2>Other Classes At Caltech & Beyond</h2>
          <p>
            Below are links to the various courses I have had the privilege to
            TA.
          </p>

          <div className="sub-header">
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
              quantitative and qualitative summary of biology???s greatest idea ???
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
              A course aimed at freshmen undergraduates which teaches the ???great
              ideas of biology??? through experimentation. Students perform a
              variety of experiments including single-cell microscopy,
              optogenetics, and DNA sequencing.
            </p>
          </div>
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
  .sub-header span {
    margin-right: 0.5rem;
  }
  .computational-tut h2 {
    padding-top: 3rem;
  }
  .other-classes h2 {
    padding-top: 3rem;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    .sub-header span {
      margin-top: 0.5rem;
    }
  }
`;
export default Teaching;
