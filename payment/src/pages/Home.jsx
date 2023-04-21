import Navbar from "../Navbar/Navbar";
import img1 from "../images/bac.jpg"
import "./home.css"
export default function Home(){
    return(
        <div className="home">
            <Navbar/>
            <div className="homepage">
                <div className="img">
                <img src={img1} alt="" />
                </div>
                <div className="homecont">
                <h1>Welcome To Our Website</h1>
                <h1>Payment Gateway Integration Demo</h1>
                </div>
            </div>
        </div>
    )
}