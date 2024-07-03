import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";
import { Link } from "react-router-dom";

function UserProfile(){

    const [userDetails,setUserDetails]=useState({});
    const [msg, setmsg] = useState('');
    var pic=useRef();

    const data = useSelector(state=>state.userDetails.value);
     
    useEffect(()=>{
        loadUserProfile();
    },[])

    var loadUserProfile= async ()=>{
        var response = await Webservice.getAPICall(WebApi.loginUserInfo,data.data.token);  
        console.log("response "+response);
        console.log("string in user response : "+JSON.stringify(response));
        var resp=response.data;
        if(resp.status){
            setUserDetails(resp.data);
        }
    }

    var uploadProfilePic= async (event)=>{
        event.preventDefault();

        const fdata=new FormData();
        var userpic = pic.current.files[0];
        
        fdata.append('image',userpic);
        var response = await Webservice.putAPICall(WebApi.userUploadPic,data.data.token,fdata);

        console.log("user pic response :"+response);
        console.log("string to user pic response : "+JSON.stringify(response));
        setmsg(response.data.message);

    }

    return <div className="container-fluid " style={{backgroundColor:'#E7E8D'}}>
        <div className="row">

        <div className="col-md-6 p-5 text-center" style={{backgroundColor:'#A7BEAE'}}>
        <form onSubmit={uploadProfilePic}>
            <div className="form-group mb-5 ">
                <img src={userDetails.image} alt='Not Found' width={300} height={500} className="img-thumbnail"/>
            </div>
            <div className="form-group mb-5">
                   <input type="file" ref={pic} className="btn btn-success form-control w-50"/>
            </div>
            <div className="form-group mb-5">
                   <input type="submit" value="upload Profile Pic" className="btn btn-success w-50 form-control"/>
            </div>
        </form>
        <div className="form-group mb-5 offset-3">
           
           </div>
        <div><b>{msg}</b></div>
        </div>

        <div className="col-md-6 p-5" style={{backgroundColor:'#A7BEAE'}}>
        <form>
         
            <div className="form-group mb-5">
               <input type="text" value={userDetails.id} readOnly className="form-control border border-3 w-75"/>  
            </div>
            <div className="form-group mb-5">
               <input type="text" value={userDetails.name} readOnly className="form-control border border-3 w-75"/>  
            </div>
            <div className="form-group mb-5">
               <input type="text" value={userDetails.email} readOnly className="form-control border border-3 w-75"/>  
            </div>
            <div className="form-group mb-5">
               <input type="text" value={userDetails.phone} readOnly className="form-control border border-3 w-75"/>  
            </div>
            <div className="form-group mb-5">
               <input type="text" value={userDetails.gender} readOnly className="form-control border border-3 w-75"/>  
            </div>
            <div className="form-group mb-5">
            <Link to="/updateProfile"> <button type="submit" className="btn btn-success form-control w-75">Update Profile</button></Link><br/><br/>
            <Link to="/changePassword" ><div className="btn btn-success form-control w-75">Change Password</div></Link>
            </div>
        </form>
        </div>
        </div>
    </div>


}
export default UserProfile;