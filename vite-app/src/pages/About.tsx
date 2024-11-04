import React from 'react';
import "./About.css";

import "@mantine/core/styles.css";

import {
    Image,
    MantineProvider,
    Title
} from "@mantine/core"

function About() {
  return (
    <MantineProvider>
        <div> this is text to see if this works </div>
    </MantineProvider>
  );
}

export default About;
