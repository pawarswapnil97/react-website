import React  from "react";
import Menu from './Menu.js';
import Home from './Home.js';
import About from './About.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import Pricing from './Pricing.js';
import Service from './Service.js';
import Team from './Team.js';
import Works from './Works';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App1(){
   return(
      <>
      <Router>
       <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/Works" element={<Works/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Team" element={<Team/>}></Route>
        <Route path="/Pricing" element={<Pricing/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      
       
      </Routes>
    </Router>
      </>
   )
}
export default App1;