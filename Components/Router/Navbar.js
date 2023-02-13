import {
  Navbar,
  Button,
  Text,
  useTheme,
  Dropdown,
  Avatar,
} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import React from "react";
import ModeSwitch from "Components/ModeSwitch/SwitchMode.js";
import Link from "next/link";
import styles from './css/Navbar.module.css';

const NavbarComponent = () => {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const { isDark } = useTheme();

  const linkHive = [
    { content: "Home", href: "/", isActive: false },
    { content: "New Here ?", href: "./api/auth/signin", isActive: "text-bold" },
  ];
  return (
    <>
      <Layout style={{ zIndex: 1 }}>
        <Navbar isBordered variant="sticky">
          <Navbar.Toggle showIn="xs" />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          >
            {isDark ? (
              <img src="/assets/removed/3-white.png" alt="linkHive.inc" />
            ) : (
              <img src="/assets/removed/4-black.png" alt="linkHive.inc" />
            )}
          </Navbar.Brand>

          <Navbar.Content
            activeColor="secondary"
            hideIn="xs"
            variant="underline"
          >
            <Navbar.Content>
              {linkHive &&
                linkHive.map((item, content) => {
                  return (
                    <Link href={item.href}>
                      <Text className={`font-poppins ${styles.barFact}`}> {item.content}</Text>
                    </Link>
                  );
                })}
            </Navbar.Content>
          </Navbar.Content>

          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
          >
            <ModeSwitch />
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="secondary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Content>
          <Navbar.Collapse>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem
                key={item}
                activeColor="secondary"
                css={{
                  color: index === collapseItems.length - 1 ? "$error" : "",
                }}
                isActive={index === 2}
              >
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="#"
                >
                  {item}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </>
  );
};

export default NavbarComponent;
