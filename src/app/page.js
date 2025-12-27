import Image from "next/image";
import HomeHero from "./Home/Hero/HomeHero";
import Header from "@/components/Header/Header";
import AboutMe from "./Home/AboutMe/AboutMe";
import AdvText from "./Home/AdvText/AdvText";
import Projects from "./Home/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Testimonials from "./Home/Testimonials/Testimonials";
import PageTransition from "@/pageTransition/pageTransition";

export default function Home() {
  return (
    <div>
      <main>
        <PageTransition>
          <Header theme="light"/>
          <HomeHero/>
          <AboutMe/>
          <AdvText/>
          <Projects/>
          <Testimonials/>
          <Footer/>
        </PageTransition>
      </main>
    </div>
  );
}

