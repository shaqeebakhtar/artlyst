import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "0.25rem",
  },
  variants: {
    dark: {
      color: "white",
      bg: "brand.700",
      _hover: {
        bg: "black",
      },
    },
    light: {
      color: "black",
      bg: "white",
      _hover: {
        bg: "brand.300",
      },
    },
    "icon-button": {
      bg: "",
      padding: "0.25em",
      _hover: {
        bg: "brand.300",
      },
    },
  },
};
