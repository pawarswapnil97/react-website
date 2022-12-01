import React from 'react';
import {NavLink} from 'react-router-dom';
function Menu(){
  return(
    <>
    <section className='main '>
     <div className='container-fluid'>
       <div className='row'>
         <div className='col-md-2 text-center'>
         <img src='../Img/logo.png' className='logo d-none d-md-inline'/>
         </div>
         <div className='col-md-7 '>
         <p className='ml-5 mt-1'><i class="bi bi-envelope-fill mr-2 "></i> Support@gloxy.com <i class="bi bi-telephone-fill ml-2"></i> +1-325-555-0156</p>
         </div>
         <div className='col-md-3 d-none d-md-inline'>
           <ul>
             <li className='d-inline'><i class="bi bi-facebook ml-3 sicon mt-4"></i></li>
             <li className='d-inline'><i class="bi bi-twitter ml-3 sicon mt-4"></i></li>
             <li className='d-inline'><i class="bi bi-google ml-3 sicon mt-4"></i></li>
             <li className='d-inline'><i class="bi bi-linkedin ml-3 sicon mt-4"></i></li>
           </ul>
         
         </div>
       </div>
     </div>
     </section>
     <section className='sticky-top'>
       <div className='container-fluid p-o menubar '>
         <div className='row '>
           <div className='col-md-2'></div>
           <div className='col-md-10'>
           <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 

  <div className="collapse navbar-collapse text-center" id="navbarSupportedContent ">
    <ul className="navbar-nav  ml-auto mr-auto  p-2">
    <li className="nav-item  ">
      <NavLink className="nav-link " to='/'>HOME </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to='/Service'>SERVICE</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to='/Works'>WORKS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/About'>ABOUT</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/Team'>TEAM</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/Pricing'>PRICING</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/Blog'>BLOG</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/Contact'>CONTACT</NavLink>
      </li>
      <li className="nav-item mt-2">
        <i className="bi bi-search"></i>
      </li>
     
    </ul>
  
  </div>
</nav>
           </div>
         </div>
       </div>
     </section>
    
    </>
  )
}
export default Menu;