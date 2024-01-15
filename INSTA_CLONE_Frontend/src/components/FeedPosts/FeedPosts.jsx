import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useState,useEffect } from 'react'


const FeedPosts = () => {

  
  const [isloading,setisloading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setisloading(false)
    }, 2000);
  },[])


  return (
   <Container maxW={"container.sm"} py={10} px={2} >
    
    {isloading && [0,1,2,3].map((_,idx)=>(
      <VStack key={idx} gap={4} alignItems={"start"} mb={10} > 
        <Flex>
          <SkeletonCircle size={10}  ></SkeletonCircle>
          <VStack gap={2} alignItems={"flex-start"}  p={4} >
            <Skeleton h={"10px"} w={"200px"}></Skeleton>
            <Skeleton h={"10px"} w={"200px"}></Skeleton>
          </VStack>
        </Flex>
        <Skeleton w={"Full"} >
        <Box h={"500px"}>
            Contents Wrapped which will not show up
        </Box>
        </Skeleton>
      </VStack>
    ))}
    
    {!isloading ? (
      <>

<FeedPost
    img='/img1.png'
    username="vighnesh153"
    avarar="/img1.png"
    caption
    ></FeedPost>
    <FeedPost
    img='/img1.png'
    username="vighnesh153"
    avarar="/img1.png"
    caption
    ></FeedPost>
    <FeedPost
    img='/img1.png'
    username="vighnesh153"
    avarar="/img1.png"
    caption
    ></FeedPost>
    <FeedPost
    img='/img1.png'
    username="vighnesh153"
    avarar="/img1.png"
    caption
    ></FeedPost>

      
      </>

    ) : null}
   </Container>
  )
}
export default FeedPosts