import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AIIntro from "@/components/AIIntro/AIIntro";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import ExperienceTimeline from "@/components/ExperienceTimeline/ExperienceTimeline";
import SkillVisualizations from "@/components/SkillVisualizations/SkillVisualizations";
import Projects from "@/components/Projects/Projects";
import Certificates from "@/components/Certificates/Certificates";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import InteractiveShell from "@/components/InteractiveShell/InteractiveShell";
import DynamicWidgets from "@/components/DynamicWidgets/DynamicWidgets";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <AIIntro /> */}
      <Services />
      <Experience />
      {/* <ExperienceTimeline /> */}
      {/* <SkillVisualizations /> */}
      <Projects />
      <DynamicWidgets />
      
      <Blogs />     
       <InteractiveShell />
<Certificates />
      <Contact />
      {/* <Footer /> */}
          </>
  );
}