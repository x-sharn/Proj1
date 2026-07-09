import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar
        name="Sharon Xavier"
        role="Future Full Stack Developer"
        company="India"
      />

      <Hero
        name="Sharon Xavier"
        role="Future Full Stack Developer"
        description="I'm learning Next.js step by step and building projects to become a professional Full Stack Developer."
      />
    </>
  );
}