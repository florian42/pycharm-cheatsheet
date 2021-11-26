import { Box, Heading, Kbd, Flex, Text } from "@chakra-ui/react";

export default function Shortcut({
  title,
  keys,
}: {
  title: string;
  keys: string[];
}) {
  const lastKey = keys.length - 1;
  return (
    <Flex
      flexDirection={"row"}
      borderRadius={"md"}
      alignItems={"center"}
      margin={"4px"}
      padding={"2px 4px"}
      _hover={{
        backgroundColor: "teal.500",
      }}
    >
      <Text marginRight={"6px"}>{title}:</Text>
      {keys.map((key, index) => (
        <>
          <Kbd key={key}>{key}</Kbd>
          {index !== lastKey ? " + " : undefined}
        </>
      ))}
    </Flex>
  );
}
