import React from "react";
import Servicecard from "./Component.jsx";

var data = [
  {
    icon: <i class="bi bi-building"></i>,
    title: "Creative Solutions",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat  hendrerit dictum. Praesent porta, purus eget sagittis imperdiet",
  },
  {
    icon: <i class="bi bi-bullseye"></i>,
    title: "Excellent Features",
    des: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
  },
  {
    icon: <i class="bi bi-person-heart"></i>,
    title: "Friendly Support",
    des: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
  },
  {
    icon: <i class="bi bi-graph-up-arrow"></i>,
    title: "SEO & Advertising",
    des: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
  },
  {
    icon: <i class="bi bi-pie-chart-fill"></i>,
    title: "Marketing & Consulting",
    des: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
  },
  {
    icon: <i class="bi bi-laptop"></i>,
    title: "Marketing & Consulting",
    des: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
  },
];
function Service() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5 p-3">
          <div className="col-md-12 text-center">
            <h1 className="top_title">Services</h1>
            <p className="apara mt-4 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ac augue at erat <br />
              hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.
            </p>
            <div className="row">
            {data.map((val) => {
              return (
                <div className="col-md-4 mt-4">
                  <Servicecard  icon={val.icon} title={val.title} des={val.des}/>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row sbanner mt-5 justify-content-center">
          <div className="col-md-10 mt-5">
         <div className="row ">
         <div className="col-md-6">
           <h1>We offer best in class service for your needs</h1>
           <p className="text-muted h5 mt-4">We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
           <button className='startbtn mt-4'>PURCHASE NOW <i class="bi bi-arrow-right h5"></i></button>
         </div>
         <div className="col-md-6 scomputer">

         </div>
         </div>
           
          </div>
          
        </div>
      </div>
    </>
  );
}
export default Service;
