// Blog card

function Blogcard(props){
    return(
       <>
        <div className="card  p-2">
           <div className="crad-body">
              <img src={props.img} className="w-100"></img>
              <h6 className="mt-3  text-secondary"> <i class="bi bi-person-fill mr-2"></i>Admin  <i class="bi bi-calendar-day mr-2 ml-4"></i>August 13, 2020</h6>
              <h3 className="mt-3">{props.title}</h3>
                <p className="mt-3">{props.des}</p>
              <button className="submit mb-3 mt-3 ">Read More</button>
           </div>
        </div>
       </>
    )
 }
 
 
 export default Blogcard;
 

//  {props.icon}{props.con}