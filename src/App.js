import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Userhome from "./components/Userhome";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Usermenu from "./components/Usermenu";
import Logout from "./components/Logout";
import UserProfile from "./components/UserProfile";
import UserList from "./components/UserList";
import UploadPost from "./components/UploadPost";
import UpdateProfile from "./components/UpdateProfile";
import ChangePassword from "./components/ChangePassword";
import UserPost from "./components/UserPost";
import About from "./components/About";
import Contact from "./components/Contact";

function App(){
  const data = useSelector(state=>state.userDetails.value);
  
  useEffect(()=>{
    console.log("1234567890");
  },[])
  
  return <div>
   { data.isLoginStatus ? <Usermenu/>:<Menu/>}
    
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/userhome" element={<Userhome/>}></Route>
    <Route path="/Register" element={<Register/>}></Route>
    <Route path="/error" element={<Error/>}></Route>
    <Route path="/logout" element={<Logout/>}></Route>
    <Route path="/userProfile" element={<UserProfile/>}></Route>
    <Route path="/userList" element={<UserList/>}></Route>
    <Route path="/uploadPost" element={<UploadPost/>}></Route>
    <Route path='/updateProfile' element={<UpdateProfile/>}></Route>
    <Route path='/changePassword' element={<ChangePassword/>}></Route>
    <Route path='/userPost' element={<UserPost/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>


   </Routes>
   <Footer/>
  </div>
}
export default App;