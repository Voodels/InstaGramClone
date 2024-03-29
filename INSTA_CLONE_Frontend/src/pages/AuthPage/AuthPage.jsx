import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <>
    <h1>Auth</h1>
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
    <Container maxW={"container.md"} padding={0} >
    <Flex justifyContent={"center"} alignItems={"center"} gap={10}
    >
        {/* {LHS} */}
        <Box display={{base:"none",md:"block"}}>
            <Image src="/auth.png" h={650} alt="IMG of Bigass Phone" />
        </Box>
        {/* {RHS} */}
        <VStack spacing={4} align={"stretch"}>
            <AuthForm/>
            <Box textAlign={"center"} >
                Get the Instagram app 
            </Box>
            <Flex gap={5} justifyContent={"center"}>
                <Image src="/playstore.png" h={10} alt=" Store" ></Image>
                <Image src="microsoft.png" h={10} alt=" Store" ></Image>
            </Flex>
        </VStack>
    </Flex>

        
    </Container>
    </Flex>
    </>
  )
}
export default AuthPage