import React from 'react';

var data=[
   {
      imgpath:'./Img/team1.jpg'
   },
   {
      imgpath:'./Img/team2.jpg'
   },
   {
      imgpath:'./Img/team3.jpg'
   },
]
function Team(){
   return(
      <>
      <div className="container-fluid mt-5 ">
        <div className="row mt-5 p-3">
          <div className="col-md-12 text-center">
            <h1 className='top_title'>Our Team</h1>
            <p className="apara mt-4 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ac augue at erat <br />
              hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
         <div className='row'>
            {data.map((val)=>{
               return(
                  <div className='col-md-4 mb-5 team'>
                  <img src={val.imgpath} style={{width:'95%'}}/>
                  
                     <div className='teaminfo text-center'>
                        <h2>Devis</h2>
                        <p>QA Expert</p>
                        <ul>
             <li className='d-inline'><i class="bi bi-facebook ml-3 ticon mt-4"></i></li>
             <li className='d-inline'><i class="bi bi-twitter ml-3 ticon mt-4"></i></li>
             <li className='d-inline'><i class="bi bi-google ml-3 ticon mt-4"></i></li>
             
           </ul>
                     
                  </div>
               </div>
               )
            })}

           
         </div>

      </div>
      </>
   )
}
export default Team;