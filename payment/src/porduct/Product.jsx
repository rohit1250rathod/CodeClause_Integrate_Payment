import "./Product.css"
import img1 from "../images/shirt.jpg"
import img2 from "../images/shirt1.jpg"
import img3 from "../images/shirt2.jpg"
import img4 from "../images/shirt3.jpg"
import img5 from "../images/jean.jpg"
import img6 from "../images/jean2.jpg"
import img7 from "../images/jean.jpg"
import img8 from "../images/jean2.jpg"
import Navbar from "../Navbar/Navbar"
import { useNavigate } from "react-router-dom"
export default function Product(){
    const navigate=useNavigate();
    const createhandle=(title,price,img)=>{
        navigate('/productpage',{state:{
            title:title,
            price:price,
            src:img
        }})
    }
    return(
        <div>
        <Navbar/>
        <div className="Producthead">
            <h1>Men Shirt</h1>
            <div className="productbox">
                <div className="productflex">
                    <div className="productcont">
                        <div className="productimg">
                            <img src={img4} alt="" />
                        </div>
                        <div className="productdetail">
                            <h3>Casual Plaid</h3>
                            <h3>430</h3>
                            <button onClick={()=>{createhandle("Casual Plaid",430,img4)}}>View Product</button>
                        </div>
                        <div className="slider"></div>
                    </div>
                    <div className="productcont">
                        <div className="productimg">
                            <img src={img1} alt="" />
                        </div>
                        <div className="productdetail">
                            <h3>Stylish Shirt</h3>
                            <h3>391</h3>
                            <button onClick={()=>{createhandle("Stylish Shirt",391,img1)}}>View Product</button>
                        </div>
                        <div className="slider"></div>
                    </div>
                    <div className="productcont">
                        <div className="productimg">
                            <img src={img2} alt="" />
                        </div>
                        <div className="productdetail">
                            <h3>Casual Shirt</h3>
                            <h3>399</h3>
                            <button onClick={()=>{createhandle("Casual Shirt",399,img2)}}>View Product</button>
                        </div>
                        <div className="slider"></div>
                    </div>
                    <div className="productcont">
                        <div className="productimg">
                            <img src={img3} alt="" />
                        </div>
                        <div className="productdetail">
                            <h3>Premium Shirt</h3>
                            <h3>550</h3>
                            <button onClick={()=>{createhandle("Premium Shirt",550,img3)}}>View Product</button>
                        </div>
                        <div className="slider"></div>
                    </div>
                </div>
            </div>
            <h1>Men Jean</h1>
            <div className="productbox">
                <div className="productflex">
                    <div className="productcont">
                        <div className="productimg">
                            <img src={img5} alt="" />
                        </div>
                        <div className="productdetail">
                            <h3>Denim Jean</h3>
                            <h3>799</h3>
                            <button onClick={()=>{createhandle("Denim Jean",799,img5)}}>View Product</button>
                        </div>
                        <div className="sliderr"></div>
                    </div>
                    <div className="productcont">
                        <div className="productimg">
                            <img src={img6} alt="" />
                        </div>
                        <div className="productdetail">
                            <h3>Levis</h3>
                            <h3>1200</h3>
                            <button onClick={()=>{createhandle("Levis",1200,img6)}}>View Product</button>
                        </div>
                        <div className="sliderr"></div>
                    </div>
                    <div className="productcont">
                        <div className="productimg">
                            <img src={img7} alt="" />
                        </div>
                        <div className="productdetail">
                            <h3>Mufti Jean</h3>
                            <h3>2000</h3>
                            <button onClick={()=>{createhandle("Mufti Jean",2000,img7)}}>View Product</button>
                        </div>
                        <div className="sliderr"></div>
                    </div>
                    <div className="productcont">
                        <div className="productimg">
                            <img src={img8} alt="" />
                        </div>
                        <div className="productdetail">
                            <h3>Flying Machine</h3>
                            <h3>1699</h3>
                            <button onClick={()=>{createhandle("Flying Machine",1699,img8)}}>View Product</button>
                        </div>
                        <div className="sliderr"></div>
                    </div>
                </div>
            </div>
            
        </div>
        <footer>
            <h4 style={{textAlign:"center"}}>Created by @Rohit_Rathod</h4>
        </footer>
        </div>
    )
}