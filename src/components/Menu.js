import { Link } from "react-router-dom";

function Menu(){

    return <div className="container text-center">
        <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark fixed-top" style={{fontSize:"20px"}}>
  <div className="container-fluid">
  <div className="navbar-brand" style={{color:'yellow' , fontSize:'40px', fontWeight:'bolder'}}>PostHub</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active mx-3" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3" to="/login">Login &nbsp;<i className="fas fa-sign-in-alt"></i></Link>
        </li>
        <li className="nav-item mx-3"><Link  className="nav-link" to="/register">Register
          &nbsp;<i className="fas fa-user"></i> 
      </Link></li>
      </ul>
    </div>
  </div>
        </nav>
    </div>
}
export default Menu;