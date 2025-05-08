import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Homepage = () => {
   const navigate = useNavigate();
  
   useEffect(() => {
     const user = JSON.parse(localStorage.getItem("userInfo"));
      if (user) {
       navigate("/chats");
     }
   }, [navigate]);
  return (
    <Box
      height="100vh"
      width="100vw"
      bgImage="url('/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
       
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="xl" centerContent height="100vh">
        <Box
          display="flex"
          justifyContent={"center"}
          p={3}
          bg="transparent"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        
        >
          <Text fontSize="4xl" fontFamily="Work Sans" color="black">
            CHATIFY
          </Text>
        </Box>
        <Box
          bg="white"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          color="black"
        >
          <Tabs variant="soft-rounded">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
}

export default Homepage