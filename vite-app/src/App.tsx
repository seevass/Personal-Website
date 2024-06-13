import './App.css'
import React from 'react'

import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Burger, 
  createTheme, Grid, SimpleGrid, 
  Text, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';




function App() {

  const [opened, { toggle }] = useDisclosure();

  const theme = createTheme({
  })  

  return (
    <MantineProvider theme={theme}>
      <AppShell
        padding="xl"
        
        header={{ height: 40, }}
        navbar={{
          width: "150",
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
          <AppShell.Header>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="md"
            />
          </AppShell.Header>

        <AppShell.Navbar p="md">
          <div>LOGO</div>
          <div>Sebastian Cruz</div>
          <Space h="xl"/>
          <SimpleGrid cols={1}>
            <div>About</div>
            <div>Resume/CV</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
            <div>Contact</div>
          </SimpleGrid>
        </AppShell.Navbar>

        <AppShell.Main>
          Main
          <Grid>
            <Grid.Col span="auto"><div style={{ backgroundColor: 'blue', width: '100px', height: '100px' }}>
    </div></Grid.Col>
            <Grid.Col span={4}><div style={{ backgroundColor: 'blue', width: '100px', height: '100px' }}>
    </div></Grid.Col>
            <Grid.Col span="auto"><div style={{ backgroundColor: 'blue', width: '100px', height: '100px' }}>
    </div></Grid.Col>
          </Grid>
        </AppShell.Main>



      </AppShell>
    </MantineProvider>
  )
}

export default App
