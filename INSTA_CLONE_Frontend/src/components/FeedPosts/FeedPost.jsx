import { Box, Container, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const FeedPost = ({image,username,avatar}) => {

  return (
    <>
    <Container maxW={"container.sm"} py={10} px={2} >
        <PostHeader username={username} avatar={avatar} image={image} ></PostHeader>
        <Box my={2} borderRadius={4} overflow={"hidden"} >
            <Image src="/img1.png"></Image>
        </Box>
        <PostFooter username={username} ></PostFooter>
    </Container>
    </>
  )
}
export default FeedPost