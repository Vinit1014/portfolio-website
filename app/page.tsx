import Image from "next/image";
import awsLogo from "@/public/techlogos/aws.png";
import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="flex flex-col items-center text-neutral-400 p-20">
      <h1 className="">Heelo</h1>
      <Image
        src={awsLogo}
        alt="Img"
      />
      <Projects/>
      {/* <div className="square-circle-5"></div> */}
    </main>
  );
}
