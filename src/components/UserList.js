import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";
import { json } from "react-router-dom";

function UserList(){

    const data = useSelector(state=>state.userDetails.value);
    console.log(data);
    const[userList,setUserList]=useState([]);

    useEffect(()=>{
        loadUserList();
    },[]);

    var loadUserList= async ()=>{
        var response = await Webservice.getAPICall(WebApi.userList,data.data.token);
        console.log(" User list response :"+response);
        console.log(" string in user list response : "+JSON.stringify(response));
        var resp=response.data;
        if(resp.status){
            setUserList(resp.data);
        }
    }

    return <div className="p-5 rounded" style={{backgroundColor:'#D3C5E5'}}>
        <h1 className="text-center mb-5 fw-bold"><span className="text-warning">PostHub</span> User List</h1>
        {userList.map((user)=>{
            return<div className="row border border-1 p-4 pl-5 mt-2 w-75 text-center" style={{marginLeft:"200px"}}>
                <div className="col-md-4"><img src={user.image} alt='Not Found' className="img-rounded" width={80} height={80}/></div>
                <div className="col-md-6"><b>{user.name}</b></div>
                <div className="col-md-2"><button className="btn btn-success ">Send Request</button></div>
                </div>
        })}
    </div>
}
export default UserList;