import React from 'react';
function About(){
   return(
      <div className='container mt-5'>
         <div className='row  p-4'>
            <div className='col-md-12 text-center'>
               <h1 className='top_title'>About Us</h1>
               <p className='apara mt-4 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat <br/> hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>
            </div>
            <div className='col-md-6 mt-4'>
               <h3>Take your business to the next level</h3>
               <p className='spara mt-4 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p className='spara mt-4 text-muted'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <div className='col-md-5 mt-4'>
               <img src='Img/about.png' className='w-100'/>
            </div>
         </div>
      </div>

   )
}
export default About;