import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./success.css"
export default function Successpage(){
    return(
        <div>
            <div className="successbox">
                <div className="successflex">
                    <div className="successicon">
                        <AiFillCheckCircle/>
                    </div>
                    <div className="successdetail">
                        <h1>Thank You!</h1>
                        <h3>Payment done Successfully</h3>
                        <p>You will be redirected to the home page shortly</p>
                        <p>or Click here to return to home page</p>
                        <Link to="/"><button>Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}