import "@fontsource/manrope/200.css";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

const colors = {
  brand: {
    300: "#f9fafb",
    700: "#1d242d",
  },
};

const fonts = {
  body: "Manrope, sans-serif",
};

const styles = {
  global: {
    body: {
      bg: "white",
    },
  },
};

const components = {
  Button,
};

export const theme = extendTheme({ colors, fonts, styles, components });
