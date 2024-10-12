import React from "react";
import "./Homepage.css";

import nameLogo from "../assets/streamText.gif";
import tattooGif from "../assets/Barberpole_illusion_animated.gif"
import bannerPhoto from "../assets/BannerPhoto.png";
import sideBannerPhoto from "../assets/SideBannerPhoto.png";

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
                width: 240,
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
              style={{paddingLeft:"15px", paddingTop:"10px"}}/>
            <Space h="sm" />
            <Title className="nameTitle" style={{fontSize: "2em", paddingLeft:"13px", paddingTop:'20px'}}> Sebastian Cruz</Title>
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
                <Image src={bannerPhoto} w="200" 
                  style={{maxWidth: '100%', maxHeight: '100%', transform: ''}} />
            </AppShell.Aside>

            <AppShell.Footer
              hiddenFrom="md"> 
                <Image src={sideBannerPhoto} h={120} w="auto"
                  style={{maxWidth: '100%', maxHeight: '100%', transform: ''}} />
            </AppShell.Footer>

        </AppShell>
    </MantineProvider>
  );
}

export default Homepage;
