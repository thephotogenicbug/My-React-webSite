import React from 'react';
import './Home.css';
const Pricing = () =>{

    return(
        <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
             <h3>CHOOSE YOUR PLAN</h3>
             <label  id="service">Get attractive website design and development packages with premium UI/UX features like appropriate font, brand colours</label>
             </div>
            </div>
           <div className="row mt-3">
           <div className="col-md-4 ">
                   <div className="card">
                       <div className="card-body">
                           <h5>BASIC</h5>
                           <label id="service">Perfect for Small/Starter Businesses</label>
                           <h6 className="mt-3"></h6>
                       </div>
                   </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                       <div className="card-body">
                           <h5>Professional</h5>
                       </div>
                   </div>
               </div>
               <div className="col-md-4">
               <div className="card">
                       <div className="card-body">
                           <h5>Bussiness</h5>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default Pricing