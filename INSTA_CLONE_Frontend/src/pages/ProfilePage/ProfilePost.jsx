import {
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  Text,
  useDisclosure,
  Box,
  Avatar,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Comment from "../../components/Comment/Comment";
import PostFooter from "../../components/FeedPosts/PostFooter";
const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        _hover={{
          borderColor: "whiteAlpha.500",
        }}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{
            opacity: 1,
            background: "rgba(0,0,0,0.3)",
          }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          alignItems={"center"}
          justifyContent={"center"}
          bg={"blackAlpha.600"}
          transition={" 0.3s ease"}
          zIndex={1}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={24} />
              <Text fontWeight={"bold"} ml={2}>
                1000
              </Text>
            </Flex>
            <Flex>
              <FaComment size={24} />
              <Text fontWeight={"bold"} ml={2}>
                1000
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={img} w={"100%"} h={"100%"} objectFit={"cover"} />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{
          base: "xl",
          md: "5xl",
        }}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader></ModalHeader> */}
          <ModalCloseButton />
          <ModalBody bg={"blackAlpha.900"} pb={5}>
            <Flex
              gap={4}
              w={{
                base: "90%",
                sm: "70%",
                md: "full",
              }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img}></Image>
              </Box>
          
              <Flex
                flex={1}
                flexDirection={"column"}
                px={10}
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <Flex  alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={4} >
                  <Avatar src="/profilepic.png" size={"sm"}></Avatar>
                  <Text fontWeight={"bold"} fontSize={12}>
                    Vighnesh
                  </Text>
                </Flex>
                <Box  
                  _hover={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "red",
                  }}
                >
                  <MdDelete size={24} />
                </Box>
                      
              </Flex>
              <Divider 
              my={4}
              bg={"gray.500"}

              ></Divider>
              <VStack
                w={"full"}
                alignItems={"flex-start"}
                maxH={"350px"}
                overflowY={"auto"}
              >
                <Comment
                  createdAt={"2 days ago"}
                  username={"Vighnesh"}
                  profilePic={"/profilepic.png"}
                  text = {"This is a comment"}
                ></Comment>
                <Comment
                  createdAt={"2 days ago"}
                  username={"Vighnesh"}
                  profilePic={"/profilepic.png"}
                  text = {"This is a comment"}
                ></Comment>
                <Comment
                  createdAt={"2 days ago"}
                  username={"Vighnesh"}
                  profilePic={"/profilepic.png"}
                  text = {"This is a comment"}
                ></Comment>
                <Comment
                  createdAt={"2 days ago"}
                  username={"Vighnesh"}
                  profilePic={"/profilepic.png"}
                  text = {"This is a comment"}
                ></Comment>
                <Comment
                  createdAt={"2 days ago"}
                  username={"Vighnesh"}
                  profilePic={"/profilepic.png"}
                  text = {"This is a comment"}
                ></Comment>
                <Comment
                  createdAt={"10 days ago"}
                  username={"Vighnesh"}
                  profilePic={"/profilepic.png"}
                    text = {"euuuuuuu"}
></Comment>
                <Comment
                  createdAt={"21 days ago"}
                  username={"Vighnesh"}
                  profilePic={"/profilepic.png"}
                    text = {"ar ra ra ra ra"}
                ></Comment>

              </VStack>
              <Divider
              my={4}
              bg={"gray.500"}
              ></Divider>
              <PostFooter isProfilePage={true}></PostFooter>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
