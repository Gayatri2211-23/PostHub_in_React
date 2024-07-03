import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";

function ChangePassword(){

    const [msg,setmsg]=useState();
    const data=useSelector(state=>state.userDetails.value);
    var old_password=useRef();
    var new_password=useRef();

    var updatePassword = async (event) => {
        event.preventDefault();
        var old = old_password.current.value;
        var nw = new_password.current.value;
        var obj={old_password:old,new_password:nw};
        var response = await Webservice.putAPICall(WebApi.userChangePassword,data.data.token,obj);
        console.log("change password response :"+JSON.stringify(response));
        setmsg(response.data.message);

    }

    return  <div className="container">
    <div className="col-md-6 p-5 offset-3" style={{backgroundColor:'#A7BEAE'}}>
        <h1 className="text-center fw-bold mb-4">Change Password</h1>
    <form onSubmit={updatePassword}>
     
    <div className="form-group">
           <input type="text" value="Old Password" readOnly className="form-control text-center mb-3 "/> 
           <input type="password" ref={old_password} className="form-control mb-3  text-center"/> 
        </div>
        <div className="form-group">
        <br/><input type="text" value="New Password" readOnly className="form-control text-center mb-3"/> 
           <input type="password" ref={new_password} className="form-control mb-3  text-center"/>  
        </div>
        <div className="form-group">
         <input type="submit" value="Change Password" className="btn btn-success form-control w-50 mb-5 offset-3"/> 
        </div>
    </form>
    <div className="border border-2 text-center p-4 bold fw-bolder fs-3">{msg}</div>
    </div>
</div>
}
export default ChangePassword;