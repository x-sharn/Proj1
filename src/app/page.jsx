import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero";
import profile from "@/data/profile";
import About from "@/components/About";

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

      <About
        about={profile.about}
      />
    </>
  );
}