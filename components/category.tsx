import { List, Box, Heading, SimpleGrid } from "@chakra-ui/react";
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
      {
        title: "last edit location",
        description:
          "Jump backward to the cursor where you last edited code. This is sometimes more efficient than pressing the above shortcut keys multiple times. (Main menu -> Navigate -> Last edit location)",
        keys: ["cmd", "shift", "backspace"],
      },
      {
        title: "extend selection",
        description:
          "Extend or shrink currently selected text/code, with code-sensing: wherever your cursor is, by repeatedly pressing the shortcut keys, it will select more and more (or less and less) of the surrounding code of your cursor. See video below. (Extend selection, Shrink selection)",
        keys: ["option", "up"],
      },
    ],
  },
  { category: "Code Navigation", shortcuts: [] },
  { category: "Code Generation", shortcuts: [] },
  { category: "Code and Text Manipulation", shortcuts: [] },
  { category: "Refactoring", shortcuts: [] },
  { category: "Copy & Paste", shortcuts: [] },
];

export default function Category() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={"40px"}>
      {shortcuts.map((category) => (
        <Box
          minWidth={"300px"}
          maxWidth={"400px"}
          boxShadow={"xl"}
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
    </SimpleGrid>
  );
}
