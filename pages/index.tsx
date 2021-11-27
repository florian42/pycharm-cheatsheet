import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { chakra, Text, Box, Link, useColorModeValue } from "@chakra-ui/react";
import Category from "../components/category";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>PyCharm Cheatsheet</title>
        <meta name="description" content="My Personal PyCharm Cheatsheet" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg"
        />
      </Head>
      <Box width={"48px"} height={"48px"} margin={"24px auto"}>
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg"
          }
          width={"100%"}
          height={"100%"}
          alt="PyCharm IDE Logo"
        />
      </Box>
      <chakra.main minHeight={"100vh"} padding={"16px"}>
        <Category />
      </chakra.main>

      <chakra.footer
        display={"flex"}
        flex={1}
        padding={"2rem 0"}
        borderTop={"1px solid #eaeaea"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection="column"
      >
        Inspired by:
        <Link
          href="https://www.augmentedmind.de/2020/04/26/boost-development-productivity-ide/"
          isExternal
        >
          How to boost development productivity with the 36 best keyboard
          shortcuts
          <ExternalLinkIcon mx="2px" />
        </Link>
        <Text>Created With ☕</Text>
      </chakra.footer>
    </Box>
  );
};

export default Home;
