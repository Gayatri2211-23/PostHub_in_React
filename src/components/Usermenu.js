import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Usermenu() {

  const data = useSelector(state => state.userDetails.value);


  return <div className="container text-center">
    <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark fixed-top" style={{ fontSize: "20px" }}>
      <div className="container-fluid">
        <div className="navbar-brand" style={{color:'yellow' , fontSize:'40px', fontWeight:'bolder'}}>ChatHub</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active  mx-3" aria-current="page" to="/userhome">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mx-3" to="/UserProfile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mx-3" to="/userList">UserList</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mx-3" to="/userPost">MyPost</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mx-3" to="/logout">Logout &nbsp;<i className="fas fa-sign-out-alt"></i></Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item-right ">
              <Link style={{textDecoration: 'none' }} className=" d-flex justify-content-end align-items-end">
                <img src={data.data.image} height={50} width={50} className="rounded-circle" />
                &nbsp;&nbsp;<span className="text-light" >{data.data.name}</span>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
}
export default Usermenu;