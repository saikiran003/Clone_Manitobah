
import './App.css';
import {Routes,Route} from "react-router-dom"
import Banner from "./Components/Banner"
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Womens from './Pages/Womens';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
function App() {
  return (
    <div >
      <Banner/>
      <Navbar/>
      <Routes>
        <Route path="/women" element={<Womens/>}/>
      </Routes>
      <Routes>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;
