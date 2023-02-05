import React from "react";
import Jumbotron from "./jumbotron/Jumbotron";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
// import s from './main.module.css'

export default function Main() {
  return (
    <main>
      <Jumbotron name="Michael Bridgeman" title="Front-end Web Developer" />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
