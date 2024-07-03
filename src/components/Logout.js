import { useNavigate } from "react-router-dom";
import WebApi from "../service/WebApi";
import Webservice from "../service/Webservice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeUserInfo } from "../redux/Slice";


function Logout(){
  const data = useSelector(state=>state.userDetails.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>
    {
      logout();
    },[]);

  var logout = ()=>{
    var obj = {...data,isLoginStatus:false}
    dispatch(changeUserInfo(obj));
    console.log(data);
    console.log("Value is : "+data.isLoginStatus);
    console.log("Name is : "+data.data.name);
    if(data.isLoginStatus == true)
    {
        navigate("/")
    }
 }
    
}
export default Logout;