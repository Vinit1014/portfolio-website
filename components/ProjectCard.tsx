import React from 'react'
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div>
        <div
        className="flex flex-col sm:p-6 p-4 w-[340px] sm:w-[450px] h-full bg-zinc-900 sm:rounded-[15px] rounded-[12px] border-[1px] border-[#4c4c4cc5] hover:bg-white hover:bg-opacity-[0.15] hover:border-[#ffffff6e] duration-500 ease-in-out z-20 overflow-hidden hover:scale-105"
        onMouseEnter={() => setIsHovered({ ...isHovered, card: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, card: false })}
        style={{
          boxShadow: isHovered.card ? "0px 0px 20px 0px #ffffff6e" : "",
        }}
      >
        {/* Image of project */}
        <div className="flex">
          <Image
            src={projectProps.projectImage}
            alt="Picture of the author"
            width={400}
            height={400}
            className="sm:rounded-xl rounded-lg hover:scale-102 duration-500 ease-in-out"
          />
        </div>

        {/* Title of project , github link, link of site */}
        <div className="flex justify-between items-center mt-4">
          <div className=" bg-transparent">
            <Link
              href={projectProps.githubLink}
              className=" bg-transparent"
              target={"/"}
            >
              <FiGithub className="hover:scale-[1.2] text-white duration-500 ease-in-out sm:h-6 sm:w-6 h-4 w-4 hover:text-[#0CCE6B]" />
            </Link>
          </div>

          <div className="sm:text-[18px] text-[15px] font-bold">
            {projectProps.projectName}
          </div>

          <div>
            <Link href={projectProps.projectLink} target="/">
              <FiExternalLink className="hover:scale-[1.2] duration-500 ease-in-out sm:h-6 sm:w-6 h-4 w-4 text-white hover:text-[#0CCE6B]" />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard