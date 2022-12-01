import React from 'react';
import App from './App.js';

var data=[
   { 
      title:'Beautiful Designs',
      text:'We strive to embrace and drive change in our industry which allows us to keep our clients relevant.',
      icon:<i class="bi bi-pc-display-horizontal"></i>
   },
   { 
      title:'Unique Features',
      text:'We strive to embrace and drive change in our industry which allows us to keep our clients relevant.',
      icon:<i class="bi bi-gift-fill"></i>
   },
   { 
      title:'Reliable Support',
      text:'We strive to embrace and drive change in our industry which allows us to keep our clients relevant.',
      icon:<i class="bi bi-chat-square-dots-fill"></i>
   }
   
  
];
function Home(){
   return(
      <>
    <div className='container-fluid home '>
       <div className='row justify-content-center'>
          <div className='col-md-8 text-white slide1'>
             {/* <h3>Clean & Creative</h3>
             <h1 className='mt-4 font-weight-bold'>We Are an Expert</h1>
             <p className='mt-3 h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua.</p> */}
             <h3>Clean & Creative</h3>
             <h2 className='mt-4 font-weight-bold'>We Are an Expert</h2>
             <p className='mt-3 h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             <button className='startbtn mt-4'>GET STARTED <i class="bi bi-arrow-right h5"></i></button>
             
          </div>
       </div>
    </div>
    <div className='container'>
       <div className='row'>
          {data.map((val)=>{
            return(
          <div className='col-md-4 p-4 text-center'>
                <App title1={val.title} text1={val.text} icon1={val.icon} />
          </div>
            )
          })}
         
       
       </div>
    </div>
    </>

   )
}
export default Home;