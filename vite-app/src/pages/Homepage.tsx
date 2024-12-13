import React from "react";
import "./Homepage.css";

import nameLogo from "../assets/streamText.gif";
import tattooGif from "../assets/Personal-Website-Gif.gif"
import tattooGifSideways from "../assets/Personal-Website-Gif-Sideways.gif"


import "@mantine/core/styles.css";

import {
  MantineProvider,
  AppShell,
  Burger,
  Space,
  Image,
  Group,
  Title,
  NavLinkStylesNames,
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
          AppShell: {
            defaultProps: {
              padding: "xl",
              header: { height: 50 },
              navbar: {
                width: 400,
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
                  size="lg"
                  color="yellow"
                  style={{ padding: "10px",}}
                />
              </div>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar className="navBar" style={{ paddingLeft: "20px"}}>
            <div
                style={{
                  alignItems: "flex-end",
                  marginLeft: "auto",
                  paddingTop: "20px",
                }}
              >
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="md"
                  size="xl"
                  color="yellow"
                  style={{paddingRight: "67px"}}
                />
              </div>
              <Space h="sm" />
              <img src={nameLogo} alt="Background Image" className="background-image" />
            <Space h="sm" />
            <Title className="nameTitle" style={{fontSize: "4rem"}}> Sebastian Cruz</Title>
            <Space h="sm" />

            <NavLinkItem to="/about" label="About" />
            <NavLinkItem to="/resume.pdf" label="Resume/CV" />
            <NavLinkItem to="https://www.linkedin.com/in/cruzseabass/" label="LinkedIn" isExternal/>
            <NavLinkItem to="https://github.com/seevass" label="GitHub" isExternal />
            <NavLinkItem to="mailto:cruzseabass@gmail.com" label="Contact" />
          </AppShell.Navbar>

          <AppShell.Main className='main'>
            <ProjectSelector />
          </AppShell.Main>

            <AppShell.Aside
              visibleFrom="md" className="aside">
                <Image src={tattooGif} w="390" 
                  style={{maxWidth: '100%', maxHeight: '100%', transform: '', paddingRight:'20px'}} />
            </AppShell.Aside>

            <AppShell.Footer
              hiddenFrom="md" className="footer"> 
                <Image src={tattooGifSideways} h={300} w="auto"
                  style={{maxWidth: '100%', maxHeight: '100%', transform: ''}} />
            </AppShell.Footer>

        </AppShell>
    </MantineProvider>
  );
}

export default Homepage;
