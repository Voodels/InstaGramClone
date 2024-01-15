import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={13} fontWeight={"bold"}>
          Suggestions for you
        </Text>
        <Text
          fontSize={13}
          fontWeight={"bold"}
          _hover={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          See all
        </Text>
      </Flex>

      <SuggestedUser
        name="Vighnesh"
        avatar="https://www.flaticon.com/free-icon/man_2202112"
        followers={100}
      ></SuggestedUser>
      
      <SuggestedUser
        
        name="Sadanand"
        avatar="https://www.flaticon.com/free-icon/cat_4322991"
        followers={100}
></SuggestedUser>
      
      <SuggestedUser
        name="potdar"
        avatar="https://cdn-icons-png.flaticon.com/128/924/924874.png"
        followers={111414}
      ></SuggestedUser>
      
      <SuggestedUser
        name="i ran out of names"
        avatar="https://www.flaticon.com/free-icon/dinosaur_4681691"
        followers={10034343}
      ></SuggestedUser>

      <Box 
      w={"full"}
      fontFamily={"cursive"}
      fontSize={12}
      fontWeight={"bold"}
      textAlign={"center"}
      color={"gray.500"}
      mt={4}
      py={3}
      >
        Build with ❤️ by Vighnesh in 2023
        <br/>

        <a
        href='https://github.com/Voodels'
        target='_blank'
        >Github</a>
    </Box>

    </VStack>
  );
};
export default SuggestedUsers;
