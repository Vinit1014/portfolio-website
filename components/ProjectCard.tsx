'use client';
import { Github, Link } from "lucide-react";
import Image from "next/image";
import {motion} from "framer-motion";

interface TechStackItem {
  name: string;
  backgroundColour: string;
  borderColour: string;
  borderColourHover: string;
  icon: string;
}

interface ProjectCardProps {
  pId: number;
  projectName: string;
  githubLink: string;
  projectLink: string;
  projectImage: string;
  techStack: TechStackItem[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  pId,
  projectName,
  githubLink,
  projectLink,
  projectImage,
  techStack,
}) => {
  
  return (
    <motion.div className="bg-neutral-900 text-neutral-400 rounded-lg shadow-lg p-6 max-w-sm flex flex-col h-full border-2 border-transparent"
    whileHover={{
      scale:1.05,
      borderColor: "#4A5568",
    }}
    transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-48 mb-4">
        <Image
          src={projectImage}
          alt='Project Image'
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold text-neutral-200">{projectName}</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-neutral-800 text-neutral-400 py-1 px-2 rounded text-sm"
          >
            {tech.name}
          </span>
        ))}
      </div>
      <div className="flex justify-between mt-auto">
        {projectLink ? (
          <a href={projectLink} target="_blank" className="hover:underline flex items-center">
            <span><Link /></span>
          </a>
        ) : (
          <span className="text-neutral-500"></span>
        )}
        <a href={githubLink} target="_blank">
          <span><Github/></span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
