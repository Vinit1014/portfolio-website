'use client';
import React from 'react';
import { projectsData } from '@/utils/Data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-wrap justify-center mt-2'>
      {projectsData.map((data, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2" // Responsive widths
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
  );
};

export default Projects;
