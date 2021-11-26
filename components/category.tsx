import { List, Box, Heading } from "@chakra-ui/react";
import Shortcut from "./shortcut";

const shortcuts = [
  {
    category: "Cursor Navigation",
    shortcuts: [
      {
        title: "navigate back",
        description:
          "Jump forward or backward in this history of your cursor. For instance, this helps to quickly go back to where you were before following a code path (Main menu -> Navigate -> Back/Forward)",
        keys: ["cmd", "alt", "left"],
      },
    ],
  },
];

export default function Category() {
  return (
    <List>
      {shortcuts.map((category) => (
        <Box
          maxWidth={"350px"}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
          key={category.category}
          cursor={"pointer"}
          transition="transform 0.15s ease-in-out"
          _hover={{
            boxShadow: "4xl",
            transform: "scale3d(1.05, 1.05, 1)",
          }}
        >
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            margin={"4px 4px 14px 4px"}
          >
            {category.category}
          </Heading>
          <List>
            {category.shortcuts.map((shortcut) => (
              <Shortcut
                title={shortcut.title}
                keys={shortcut.keys}
                key={shortcut.title}
              />
            ))}
          </List>
        </Box>
      ))}
    </List>
  );
}
