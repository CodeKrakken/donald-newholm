import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return <>
    <Header />
    <Hero />
    <Projects />
    <Experience />
    <About />
    <Skills />
  </>;
}
