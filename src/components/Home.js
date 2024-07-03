import './Home.css';
import joinImage from '../image/join.avif';
import readyImage from '../image/ready.avif';
import { Link } from 'react-router-dom';
function Home() {

  return <div>
    <div className="home-container">
      <div className="mt-4 p-5 fade-container text-dark rounded">
        <div className='text-container'>
          <div className='title'>Welcome To <span className='text-warning'>PostHub</span></div>
          <p className='w-75 text'>Discover, share, and connect with a community that values your voice.
            PostHub is your go-to platform for engaging interactions, creative expression, and meaningful connections.
            Join us and become part of a vibrant online community where you can truly be yourself.</p>
        </div>
      </div>
    </div>
    <div className='join-container'>
      <div className='row'>
        <div className='    col-md-6 col-sm-12 text-center'>
          <img className="img-circle" src={joinImage} width="400" height="400" alt="Join" />
        </div>
        <div className='col-md-6 col-sm-12 text-dark fs-5'>
          <h2 className='text-center pb-5'>Why Join <span className='text-warning fw-bold'>PostHub</span> ?</h2>
          <b>Community : </b><p>Join a community where everyone is welcome. Share your voice and connect with like-minded individuals.</p>
          <b>Creativity :</b><p>Express yourself freely and creatively. Our platform provides the tools you need to share your unique perspective.</p>
          <b>Security :</b><p>We prioritize your privacy and security. Our advanced measures ensure that your data is always protected.</p>
        </div>
      </div>
    </div>
    <div className='ready-container'>
      <div className='row'>
        <div className='col-md-6 col-sm-12 text-dark offset-1 fs-5'>
          <h1 className='text-center'>Get Started<span className='text-warning fw-bold'> PostHub</span></h1>
          <h6 className='pb-3'>Ready to dive in? Follow these simple steps to start your journey with us:</h6>
          <ol>
            <li><b>Sign Up : </b><p>If you’re new here, <Link to="/register">register</Link> for an account to join our community.</p></li>
            <li><b>Log In :</b><p>Already have an account?  <Link to="/login">Login</Link> and pick up where you left off..</p></li>
            <li><b>Explore :</b><p>Browse posts from other users and find content that interests you.</p></li>
            <li><b>Create :</b><p> Share your own posts and contribute to the community.</p></li>
            <li><b>Connect :</b><p>Engage with other users by commenting on posts and following interesting profiles.</p></li>
          </ol>
        </div>
        <div className='col-md-5 col-sm-12 text-center'>
          <img className="img-circle" src={readyImage} width="400" height="400" alt="Join" />
        </div>
      </div>
    </div>
    <div className='last-container'>
    <div className='row'>
      <div className='col-md-12 col-sm-12 text-dark text-center fs-5'>
        Thank you for being a part of <span className='text-warning'> PostHub </span>. We’re excited to have you with us!
      </div></div>
    </div>
     
  </div>


}
export default Home;