import { Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box w="100vw" h="100vh">
      <Box position="absolute" top="0" w="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0">
        Bottom
      </Box>
    </Box>
  );
};

export default PlayerLayout;
