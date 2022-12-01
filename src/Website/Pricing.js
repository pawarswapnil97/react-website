import React from 'react';



function Pricing(){
   return(
      <>
    
      <div className="container-fluid mt-5 ">
      <div className="row mt-5 p-3">
        <div className="col-md-12 text-center">
          <h1 className='top_title'>Pricing</h1>
          <p className="apara mt-4 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ac augue at erat <br />
            hendrerit dictum. Praesent porta, purus eget sagittis imperdiet. <br/><br/>
            <button className='btn ml-2 pricebtn'>MONTHLY</button>
            <button className='btn ml-2 pricebtn bg-light text-dark'>YEALRLY</button>
          </p>
          </div>
          </div>
          </div>

          <div className='container'>
             <div className='row mt-4 p-3'>

                <div className='col-md-4  text-center p-0 mt-4'>
                 <div className='card pricecard'>
                    <div className='card-header'>
                       <h5 className='mt-5 pricehead'>BASIC</h5>
                       <h1>Free</h1>
                       <p>Free of charge one standard listing <br/>active for 30 days</p>
                    </div>
                    <div className='card-body'>
                       <ul className='pricelist'>
                          <li>Any Ware Access</li>
                          <li>1 GB Hosting</li>
                          <li>1 Unique Users</li>
                          <li>2 GB Capacity</li>
                          <li>Weekly Backups</li>
                       </ul>
                       <button className='readbtn mt-5 pricebtn'>PURCHASE NOW<i class="bi bi-arrow-right h5"></i></button>
                    </div>
                 </div>
                </div>
                <div className='col-md-4  text-center card2 p-0'>
                 <div className='card pricecard'>
                    <div className='card-header chead'>
                       <h5 className='mt-5 pricehead text-white'>Extended</h5>
                       <h1>$145</h1>
                       <p>One time fee for one listing, <br/> highlighted in the search results</p>
                    </div>
                    <div className='card-body'>
                       <ul className='pricelist'>
                          <li>Any Ware Access</li>
                          <li>10 GB Hosting</li>
                          <li>2 Unique Users</li>
                          <li>12 GB Capacity</li>
                          <li>Weekly Backups</li>
                          <li>15 Domain Names</li>
                          <li>Enhanced Security</li>
                       </ul>
                       <button className='readbtn mt-5 pricebtn'>PURCHASE NOW<i class="bi bi-arrow-right h5"></i></button>
                    </div>
                 </div>
                </div>
                <div className='col-md-4  text-center p-0 mt-4'>
                 <div className='card pricecard'>
                    <div className='card-header'>
                       <h5 className='mt-5 pricehead'>Professional</h5>
                       <h1>$555</h1>
                       <p>Monthly subscription for unlimited <br/>listings and availability</p>
                    </div>
                    <div className='card-body'>
                       <ul className='pricelist'>
                          <li>Any Ware Access</li>
                          <li>15 GB Hosting</li>
                          <li>2Unique Users</li>
                          <li>15 GB Capacity</li>
                          <li>Weekly Backups</li>
                       </ul>
                       <button className='readbtn mt-5 pricebtn'>PURCHASE NOW<i class="bi bi-arrow-right h5"></i></button>
                    </div>
                 </div>
                </div>
                
             </div>
          </div>
          </>
   

   )
}
export default Pricing;