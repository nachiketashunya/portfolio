import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import styles from './projects.module.css';

const projects = [
  {
    name: 'Rocetta',
    phase: 'Building',
    stack: ['python', 'opencv'],
    description: 'Simplifying cloud complexity of existing infra platforms like AWS and GCP.',
    image: '/images/rocetta.png'
  },
  {
    name: 'Lyrical',
    phase: 'Passive',
    stack: ['python', 'opencv'],
    description: 'AI-powered lyrics matching with human level accuracy and sub-second latency.',
    image: '/images/lyrical.png'
  },
  {
    name: 'Lyrical',
    phase: 'Passive',
    stack: ['python', 'opencv'],
    description: 'AI-powered lyrics matching with human level accuracy and sub-second latency.',
    image: '/images/lyrical.png'
  },
  {
    name: 'Lyrical',
    phase: 'Passive',
    stack: ['python', 'opencv'],
    description: 'AI-powered lyrics matching with human level accuracy and sub-second latency.',
    image: '/images/lyrical.png'
  },
  {
    name: 'Lyrical',
    phase: 'Passive',
    stack: ['python', 'opencv'],
    description: 'AI-powered lyrics matching with human level accuracy and sub-second latency.',
    image: '/images/lyrical.png'
  },
  {
    name: 'Lyrical',
    phase: 'Passive',
    stack: ['python', 'opencv'],
    description: 'AI-powered lyrics matching with human level accuracy and sub-second latency.',
    image: '/images/lyrical.png'
  }
];

const ProjectsPage = () => {
  return (
    <section className='flex flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold '>
          Projects
      </h1>
      <div className="flex flex-col h-screen overflow-y-hidden bg-dark-1">
        <div className={`${styles.projectList} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5`}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
    </div>
  </section>
  );
};


export default ProjectsPage;
