import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
function TopBar() {
  const { push } = useRouter();
  return (
    <Flex p={2} position={"sticky"} alignItems="center">
      <Flex justify={"center"} flex={1}>
        <li onClick={() => push("/")} className="p-1 mr-2 item">
          Home
        </li>
        <li onClick={() => push("/posts")} className="p-1 ml-2 item">
          Posts
        </li>
        <li className="p-1 ml-2 item">Download CV</li>
      </Flex>
      <Box>
        <motion.img
          whileInView={{
            boxShadow: "0px 0px 5px #000",
          }}
          whileHover={{ scale: 1.2 }}
          style={{ marginTop: 5, flex: 1 }}
          className="avatar"
          src="https://avatars.githubusercontent.com/u/34032131?v=4"
        />
      </Box>
    </Flex>
  );
}

export default TopBar;
