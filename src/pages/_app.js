/**
 * * This is the main app component, where the structure of the page
 * * rendered out, as usual we can say that it is the main root of
 * * the Linkhive-Online.
 * * */

import "@/styles/globals.css";
import NavbarComponent from "Components/Router/Navbar";
import React from "react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@material-tailwind/react";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {}, // ! optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
    fonts: {
      mono: "Menlo, Monaco, 'Lucida Console', 'Poppins'",
    },
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider>
          <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <NextUIProvider>
              <NavbarComponent />
              <Component {...pageProps} />
            </NextUIProvider>
          </NextThemesProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
