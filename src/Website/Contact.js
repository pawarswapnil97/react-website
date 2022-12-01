import React from "react";
function Contact() {
  return (
    <div className="container">
      <div className="row p-5 mt-3">
        <div className="col-md-12 text-center">
          <h1 className="top_title">Our Contact</h1>
          <p className="apara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
            augue at erat <br /> hendrerit dictum. Praesent porta, purus eget
            sagittis imperdiet.
          </p>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-md-4">
                 <i class="bi bi-geo-alt-fill cicon mt-4"></i>
                 <h4 className="mt-4">Address</h4>
                 <p className="ctext">2750 Quadra Street Victoria,<br/> Canada.</p>

                 <i class="bi bi-envelope-fill cicon mt-2"></i>
                 <h4 className="mt-4">Email</h4>
                 <p className="ctext">hello@gloxy.com</p>

                 <i class="bi bi-telephone-fill cicon mt-2"></i>
                 <h4 className="mt-4">Phone</h4>
                 <p className="ctext">+1-325-555-0156</p>

              
        </div>
        <div className="col-md-8 text-center">
          <form>
             <input type="text" placeholder="Name"></input>
             <input type="text" placeholder="Email"></input><br/>
             <input type="text" placeholder="Subject"></input>
             <input type="text" placeholder="Phone"></input><br/>
             <input type="textarea" placeholder="Your Message" className="msg"></input><br/>
             <button className="submit mt-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;

