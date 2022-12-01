import React from 'react';
function App(props){
   return(
      <>
      <div className='card sbox'>
         <div className='card-body'>
         <h1>{props.icon1}</h1>
         <h4 className='mt-5'>{props.title1}</h4>
         <p>{props.text1}</p>
         </div>
      </div>
      </>
   )
}


export default App;

