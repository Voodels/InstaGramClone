import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom"
const SuggestedHeader = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar name="Vignesh" size={"lg"} src="/profilepic.png"></Avatar>
          <Text fontSize={13} fontWeight={"bold"}>
            Vighnesh
          </Text>
        </Flex>
        <Link 
        to={"/auth"}
        fontSize={13} fontWeight={"bold"}
        color={"blue.500"}
        cursor={"pointer"}
        as={RouterLink}
        >
        
        Logout 
        </Link>
      </Flex>
    </>
  );
};
export default SuggestedHeader;
