import React from "react";
import "./Homepage.css";

import nameLogo from "../assets/streamText.gif";

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
  NavLinkStylesNames,
  colorsTuple,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import NavLinkItem from "../modules/NavLinkItem";

function Homepage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider
      theme={{
        components: {
          NavLink: {
            styles: (theme, params: NavLinkStylesNames) => ({
              label: {
                fontSize: "1.4rem",
                fontWeight: 700,
              },
            }),
          },
          AppShell: {
            defaultProps: {
              padding: "xl",
              header: { height: 50 },
              navbar: {
                width: 200,
                breakpoint: "sm",
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
      <AppShell>
        <AppShell.Header className="header">
          <Group style={{ padding: "20px" }}>
            <Image src={nameLogo} h={30} w="auto" />
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

        <AppShell.Navbar className="navBar" style={{ paddingLeft: "10px" }}>
          <Title style={{ padding: "15px" }}> Sebastian Cruz</Title>
          <Space h="sm" />

          <NavLinkItem to="#about" label="About" />
          <NavLinkItem to="#resume" label="Resume/CV" />
          <NavLinkItem to="#linkedin" label="LinkedIn" />
          <NavLinkItem to="#github" label="GitHub" />
          <NavLinkItem to="#contact" label="Contact" />
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

export default Homepage;
