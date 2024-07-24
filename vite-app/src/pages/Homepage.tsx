import React from "react";
import "./Homepage.css";

import nameLogo from "../assets/streamText.gif";
import tattooGif from "../assets/Barberpole_illusion_animated.gif"

import "@mantine/core/styles.css";

import {
  MantineProvider,
  AppShell,
  Burger,
  Grid,
  Space,
  Image,
  Group,
  Title,
  NavLinkStylesNames,
  Flex,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import NavLinkItem from "../modules/NavLinkItem";
import ProjectSelector from "../modules/ProjectSelector";

function Homepage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider
      theme={{
        components: {
          NavLink: {
            styles: (theme, params: NavLinkStylesNames) => ({
              label: {
                fontSize: "1.2rem",
                fontWeight: 700,
              },
            }),
          },
          AppShell: {
            defaultProps: {
              padding: "xl",
              header: { height: 50 },
              navbar: {
                width: 140,
                breakpoint: "md",
                collapsed: {
                  mobile: !opened,
                },
              },
              withBorder: false,
            },
          },
        },
      }}
    >
        <AppShell layout='alt'>
          <AppShell.Header className="header">
            <Group style={{ padding: "20px" }}>
              <Image src={nameLogo} h={27} w="auto" hiddenFrom="md"/>
              <div
                style={{
                  alignItems: "flex-end",
                  marginLeft: "auto",
                  paddingRight: "15px",
                }}
              >
                <Burger
                  //opened={opened}
                  onClick={toggle}
                  hiddenFrom="md"
                  size="md"
                  color="yellow"
                  style={{ padding: "10px"}}
                />
              </div>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar className="navBar" style={{ paddingLeft: "10px"}}>
            <div
                style={{
                  alignItems: "flex-end",
                  marginLeft: "auto",
                  paddingRight: "20px",
                  paddingTop: "20px",
                }}
              >
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="md"
                  size="md"
                  color="yellow"
                />
              </div>
            <Image src={nameLogo} h="auto" w={150} visibleFrom="md" 
              style={{paddingLeft:"15px", paddingTop:"40px"}}/>
            <Space h="sm" />
            <Title style={{fontSize: "1.5em", paddingLeft:"20px"}}> Sebastian Cruz</Title>
            <Space h="sm" />

            <NavLinkItem to="#about" label="About" />
            <NavLinkItem to="#resume" label="Resume/CV" />
            <NavLinkItem to="#linkedin" label="LinkedIn" />
            <NavLinkItem to="#github" label="GitHub" />
            <NavLinkItem to="#contact" label="Contact" />
          </AppShell.Navbar>

          <AppShell.Main>
            <ProjectSelector />
          </AppShell.Main>

            <AppShell.Aside
              visibleFrom="md">
                <Image src={tattooGif} h={200} w="100" />
            </AppShell.Aside>

            <AppShell.Footer
              hiddenFrom="md"> 
                <Image src={tattooGif} h={100} w="100"
                  style={{transform: 'rotate(90deg)'}} />
            </AppShell.Footer>

        </AppShell>
    </MantineProvider>
  );
}

export default Homepage;
