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
      <Group grow align='flex-start'>
        <ProjectList 
          title="Projects"
          links={[
            ['#/keyboardwarrior', 'Keyboard Warrior'],
            ['#/quickcast', 'Quickcast'],
            ['#/blendify', 'Blendify']
          ]}
        />

        <ProjectList 
          title="Passions"
          links={[
            ['#/passion1', 'Passion 1']
          ]}
        />
      </Group>

      <Image src={TempImage} alt="flower mural" fit="contain" style={{maxWidth: '100%', maxHeight: '100%'}} />
    </Stack>
  );
}

export default ProjectSelector;