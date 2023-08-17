import Navigation from "./components/Navigation.js";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/Signup.js";
import Chat from "./pages/Chat.js";
import About from "./pages/About.js"
import ContactPage from "./pages/ContactPage.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { useSelector } from "react-redux";
import {useState} from "react";
import { AppContext, socket } from "./context/appContext";

function App() {
   const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);
   
  return (
      <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers,
       messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
    <BrowserRouter><Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/login" element={<Login/>}/>
           <Route path="/SignUp" element={<SignUp/>}/> */}
                 {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/SignUp" element={<SignUp />} />
                        </>
                    )}
            <Route path="/Chat" element={<Chat/>}/>
              <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<ContactPage/>}/>

    </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
