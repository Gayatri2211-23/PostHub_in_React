import './Design.css';
function Contact(){
    return<div className="container" style={{marginTop:'100px'}}>
    <h1 className="text-center" style={{textDecoration:"underline", fontFamily:"Callibri"}}>CONTACT US</h1>
    <br/><br/>
    <div className="row">
        <div className="col-md-6 col-md-offset-3">
                <b>Get In Touch</b><br/>
                <p>If you have any questions, feedback, or need assistance, please don't hesitate to get in touch with us. </p>
                <p>We're here to help! </p>
                <br/>
                <b>Customer Support Email:</b><br/><br/>
                <p>support@yourshop.com</p><br/>
                <b>Phone :</b><br/>
                <p>1-800-123-4567</p><br/>
                <b>Address :</b><br/>
                <p>YourShop Inc.<br/>123 Shopping <br/>Street<br/>Retail City, <br/>ST 12345</p><br/>
                <b>Office Hours:</b><br/>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
                <b>Feedback</b><br/>
                <p>Your feedback is valuable to us. If you have any suggestions or comments about our platform, please fill out our Feedback Form.</p><br/>
                <p> Thank you for being a part of our community!</p><br/>
        </div>
        <div className="col-md-5 offset-1">
              <div className="container feedback border border-3 rounded  p-5" >
                <div className="text-center fs-4"><b>Feedback Form</b></div><br/>
                <form>
                    <label className="form-group mb-3">
                        Your Name :
                    </label><br/>
                    <input type="text" id="name" className="form-control"></input>
                    <br/>
                    <label className="form-group mb-3">
                        Your Email :
                    </label>
                    <input type="email" id="email" className="form-control"></input>
                    <br/>
                    <label className="form-group mb-3">
                        Message :
                    </label>
                    <textarea rows={5} cols={20}   id="comment" className="form-control"></textarea><br/><br/>
                    <button type="button" className="btn btn-info btn-block offset-5 rounded">Submit</button>
                </form>
              </div><br/><br/><br/><br/><br/><br/>
        </div>
        
    </div>
  </div>
}
export default Contact;