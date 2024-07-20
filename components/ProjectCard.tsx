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


const ProjectCard = ({ name, phase, stack, description, image }) => {
  return (
    <Card className='px-2 py-2 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer text-white bg-transparent border border-lime-300'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className='text-stone-400'>{description}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-row justify-start gap-2'>
        {stack.map((s) => {
          return <Stack svgFile={s}/>
        })}
      </CardContent>
      <CardFooter>
        <Link
          href={phase}
          key={name}
          className='text-lime-300'

        >
          {phase}
        </Link>
      </CardFooter>
    </Card>

  );
};

export default ProjectCard;
