import { Button, Flex, Input } from '@chakra-ui/react'
import { useEffect, useState , useRef } from 'react'
import io from "socket.io-client"
import { Box, Text } from '@chakra-ui/react';
import ScrollToBottom from 'react-scroll-to-bottom';

let socket 
export default function Chat() {

  const [message,setmessage] = useState("")
  
  const [announcement,setannouncement] = useState([])
  const [chats,setchats] = useState([])
  const url = "https://glamorous-candy-chime.glitch.me/"
  
  const [user, setuser] = useState(localStorage.getItem("user"))

  useEffect(() => {


    socket = io(url, { transports: ['websocket'] });
    socket.on("connect", () => {
      // alert(`connected`)
    })

    socket.emit("newjoined", { user })
  
   

      socket.on("userjoined", ( data) => { 
        // setchats([...chats,data])
        setannouncement((prevAnnouncement) => [...prevAnnouncement, data]);
        console.log(announcement)
    
        })
    
        socket.on("userdisconnect" ,(data)=>{
          setannouncement((prevAnnouncement) => [...prevAnnouncement, data]);
          console.log(announcement)
          
      })

  }, [])



useEffect(() => {
  socket.on("messagerec",(data)=>{
    setchats([...chats,data])





  
  })
}, [chats])

  let submitmessage = ()=>{
    if(socket){
    socket.emit("messagesent",({user:user , message:message , id:socket.id}))

    }
  }


  

  return (
    <Flex  h="100vh" justifyContent="center" alignItems="center">
      <Flex  h="80%" w="20%" flexDir="column">
        {announcement.map((val)=>{
          return(
            <>
            <Text color="cyan">{`${val.message}`}</Text>
            </>
          )
        })}
        
      </Flex>
      <Flex w="50%"  h="80%" flexDir="column" borderRadius="8px 10px 70px 0px" overflow="hidden" border="2px solid cyan">
        <Flex h="90%" flexDir="column"  overflowY="auto">
          
          {chats.map((val) => {
            let isMe = false
            return (
              <>
              
                <Box
           
                  maxh="80%"
                  w="300px"
                  px="20px"
                  py="8px"
                  borderRadius="lg"
                  bg={isMe ? 'green.200' : 'gray.100'}
                  alignSelf={isMe ? 'flex-end' : 'flex-start'}
                  m="20px"

                >
                  {!isMe && <Text fontSize="xl" fontWeight="semibold" color="blue">{val.user}</Text>}
                  <Flex  flexDir="column" >
                    <Text fontSize="xl" color="black" alignSelf="flex-end">{val.message}</Text>
            
                    </Flex>

                </Box>
              </>
            )
          })}

        </Flex>
        <Flex h="10%"  p="10px">
          <Input h="full" w="85%" type='text' placeholder="Enter Your Message" onChange={(e)=>{setmessage(e.target.value)}} />
          <Button h="full" w="15%" ml="10px" onClick={submitmessage}>Send</Button>


        </Flex>

      </Flex>

    </Flex>
  )
}
