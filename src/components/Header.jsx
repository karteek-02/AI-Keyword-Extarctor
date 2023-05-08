import React from 'react'
import {Heading , Image , Text} from "@chakra-ui/react"
import bulb from "../assets/light-bulb.jpg"

const Header = () => {

  return (
    <>
        <Image src= {bulb} alt = "light-bulb" width={100} marginBottom={"1rem"} />
        <Heading color="white" marginBottom = "1rem">
            AI Keyword Extractor
        </Heading>
        <Text fontSize={25} textAlign={'center'}>
            Paste in your text here and we will extratct the keywords for you .
        </Text>
    </>
  )
}

export default Header;