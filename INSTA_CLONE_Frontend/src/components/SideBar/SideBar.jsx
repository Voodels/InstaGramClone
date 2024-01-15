import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
const SideBar = () => {
  const SidebarItems = [
    {
      icon: <AiFillHome />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create Post",
    },
    {
      icon: <Avatar size={"sm"} name="Modi G" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];

  return (
    <>
      <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{
          base: 2,
          md: 4,
        }}
      >
        <Flex direction={"column"} gap={10} w="full" height={"full"}>
          {/* desktop */}
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            display={{
              base: "none",
              md: "block",
            }}
            cursor={"pointer"}
          >
            <InstagramLogo />
          </Link>
          {/* Mobile */}
          <Link
            to={"/"}
            as={RouterLink}
            p={2}
            display={{
              base: "block",
              md: "none",
            }}
            cursor={"pointer"}
            borderRadius={7}
            _hover={{
              bg: "whiteAlpha.200",
            }}
            w={10}
          >
            <InstagramMobileLogo />
          </Link>
          
          
          <Flex direction={"column"} gap={5} cursor={"pointer"}>
  {SidebarItems.map((item, idx) => (
    <Tooltip
      key={idx}
      label={item.text}
      hasArrow
      placement="right"
      ml={1}
      openDelay={200}
      display={{
        base: "block",
        md: "none", // or use "flex" or another appropriate value
      }}
    >
      <Link
        display={"flex"}
        to={item.link  || null}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        _hover={{
          color: "whiteAlpha.800",
        }}
        borderRadius={6}
        p={2}
        w={{
          base: 10,
          md: "full",
        }}
        justifyContent={{
          base: "center",
          md: "flex-start",
        }}
      >
        {item.icon}
        <Box 
        display={{
          base: "none",
          md: "block",
        }}
        >
            {item.text}
        </Box>
      </Link>
    </Tooltip>
  ))}
</Flex>


          <Tooltip
            hasArrow
            label={"Logout"}
            placement="right"
            ml={1}
            openDelay={600}
            display={{
              base: "block",
              md: "none",
            }}
          >
            <Link
              display={"flex"}
              to={"/auth"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{
                color: "whiteAlpha.800",
              }}
              borderRadius={6}
              p={2}
              w={{
                base: 10,
                md: "full",
              }}
              justifyContent={{
                base: "center",
                md: "flex-start",
              }}
              mt={"auto"}
            >
              <BiLogOut size={25} />
              <Box
                display={{
                  base: "none",
                  md: "block",
                }}
              >
                Logout
              </Box>
            </Link>
          </Tooltip>
        </Flex>
      </Box>
    </>
  );
};
export default SideBar;
