import React from 'react';
import Stack from './Stack';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const ProjectCard = ({ name, full_name, html_url, description }) => {
  const stack = ['p', 'k'];
  return (
    <Card className='px-1 py-1 flex flex-col justify-between w-full xl:max-w-[400px] rounded-[14px] cursor-pointer text-white bg-transparent border border-lime-300 overflow-x-hidden'>
      <CardHeader>
        <Link
          href={html_url}
          key={name}
          className='text-xl hover:text-lime-300'
        >
          <CardTitle>{name}</CardTitle>
        </Link>
        <CardDescription className='text-stone-400 text-sm'>{description}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-row justify-start gap-2'>
        {stack.map((s, index) => {
          return <Stack key={index} svgFile={s}/>
        })}
      </CardContent>
    </Card>

  );
};

export default ProjectCard;
