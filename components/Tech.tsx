
'use client';
import React from 'react';
import TechComp from './TechComp';
import { useSectionInView } from '@/lib/hooks';

const Tech = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      ref={ref}
      id="skills"
      className="flex justify-center items-center h-max flex-col text-white md:mb-60 mb-48"
    >
      <div className="mt-10">
        <h2 className="md:text-5xl font-bold text-3xl capitalize mb-5 text-center">
          My TechStack
        </h2>
        <TechComp />
      </div>
    </section>
  );
};

export default Tech;
