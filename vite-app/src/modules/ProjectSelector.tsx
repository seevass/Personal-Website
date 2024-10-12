import React, { useState } from 'react';
import './ProjectSelector.css';
import { Stack, Image, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ProjectList from './ProjectList';

import TempImage from '../assets/flower-mural.png';
import KeyboardWarriorImage from '../assets/KeyboardWarrior.png';
import QuickcastImage from '../assets/QuickCast.png';
import BlendifyImage from '../assets/Blendify.png';
import Passion1Image from '../assets/Passion.png';

function ProjectSelector() {
  const [imageSrc, setImageSrc] = useState(TempImage);
  const isMobile = useMediaQuery('(max-width: 990px)');
  const breakpoint = isMobile ? '10px' : '260px';

  const handleImageChange = (newImageSrc: string) => {
    setImageSrc(newImageSrc);
  };

  return (
    <Stack style={{ paddingRight: breakpoint }}>
      <Group grow align='flex-start'>
        <ProjectList 
          title="Projects"
          links={[
            ['#/keyboardwarrior', 'Keyboard Warrior', KeyboardWarriorImage],
            ['#/quickcast', 'Quickcast', QuickcastImage],
            ['#/blendify', 'Blendify', BlendifyImage]
          ]}
           setImageSrc={setImageSrc} // Pass the function to handle image change
        />

        <ProjectList 
          title="Passions"
          links={[
            ['#/passion1', 'Passion 1', Passion1Image]
          ]}
           setImageSrc={setImageSrc} // Pass the function to handle image change
        />
      </Group>

      <Image src={imageSrc} alt="project preview" fit="contain" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Stack>
  );
}

export default ProjectSelector;
