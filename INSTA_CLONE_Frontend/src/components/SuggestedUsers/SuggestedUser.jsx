import { Avatar, Button, Flex, VStack,Box} from "@chakra-ui/react";
import { useState } from "react";
const SuggestedUser = ({ name, avatar, followers }) => {
  const [followed, setFollowed] = useState(false);
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src={avatar} name={name} size={"md"}></Avatar>
            <VStack
            align={"flex-start"}
            spacing={2}

            >
              <Box fontsize={12}
              fontWeight={"bold"}
              color={"gray.500"}
              >
{name}
              </Box>
              <Box fontsize={12}
              fontWeight={"bold"}
              color={"gray.500"}
              >
{followers} followers
              </Box>

            </VStack>
        </Flex>
        <Button
          fontSize={12}
          fontWeight={"bold"}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          color={"blue.500"}
          onClick={() => setFollowed(!followed)}
          cursor={"pointer"}
          _hover={{
            textDecoration: "underline",
            color: "white.600",
          }}
        >

    {followed ? "UnFollow" : "Follow"}

        </Button>
      </Flex>
    </>
  );
};
export default SuggestedUser;
