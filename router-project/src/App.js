
import './App.css';
import {Route, Routes} from "react-router-dom"
import Banner from "./Components/Banner"
import Navbar from './Components/Navbar';
import Product from './Pages/Product';
// import Body from './Components/Body';

import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import Products from './Pages/Products';

import Body from './Components/Body';
function App() {
  return (
    <div >
      <Banner/>
      <Navbar/>
      
      <Routes>
          <Route  default path="/" element={<Body/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
