import { Box, Button, Flex,Input,InputGroup,InputRightElement,Text } from "@chakra-ui/react";
import { useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
;

const PostFooter = ({username,isProfilePage}) => {

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handlelike = () => {
    if(liked){
      setLikes(likes - 1)
      setLiked(false)
    }else{
      setLikes(likes + 1)
      setLiked(true)
    }
  }

  return (
    <Box my={10} mt={"auto"}>
      <Flex 
      alignItems={"center"}
      gap={4} 
      w={"full"} 
      pt={0} 
      mt={"4"}
      >
        <Box onClick={handlelike}>
          { !liked ? (<NotificationsLogo/>) : (<UnlikeLogo/>) } 
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo/>
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
        <Text>
      {username}{" "}
      <Text as={"span"} fontWeight={600}>
         _Feeling Happy
      </Text>        
      </Text>
      <Text fontSize="sm" color={"gray"} cursor={"pointer"}>
        view all 100 comments
      </Text>
        </>
      )}
      <Flex
      alignItems={"center"}
      gap={2}
      justifyContent={"space-between"}
      w={"full"}
>
      <InputGroup>
        <Input variant = {"Flushed"} placeholder="Add comment "  fontSize={14}
        px={5}/>
        <InputRightElement >
        <Button
        fontSize={14}
        color={"blue.500"}
        fontWeight={"600"}
        cursor={"pointer"}
        _hover={{
          color:"white"
        }}
        bg={"transparent"}
          >
          Post
        </Button>
        </InputRightElement>
      </InputGroup>
</Flex>
    </Box>
  );
};
export default PostFooter;
