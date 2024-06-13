import React from "react";

import nameLogo from "./assets/streamText.gif";

import "@mantine/core/styles.css";
import {
  MantineProvider,
  AppShell,
  Burger,
  createTheme,
  Grid,
  SimpleGrid,
  Text,
  Space,
  VisuallyHidden,
  Image,
  Group,
  Container,
  Title,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [opened, { toggle }] = useDisclosure();

  const theme = createTheme({
    components: {
      NavLink: {
        styles: (theme) => ({
          label: {
            fontSize: "1.2rem",
            fontWeight: 600,
          },
        }),
      },
    },
  });

  return (
    <MantineProvider theme={theme}>
      <AppShell
        padding="xl"
        header={{ height: 50 }}
        navbar={{
          width: "200",
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        withBorder={false}
      >
        <AppShell.Header>
          <Group style={{ padding: "20px" }}>
            <Image src={nameLogo} h={25} w="auto" />
            <div
              style={{
                alignItems: "flex-end",
                marginLeft: "auto",
                paddingRight: "15px",
              }}
            >
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="md"
                color="yellow"
              />
            </div>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar style={{ paddingLeft: "10px" }}>
          <Title style={{ padding: "15px" }}> Sebastian Cruz</Title>
          <Space h="sm" />
          <NavLink label="About" href="#about" />
          <NavLink label="Resume/CV" href="#resume" />
          <NavLink label="LinkedIn" href="#linkedin" />
          <NavLink label="GitHub" href="#github" />
          <NavLink label="Contact" href="#contact" />
        </AppShell.Navbar>

        <AppShell.Main>
          <Grid>
            <Grid.Col span="auto">
              <div
                style={{
                  backgroundColor: "blue",
                  width: "100px",
                  height: "100px",
                }}
              ></div>
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                style={{
                  backgroundColor: "blue",
                  width: "100px",
                  height: "100px",
                }}
              ></div>
            </Grid.Col>
            <Grid.Col span="auto">
              <div
                style={{
                  backgroundColor: "blue",
                  width: "100px",
                  height: "100px",
                }}
              ></div>
            </Grid.Col>
          </Grid>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
