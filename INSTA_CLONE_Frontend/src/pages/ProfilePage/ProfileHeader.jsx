import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {
  return (
    <Flex
    gap={{
      base: 4,
      sm: 10,
    }}
    py={10}
    direction={{
      base: "column",
      sm: "row",
    }}
    
    >
      {/* //for border */}
      <AvatarGroup

        size={{
          base: "xl",
          sm: "2xl",
        }}
        justifySelf={"center"}
        alignSelf={"flex-start"}        
      >
        <Avatar
          name={"Rahul"}
          src='/profile.png'
          alt="Rahul" 
        >
        </Avatar>
      </AvatarGroup>
      <VStack
      alignItems={"flex-start"}
      gap={2}
      mx={"auto"}
      flex={1}
      >
        <Flex gap={4}
        direction={{
          base: "column",
          sm: "row",
        }}
        justifyContent={{
          base: "center",
          sm: "flex-start",
        }}
        alignItems={"center"}
        w={"full"}
        >
        
        <Text
        fontSize={{
          base: "xs",
          md: "sm",
        }}
        >
          Vighnesh

        </Text>
        <Flex  gap={4}
        alignItems={"center"}
        justifyContent={"center"}>
          <Button bg={"white"}
          color={"black"}
          px={4}
          _hover={{
            bg: "whiteAlpha.800",
          }}
          size={{
            base: "xs",
            md: "sm",
          }}
          >
            Edit Profile
          </Button>
        </Flex>

        </Flex>
        <Flex 
        alignItems={"center"}
        gap={{
          base:2,
          sm:4,
        }}> 
        <Text as="span" fontWeight={"bold"} mr={1}
        fontSize={{
          base: "xs",
          md: "sm",
        }} >
          Posts
        </Text>
        <Text as="span" fontWeight={"bold"} mr={1}
          fontSize={{
            base: "xs",
            md: "sm",
          }}
        >
          Followers
        </Text>
        <Text as="span" fontWeight={"bold"} mr={1} 
        fontSize={{
          base: "xs",
          md: "sm",
        }}
        >
          Following
        </Text>

        </Flex>
        <Flex alignItems={"center"}
        gap={
          4
        } >
          <Text  
        
          fontWeight={"bold"}
          fontSize={{
            base: "xs",
            md: "sm",
          }}
          >
             Vighnesh UI
          </Text>
          <Text  
          fontSize={"sm"}
          
          >
              UI with React and Backend with FireBase
          </Text>
        </Flex>

      </VStack>
    </Flex>
  )
}
export default ProfileHeader