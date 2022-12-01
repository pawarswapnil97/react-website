import React from 'react';
import Blogcard from './Blogcard'
var data = [
   {
     img: 'Img/blog1.jpg',
     title: "14 ridiculously cool websites you never know.",
     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat  hendrerit dictum. Praesent porta, purus eget sagittis imperdiet",
   },
   {
      img: "Img/blog2.jpg",
      title: "Top 10 hot marketing trends you need.",
      icon: <i class="bi bi-person-fill"></i>,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat  hendrerit dictum. Praesent porta, purus eget sagittis imperdiet",
    },
    {
      img: 'Img/blog3.jpg',
      title: "10 reasons you need a digital marketing strategy",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat  hendrerit dictum. Praesent porta, purus eget sagittis imperdiet",
    },
    
   
 ];

function Blog(){
   return(
      <div className="container mt-5">
      <div className="row mt-5 p-3">
        <div className="col-md-12 text-center">
          <h1 className='top_title'>Our Blog</h1>
          <p className="apara mt-4 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat <br/>
          hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.
          </p>
          </div>
          <div className="row">
            {data.map((val) => {
              return (
                <div className="col-md-4 mt-4">
                  <Blogcard  img={val.img} title={val.title} des={val.des}/>
                </div>
              );
            })}
            </div>
        
       </div>
    </div>
   )
}
export default Blog;