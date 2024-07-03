import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";

function Register() {


    const [msg, setmsg] = useState('');
    var navigate = useNavigate();

    var name = useRef();
    var email = useRef();
    var phone = useRef();
    var gender = useRef();
    var password = useRef();

    var registerUser = async (event) => {
        event.preventDefault();
        var nm = name.current.value;
        var em = email.current.value;
        var ph = phone.current.value;
        var pwd = password.current.value;
        var gen = gender.current.value;
        var obj = { name: nm, email: em, phone: ph, gender: gen, password: pwd }

        var response = await Webservice.postAPICall(WebApi.registerUser, obj);
        console.log("Response is : " + response);
        console.log("String Response is : " + JSON.stringify(response));

        var resp = response.data;
        if (resp.status) {
            navigate("/login");
        }
        else {
            setmsg(resp.data[0].message);
        }
    };

    return <div className="container ">

        <div className="container register-container">

        <div className="text-center fs-3 pt-4"><b>Create Account</b></div><br/>
               
            <form onSubmit={registerUser} style={{ fontSize: '20px' }}>

                <div className="form-group mt-3 m-5">
                    <label htmlFor="name" className="form-label ml-4">Enter Name</label>
                    <div> <input type="text" className="form-control  input-hover" id="name" ref={name} /></div>
                </div>

                <div className="form-group m-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Email address</label>
                    <div><input type="email" className="form-control input-hover" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email} /></div>
                    <div id="emailHelp" className="form-text" style={{fontSize:'15px'}}>We'll never share your email with anyone else.</div>
                </div>

                <div className="form-group m-5">
                    <label htmlFor="phone" className="form-label">Enter Mobile No.</label>
                    <div><input type="text" className="form-control input-hover" id="phone" ref={phone} /></div>
                </div>

                <div className="form-group m-5">
                    <label>Select Gender</label> <div>
                        <select className="form-control text-center input-hover" ref={gender} >
                            <option value=''>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='others'>Others</option>
                        </select></div>
                </div>

                <div className="form-group m-5">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <div> <input type="password" className="form-control input-hover" id="InputPassword" ref={password} /></div>
                </div>

                <div className="form-group mb-5 mt-4">
                    <div className="align-center mx-5 offset-1 px-5">  <input type="submit" value="Register" className="btn btn-success form-control" /></div>
                </div>
                
                <div className="text-danger text-center p-4" style={{fontSize:"20px"}}>{msg}</div>
            </form>
        </div>
       

    </div>
}

export default Register;