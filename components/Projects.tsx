'use client';
import React from 'react';
import { projectsData } from '@/utils/Data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div>
      <h1 className='text-2xl md:text-5xl font-bold text-slate-200 text-center'>Projects</h1>
      {/* <hr className='border-neutral-400 w-full'></hr> */}
      <div className='flex flex-wrap justify-center mt-2'>
        {projectsData.map((data, index) => (
          <div
          key={index}
            className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-4" // Responsive widths
          >
            <ProjectCard
              pId={data.pId + 1}
              projectName={data.projectName}
              githubLink={data.githubLink}
              projectLink={data.projectLink}
              projectImage={data.projectImage}
              techStack={data.techStack}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
