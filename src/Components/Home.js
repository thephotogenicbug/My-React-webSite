import React from 'react';
import './Home.css';
import banner from './banner.png';
import CallBack from './MoreService';
import Pricing from './Plans';
import Service from './Service';
const Home = () =>{


    return(
        <div className="container mt-3"  >
            <div className="row">
                <div className="col-md-6 "id="Banner">
                    <h1 ><span className="heading">Website </span> & <span className="heading">Web Apps</span></h1>
                    <h2 className="heading2">Development</h2>
                    <p className="banner-p">We Build Responsive website and web apps at affordable price</p>
                    <button className="btn text-white mt-2" id="btn">Learn More</button>
                    <button className="btn mt-2" id="btn1">Contact Us</button>
                </div>
                <div className="col-md-6" >
                <img src={banner} className="img-fluid"/>
                </div>
            </div>

            
            <div className="row mt-3"> 
              <Service/>
            </div>
            <div className="row mt-3" >
            <Pricing/>
             </div>
            
           
           
            



        </div>
        
    )
}
export default Home;