// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

// Version 2: Using functions
const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
      },
    }),
  },
});

export default theme;
