import React from 'react';


var data=[
   {
      imgpath:'img/work1.jpg',
   },
   {
      imgpath:'img/work2.jpg',
   },
   {
      imgpath:'img/work3.jpg',
   },
   {
      imgpath:'img/work4.jpg',
   },
   {
      imgpath:'img/work5.jpg',
   },
   {
      imgpath:'img/work6.jpg',
   },
]

function Work(){
   return(
      <>
      <div className="container mt-5">
        <div className="row mt-5 p-3">
          <div className="col-md-12 text-center">
            <h1 className='top_title'>Our Works</h1>
            <p className="apara mt-4 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat <br/>
            hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.
            </p>
          </div>
          <div className="row">
            {data.map((val) => {
              return (
                <div className="col-md-4 mt-4 workimg">
                    <img src={val.imgpath}/>
                </div>
              );
            })}
         </div>
         </div>
      </div>  
      </>
   )
}
export default Work;






