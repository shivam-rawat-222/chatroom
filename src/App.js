import Chat from "./Components/Chat";
import Mainfile from "./Components/Mainfile";
import {Router , Routes , Route} from "react-router-dom"

function App() {
  return(

      <Routes>
        <Route exact path="/" element={  
  <Mainfile/>}>

        </Route>
        <Route exact path="/chat" element={<Chat/>}>

        </Route>
      </Routes>

  
  )
 
}

export default App;
