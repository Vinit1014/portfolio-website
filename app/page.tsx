import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center text-neutral-400 p-4 sm:p-8 md:p-16 lg:p-20 max-w-screen-xl mx-auto">

      <Hero/>
      <Projects/>
      <Tech/>
      <Contact/>
      {/* <div className="square-circle-5"></div> Loading component*/} 
    </main>
  );
}
