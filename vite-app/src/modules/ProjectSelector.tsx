import React from 'react';
import './ProjectSelector.css';
import { Stack, Image } from '@mantine/core';

import TempImage from '../assets/flower-mural.png';

function ProjectSelector() {
  return (

    <Stack style={{paddingRight:"170px"}}>
        <Image src={TempImage} alt="flower mural" fit="fill"/>
    </Stack>
  );
}

export default ProjectSelector;