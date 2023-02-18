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
import Image from "next/image";
import styles from "./css/Navbar.module.css";
import SearchComponent from "Components/AlgoliaSearch/Search.js";

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
    { content: "Docs", href: "/content/Documentation", isActive: false },
    { content: "Latest Blogs", href: "/content/Blogs", isActive: "text-bold" },
    { content: "About", href: "/content/About", isActive: false },
    { content: "Code of conduct", href: "/content/Conduct", isActive: false },
    {
      content: "Github",
      href: "https://github.com/Link-Hive",
      isActive: false,
    },
    { content: "New Here ?", href: "/api/auth/signin", isActive: "text-bold" },
  ];
  return (
    <>
      <Layout style={{ zIndex: 1 }}>
        <Navbar isBordered variant="sticky">
          <Navbar.Toggle showIn="md" />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
            hideIn={"xs"}
          >
            {isDark ? (
              <div>
                <Image
                  width={200}
                  height={200}
                  src="/assets/removed/3-white.png"
                  alt="linkHive.inc"
                  priority
                />
              </div>
            ) : (
              <div>
                <Image
                  width={200}
                  height={200}
                  priority
                  src="/assets/removed/4-black.png"
                  alt="linkHive.inc"
                />
              </div>
            )}
          </Navbar.Brand>

          <Navbar.Content
            activeColor="secondary"
            hideIn="md"
            variant="underline"
          >
            <Navbar.Content>
              {linkHive &&
                linkHive.map((item, content) => {
                  return (
                    <div key={item.content}>
                      <Link href={item.href}>
                        <Text
                          h6
                          className={`font-poppins  ${styles.adjustment} ${styles.barFact} ${item.isActive}`}
                        >
                          {" "}
                          {item.content}
                        </Text>
                      </Link>
                    </div>
                  );
                })}
            </Navbar.Content>
          </Navbar.Content>

          <SearchComponent placeholder="Search something" />

          <Navbar.Content
            css={{
              "@xs": {
                w: "8%",
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
            {linkHive.map((item, index) => (
              <div key={item.content}>
                <Navbar.CollapseItem
                  activeColor="secondary"
                  isActive={item.isActive}
                >
                  <Link
                    color="inherit"
                    css={{
                      minWidth: "100%",
                    }}
                    href={item.href}
                  >
                    <Text className={`font-poppins ${styles.barFact}`}>
                      {" "}
                      {item.content}
                    </Text>
                  </Link>
                </Navbar.CollapseItem>
              </div>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </>
  );
};

export default NavbarComponent;
