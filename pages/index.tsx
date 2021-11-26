import type { NextPage } from "next";
import Head from "next/head";
import { chakra, Text, Box } from "@chakra-ui/react";
import Category from "../components/category";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>PyCharm Cheatsheet</title>
        <meta name="description" content="My Personal PyCharm Cheatsheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      >
        <Text>Created With ☕</Text>
      </chakra.footer>
    </Box>
  );
};

export default Home;
