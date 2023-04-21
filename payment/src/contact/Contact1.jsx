import Navbar from "../Navbar/Navbar";
import img1 from "../images/contact.jpg"
import "./Contact.css"
export default function Contact1(){
    return(
        <div>
            <Navbar/>
            <div className="Contactform">
                <h1>Get In Touch</h1>
                <div className="Contact-flex">
                    <div className="Contact-box">
                        <div className="Contact-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="Contact-form">
                            <div className="label">
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder="Enter Name" />
                            </div>
                            <div className="label">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="Enter Email" />
                            </div>
                            <label htmlFor="">Message </label><br />
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter Message" className="textt"></textarea>
                            <br /><button className="Submit">Submit</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}