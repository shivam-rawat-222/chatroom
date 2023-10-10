import React, { useState } from 'react'

import { Flex, LightMode, useColorMode , Image, Input, Button, Heading  } from '@chakra-ui/react';
import { useNavigate , Link } from "react-router-dom";

export default function Mainfile() {
    const { colorMode, toggleColorMode } = useColorMode()
    const [user, setuser] = useState("")
let handlesub = ()=>{


  localStorage.setItem("user",user);


}

   
    return (
      <Flex  h="100vh" alignItems="center" flexDir="column" bgColor="#1e1e1e">
        <Flex fontSize="7xl" fontFamily= 'Young Serif' color="white">
          Lets Chat
          {/* <button onClick={toggleColorMode}>{colorMode} Mode</button> */}
        </Flex>
        <Flex  w="80%" h="80%">
          <Flex w="50%"   justifyContent="center" alignItems="center" >
            <Image src="./Images/chat.gif" boxSize="lg" borderRadius="100px"  />
          </Flex>
          <Flex  w="50%" justifyContent="center" alignItems="center"flexDir="column">
          <Heading>Whats Your Name</Heading>
            <Flex  w="70%" h="30%"justifyContent="center" alignItems="center" flexDir="column" gap="20px">
              
            
              <Input type="text" outline="none"  onChange={(e)=>{setuser(e.target.value)}} bgColor="whiteAlpha.100" w="80%"/>
              <Link to="/chat"><Button p="20px"onClick={handlesub} bgColor="blue.400"  w="70%" >Submit</Button></Link>
            
            </Flex>
          
  
          </Flex>
          
        </Flex>
        
      </Flex>
   
    );
}

