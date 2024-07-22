import React from 'react';
import ProjectCard from '@/components/ProjectCard';

async function getRepos() {
  const res = await fetch('https://api.github.com/users/nachiketashunya/repos', { cache: 'no-store'})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function ProjectsPage() {
  const repos = await getRepos();
  const extractedData = [];

  for (let item of repos) {
    let { name, full_name, html_url, description, topics } = item; // Destructure each dictionary
    if (topics.includes('projects')) {
      // Split the content by '–' and trim each resulting string
      const points = description.split('–').map((point: any) => point.trim());

      extractedData.push({ name, full_name, html_url, points }); // Create new object with extracted data
    }
  }

  return (
    <section className='flex flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold '>
          Projects
      </h1>
      <div className="flex flex-col bg-dark-1">
        <div className={`flex flex-wrap gap-5`}>
          {extractedData.map((repo:any, index:number) => (
            <ProjectCard key={index} {...repo} />
          ))}
      </div>
    </div>
  </section>
  );
};

