import { Link } from "react-router-dom";

function About() {
    return <div className="container" style={{ marginTop: "100px" }}>
        <h1 className="text-center" style={{ textDecoration: "underline", fontFamily: "Callibri" }}>ABOUT</h1>
        <br />
        <p className="lh-lg"> Welcome to <b>PostHub</b>, a vibrant online community where you can connect, share, and engage with others. Our mission is to provide a user-friendly platform that brings people together through meaningful interactions and shared experiences.</p>
        <br />
        <p> We believe in the power of community and the importance of every individual's voice.</p>
        <br />
        <h4>What We Offer</h4>
        <p>At PostHub, we offer a variety of features designed to enhance your online experience:</p>

        <b>User Authentication</b><br />
        <ul>
            <li><b>Login & Register : </b> Secure and straightforward processes to access your account or join our community.</li>
        </ul>
        <br />

        <b>Content Creation & Management</b>
        <ul>
            <li><b>View Posts : </b>Discover posts from users all around the world.</li>
            <li><b>View Specific Posts : </b>Dive deep into individual posts to see detailed content and comments.</li>
            <li><b>Upload Posts : </b>Share your thoughts, experiences, and creativity with images and messages.</li>
        </ul>
         <br />
         
        <b>Profile Management</b>
         <ul>
            <li><b>Manage Profile :</b>  Personalize your profile, update your information, and maintain your privacy settings.</li>
            <li><b>View Specific User Posts :</b>Explore posts from specific users and get to know them better.</li>
        </ul>
        <br />

       <b>Community Interactiont</b>
         <ul>
            <li><b>Commenting :</b>Engage with posts by leaving comments and starting conversations.</li>
            <li><b>Sharing :</b>Share posts with your friends and followers on other social media platforms.</li>
        </ul>
        <br />

        <b>Account Security</b>
         <ul>
            <li><b>Logout :</b>Safely log out of your account to ensure your data is secure..</li>
        </ul>
        <br />

        <b>Join Us</b><br/>
        <p>We invite you to join our growing community and be a part of something special. Whether you're here to share your thoughts, discover new perspectives, or connect with others, [Your Platform Name] is the place for you.</p>
        <br/>

        <b>Contact Us</b><br/>
        <p>Have questions or need assistance? Visit our <Link to="/contact">Contact Us</Link> page for more information on how to reach us.</p>
        <br/>

        <b>Thank you for being part of our journey. Together, we can create a vibrant and engaging online community.</b>
        
        <br /><br /><br />
    </div>
}
export default About;
