// import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import "./productpage.css"
import {AiFillStar} from "react-icons/ai"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Productpage(){
    const {state}=useLocation();
    const initpayment=(data)=>{
        const options={
            key:"rzp_test_TfoKgToxmsfAFx",
            amount:data.amount,
            currency:data.currency,
            title:state.title,
            description:"",
            image:state.src,
            order_id:data.id,
            handler:async(response)=>{
                try{
                    const verifyUrl ="http://localhost:5001/api/payment/verify";
                    const {data}=await axios.post(verifyUrl,response);
                    if(data){
                        alert("payment successfully");
                        window.location.replace("/success");
                    }
                }
                catch(error){
                    console.log(error);
                }
            },
            theme:{
                color:"#3399cc",
            }
        };
        const rzp1=new window.Razorpay(options);
        rzp1.open();
    }
    const handlepayment=async()=>{
        try{
            const orderUrl="http://localhost:5001/api/payment/order";
            const {data } =await axios.post(orderUrl,{amount:state.price});
            console.log(data);
            initpayment(data.data);
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
        {/* <Navbar/> */}
         <div className="headerr" style={{paddingTop:"10px",paddingBottom:"20px"}}>
        <div className="link"><Link to="/product"><h2><BsFillArrowLeftCircleFill/> <span>back</span></h2></Link></div>
            <div className="producttflex">
                <div className="producttcont">
                    <div className="producttimg">
                    <img src={state.src} alt="" /> 
                    </div>
                    <div className="producttdetail">
                    <h1>{state.title}</h1>
                    <i><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, quo ex eum necessitatibus ratione itaque veritatis consequatur sequi accusantium non a? Quia vero voluptate officia porro cumque voluptatibus pariatur veritatis inventore dicta praesentium amet sint reiciendis perferendis, eius ab reprehenderit quibusdam esse iusto, recusandae voluptatem, ut nesciunt voluptatum! Consequuntur, repellat.</p>
                    <h2>Price : {state.price}</h2>
                    <button onClick={handlepayment}>Buy Now</button>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}