import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";

function UserPost()
{

    
    const data = useSelector(state=>state.userDetails.value);
    const[userPost,setUserPost]=useState([]);
     

    useEffect(()=>{
        loadUserPost();
    },[]);

    var loadUserPost= async ()=>{
        var response = await Webservice.getAPICall(WebApi.loginUserPostList,data.data.token);
        console.log(" string in user Post response : "+JSON.stringify(response));
        var resp=response.data;

        if(resp.status){
                setUserPost(response.data.data);
                console.log(userPost);
            }  
        }

    

    return <div className="container">
		<div className="container-fluid text-center text-success mb-5 p-3 fs-1 fw-bold text-decoration-underline"  >
			<b>MY POST</b><br/>
        </div>  

		 {userPost.map((obj)=>{
			return<div className="row border-border-3 text-center">

				<div className="col-md-5 text-center p-5">
				<img src={data.data.image}  height={100} width={100} 
                   className="rounded-circle"/>
                   <br/><br/>
                   <b>{data.data.name}</b><br/><br/>
                   <b>Post Date :  </b><b>{obj.postdate}</b><br/><br/>
				</div>

                  <div className="col-md-7 text-center">
					
                    <img src={obj.postfile}  height={400} width={400} 
                   className="img-thumbnail"/><br/><br/>
                   <b>{obj.message}</b><br/><br/>
					</div>
                    <hr/>
			</div>

		 })}
	</div>
}
export default UserPost;