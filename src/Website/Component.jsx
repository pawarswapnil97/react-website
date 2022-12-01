// Service card

function Servicecard(props){
   return(
      <>
       <div className="card  p-4  servicebox">
          <div className="crad-body">
             <h1 className="mb-4 serviceicon">{props.icon}</h1>
             <h4>{props.title}</h4>
             <p className="mt-4">{props.des}</p>
          </div>
       </div>
      </>
   )
}


export default Servicecard;
