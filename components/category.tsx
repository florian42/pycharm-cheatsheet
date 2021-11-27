import {
  List,
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Shortcut from "./shortcut";
import theme from "../theme";
import shortcuts from "../shortcuts";

export default function Category() {
  const boxBackgroundColor = useColorModeValue(
    theme.colors.white,
    theme.colors.gray["700"]
  );
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={"40px"}>
      {shortcuts.map((category) => (
        <Box
          backgroundColor={boxBackgroundColor}
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
