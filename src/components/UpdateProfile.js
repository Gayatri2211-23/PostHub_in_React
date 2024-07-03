import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";

function UpdateProfile(){
 
    const [userDetails,setUserDetails]=useState({});
    const [ msg , setmsg]=useState('');
    const data = useSelector(state=>state.userDetails.value);
    console.log(data);

    var name=useRef();
     var email=useRef();
     var phone=useRef();
     var gender = useRef();


    useEffect(()=>{
        loadUserProfile();
    },[]);
     
    var loadUserProfile= async ()=>{
        var response = await Webservice.getAPICall(WebApi.loginUserInfo,data.data.token);  
        console.log("response "+response);
        console.log("string in user response : "+JSON.stringify(response));
        var resp=response.data;
        if(resp.status){
            setUserDetails(resp.data);
            console.log(JSON.stringify(userDetails));
           phone.current.value= userDetails.phone;
           gender.current.value= userDetails.gender;
           name.current.value= userDetails.name;
        }
    }

    
    var updateUser= async (event)=>{
        event.preventDefault();
        var nm=name.current.value;
        var ph = phone.current.value;
        var gen = gender.current.value;
        var ob = {name:nm,phone:ph,gender:gen}
        var response = await Webservice.putAPICall(WebApi.userUpdate,data.data.token,ob);
        console.log("updated response : "+JSON.stringify(response));
        setmsg(response.data.message);
    }


    return <div className="container">
        <div className="col-md-6 p-5 offset-3" style={{backgroundColor:'#A7BEAE'}}>
            <h1 className="text-center fw-bold mb-4">Personal Details</h1>
        <form onSubmit={updateUser}>
         
        <div className="form-group d-flex mb-3">
               <input type="text" value="ID" readOnly className="form-control w-25 d-inline-block"/>&emsp;&emsp;
               <input type="text" value={userDetails.id} className="form-control w-75 d-inline-block" readOnly/> 
            </div>
            <div className="form-group d-flex mb-3">
            <br/><br/><input type="text" value="Name" readOnly className="form-control w-25 d-inline-block"/>&emsp;&emsp;
               <input type="text"  ref={name} className="form-control w-75 d-inline-block"/>  
            </div>
            <div className="form-group d-flex mb-3">
            <input type="text" value="Email" readOnly className="form-control w-25 d-inline-block"/>&emsp;&emsp;
               <input type="text" value={userDetails.email} className="form-control w-75 d-inline-block" readOnly/>  
            </div>
            <div className="form-group d-flex mb-3">
            <input type="text" value="Phone" readOnly className="form-control w-25 d-inline-block"/>&emsp;&emsp;
               <input type="text" ref={phone} className="form-control w-75 d-inline-block"/>  
            </div>
            <div className="form-group d-flex mb-5">
            <input type="text" value="Gender" readOnly className="form-control w-25 d-inline-block"/>&emsp;&emsp;
               <input type="text" ref={gender} className="form-control w-75 d-inline-block"/>  
            </div>
            <div className="form-group mb-5 offset-3">
             <input type="submit" value="Update" className="btn btn-success form-control w-75"/> 
            </div>

            

        </form>

        <div className="border border-2 text-center p-4 bold fw-bolder fs-3">{msg}</div>
        </div>
    </div>
}
export default UpdateProfile;