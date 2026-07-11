import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero";
import profile from "@/data/profile";
import About from "@/components/About";
import Projects from "@/components/Projects";
import projects from "@/data/projects";
import Skills from "@/components/Skills";
import skills from "@/data/skills";

export default function Home() {
  return (
    <>
      <Navbar
        name="Sharon Xavier"
        role="Future Full Stack Developer"
        location="India"
      />

      <Hero
        name={profile.name}
        role={profile.role}
        description={profile.about}
      />

      <About about={profile.about} />
      <Skills skills={skills} />
      <Projects projects={projects} />

    </>
  );
}