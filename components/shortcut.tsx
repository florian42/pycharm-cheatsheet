import {
  Box,
  Heading,
  Kbd,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import theme from "../theme";

export default function Shortcut({
  title,
  keys,
}: {
  title: string;
  keys: string[];
}) {
  const lastKey = keys.length - 1;
  const accentColor = useColorModeValue(
    theme.colors.teal["300"],
    theme.colors.teal["700"]
  );
  return (
    <Flex
      flexDirection={"row"}
      borderRadius={"md"}
      alignItems={"center"}
      margin={"4px"}
      padding={"2px 4px"}
      _hover={{
        backgroundColor: accentColor,
      }}
    >
      <Text marginRight={"6px"}>{title}:</Text>
      {keys.map((key, index) => (
        <>
          <Kbd key={key + index}>{key}</Kbd>
          {index !== lastKey ? " + " : undefined}
        </>
      ))}
    </Flex>
  );
}
