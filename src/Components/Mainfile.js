import React, { useState } from 'react'
import { LuLightbulbOff , LuLightbulb } from "react-icons/lu";
import { Flex, LightMode, useColorMode , Image, Input, Button, Heading  } from '@chakra-ui/react';
import { useNavigate , Link } from "react-router-dom";

export default function Mainfile() {
    const { colorMode, toggleColorMode } = useColorMode()
    const [user, setuser] = useState("")
let handlesub = ()=>{


  localStorage.setItem("user",user);


}

   
    return (
      <Flex  h="100vh" alignItems="center" flexDir="column" justifyContent="center" gap="4rem">
        <Flex fontSize="7xl" fontFamily= 'Young Serif' >
          Lets Chat

          <Flex w="30px" onClick={toggleColorMode}>{colorMode=="light" ?<LuLightbulbOff/>:<LuLightbulb/>}</Flex>
        </Flex>
        <Flex  w="80%"  flexDir={{base:"column",md:"column",lg:"row"}} justifyContent="center">
          <Flex   justifyContent="center" alignItems="center" >
            <Image src="./Images/chat.gif" boxSize={{base:"xs",md:"md",lg:"lg"}} borderRadius="100px"  />
          </Flex>
          <Flex  w={{base:"full",md:"full",lg:"50%"}} justifyContent="center" alignItems="center"flexDir="column"  p="20px" gap={{base:"1rem",md:"1rem",lg:"unset"}}>
          <Heading >Whats Your Name</Heading>
            <Flex  w={{base:"50%",md:"60%",lg:"70%"}}  h={{base:"unset",md:"unset",lg:"30%"}}  justifyContent="center" alignItems="center" flexDir="column" gap="20px" >
              
            
              <Input type="text" outline="none"  onChange={(e)=>{setuser(e.target.value)}}  w="100%"/>
              <Link to="/chat"><Button p="20px"onClick={handlesub} bgColor="blue.400"  w="100%" >Submit</Button></Link>
            
            </Flex>
          
  
          </Flex>
          
        </Flex>
        
      </Flex>
   
    );
}

