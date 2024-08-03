import React from 'react';
import './ProjectSelector.css';
import { Stack, Image, Group} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ProjectList from './ProjectList';

import TempImage from '../assets/flower-mural.png';

function ProjectSelector() {
  const isMobile = useMediaQuery('(max-width: 990px)');

  const breakpoint = isMobile ? '10px' : '170px';
  return (

    <Stack style={{paddingRight:breakpoint}}>
      <Group grow>
        <ProjectList 
          title="Projects"
          links={[
            ['#/project1', 'Project 1']
          ]}
        />

        <ProjectList 
          title="Passions"
          links={[
            ['#/passion1', 'Passion 1']
          ]}
        />
      </Group>

      <Image src={TempImage} alt="flower mural" fit="contain" style={{maxWidth: '80%', maxHeight: '80%'}} />
    </Stack>
  );
}

export default ProjectSelector;