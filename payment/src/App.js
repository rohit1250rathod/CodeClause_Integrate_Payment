import './App.css';
import Home from "./pages/Home"
import Product from "./porduct/Product"
import Productpage from "./porduct/Productpage"
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Successpage from './pages/Successpage';
import Contact1 from './contact/Contact1';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/productpage" element={<Productpage/>}/> 
        <Route path="/success" element={<Successpage/>}/>
        <Route path="/contact" element={<Contact1/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
