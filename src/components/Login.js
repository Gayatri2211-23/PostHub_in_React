import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";
import { useDispatch } from "react-redux";
import { changeUserInfo } from "../redux/Slice";
import './Design.css'

function Login() {

  const [msg, setmsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  var email = useRef();
  var password = useRef();

  var loginUser = async (event) => {
    event.preventDefault();
    
    var em = email.current.value;
    var pwd = password.current.value;
    var obj = { email: em, password: pwd };

    var response = await Webservice.postAPICall(WebApi.loginUser, obj);
    console.log("Response is : " + response);
    console.log("String Response is : " + JSON.stringify(response));

    var resp = response.data;

    if (resp.status) {
      var info  = {...resp,isLoginStatus:true};
      dispatch(changeUserInfo(info));
      navigate('/userhome');
    }
    else {
      setmsg(resp.message);
      
    }
  }


  return <div className="container">
    
    <div className="container login-container">
       
       <h3 className="pt-4 text-center">Welcome Back To<span style={{color:"yellow",fontWeight:"bolder"}}> PostHub</span> </h3>

    <form onSubmit={loginUser} className="container mt-5" style={{ fontSize: '20px',paddingLeft:"80px" }}>

      <div className="mb-3 pl-5 ">
        <label htmlFor="exampleInputEmail1" className="form-label pl-4">Enter Email address</label>
        <div><input type="email" className="form-control input-hover w-75" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email} /></div>
        <div id="emailHelp" className="form-text" style={{ fontSize: '15px' }}>We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-5">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <div><input type="password" className="form-control w-75"  ref={password}  id="exampleInputPassword1" /></div>
      </div>&emsp;
      <input type="submit" className="btn btn-primary offset-1 w-50" value='Log In' />
    </form>
    <div className="text-center mt-4 mb-4">
      <span>If you have not Register ? <Link to="/Register">Click Here !</Link></span></div>
  </div>
   <div className="text-danger text-center p-4" style={{fontSize:"40px"}}>{msg}</div>
  </div>

}
export default Login;