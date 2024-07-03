import { useRef, useState } from "react";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";
import { useSelector } from "react-redux";

function UploadPost(){
 
    const data = useSelector(state=>state.userDetails.value);
    console.log(data);
    const [mesg,setmesg]=useState();
    var msg = useRef();
    var media = useRef();

    var postSave = async (event) => {
        event.preventDefault();
        var response=undefined;
        if(media.current.files[0] != undefined)
            {
                    var fdata =new FormData();
                    fdata.append("image",media.current.files[0] );
                    fdata.append("message",msg.current.value);
                    console.log(data.data.token);
                    response=await Webservice.postAPIAuthCall(WebApi.userPostSave,data.data.token,fdata);
                    console.log("User post with message response : "+JSON.stringify(response));
                    setmesg(response.data.message);

            }  
            else
            {
                var message = msg.current.value;
                var obj={message:message};
                console.log(data.data.token);
                var response = await Webservice.postAPIAuthCall(WebApi.userPostSave,data.data.token,obj);
                console.log("UserPost save response "+JSON.stringify(response));
                setmesg(response.data.message);
            }

    }

    return<div className="container">
     <h1 className="text-center mb-5">Upload Post</h1>
    <div className="row  text-center">
      <div className="border border-2 p-5">

         <form onSubmit={postSave}>
            <div className="form-group">
                <textarea rows={10} cols={50} ref={msg} className="form-control w-75 offset-2"></textarea>
            </div><br/>
            <div className="form-group">
                <input type="file" ref={media} className="btn btn-success form-control offset-1 w-50"/>
            </div><br/>
            <div className="form-group">
                <input type="submit" value="upload Post" className="btn btn-danger offset-1 form-control w-50"/>
            </div>
         </form>
         <h3 className="text-center mt-4 border-border-2 text-dark">{mesg}</h3>
      </div>
    </div>
    </div>
}
export default UploadPost;