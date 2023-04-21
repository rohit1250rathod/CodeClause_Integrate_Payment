import {Link} from "react-router-dom"
import "./Navbar.css"
export default function Navbar(){
    return(
        <div className="head">
            <header>
                <h1>RPay</h1>
            </header>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/product"><li>Product</li></Link>
                    <Link to="/contact"><li>Contact us</li></Link>
                    <Link to="/about"><li>About us</li></Link>
                </ul>
            </nav>
        </div>
    )
}