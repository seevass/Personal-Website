import React from 'react';
import './ProjectSelector.css';
import { Stack, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import TempImage from '../assets/flower-mural.png';

function ProjectSelector() {
  const isMobile = useMediaQuery('(max-width: 990px)');

  const breakpoint = isMobile ? '10px' : '170px';
  return (

    <Stack style={{paddingRight:breakpoint}}>
        <Image src={TempImage} alt="flower mural" fit="fill"/>
    </Stack>
  );
}

export default ProjectSelector;