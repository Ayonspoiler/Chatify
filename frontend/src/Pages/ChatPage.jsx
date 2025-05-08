
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/chatProvider";
import App from "../App";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

const ChatPage = () => {
     const {user}=ChatState();
     const [fetchAgain,setFetchAgain]=useState(false)
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
    >
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && (
            <MyChats fetchAgain={fetchAgain} />
          )}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    </Box>
  );
};

export default ChatPage