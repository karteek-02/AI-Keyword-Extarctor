import { Box, Text, Image, Flex } from '@chakra-ui/react';
import logo from "../assets/logo_AI.png"

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={logo} marginRight={1} width={"20px"} height={"20px"} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};
export default Footer;