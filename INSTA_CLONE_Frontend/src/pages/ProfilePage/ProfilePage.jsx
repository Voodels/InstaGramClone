import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";

const ProfilePage = () => {
  return (
    <Container maxW="container.lg" py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        <ProfileHeader></ProfileHeader>
      </Flex>
      <Flex
        px={{
          base: 2,
          sm: 4,
        }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid whiteAlpha.900"}

      >
        <ProfileTabs></ProfileTabs>
      </Flex>
      <ProfilePosts></ProfilePosts>
    </Container>
  );
};
export default ProfilePage;
