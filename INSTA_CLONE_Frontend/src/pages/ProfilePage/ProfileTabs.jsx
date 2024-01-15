import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={{
        base: 2,
        sm: 10,
      }}
    >
      <Flex
        borderTop={"1px solid whiteAlpha.900"}
        alignItems={"center"}
        p={3}
        m={3}
        cursor={"pointer"}
        
      >
        <Box fontSize={20}>
        <BsGrid3X3 />
        </Box>
        <Text
          fontSize={12}
          display={{
            base: "none",
            sm: "block",
          }}
        >
          Posts
        </Text>
      </Flex>

      <Flex

        alignItems={"center"}
        p={3}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
        <BsBookmark />
        </Box>
        <Text
          fontSize={12}
          display={{
            base: "none",
            sm: "block",
          }}
        >
          Saved
        </Text>
      </Flex>

      <Flex
       
        alignItems={"center"}
        p={3}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
        <BsSuitHeart />
        </Box>
        <Text
          fontSize={12}
          display={{
            base: "none",
            sm: "block",
          }}
        >
          Liked
        </Text>
      </Flex>
    </Flex>
  );
};
export default ProfileTabs;
