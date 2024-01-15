import { Avatar, Flex, Text } from "@chakra-ui/react"

const Comment = (props) => {
  return (
    <>
        <Flex alignItems={"center"} gap={4}>
            <Avatar src={props.profilePic} size={"sm"}></Avatar>
            <Text fontWeight={"bold"} fontSize={12}>
            {props.username}
            </Text>
            <Text fontSize={12}
          color={"gray.500"}
        >{props.text}</Text>

        </Flex>
            <Text fontSize={10} color={"gray.500"}>
            {props.createdAt}
            </Text>
        
    </>
  )
}
export default Comment