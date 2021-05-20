import React from 'react';
import './Home.css';
import banner from './banner.png'
const Home = () =>{

    return(
        <div className="container mt-3" >
            <div className="row">
                <div className="col-md-6 "id="Banner">
                    <h1 ><span className="heading">Website </span> & <span className="heading">Web Apps</span></h1>
                    <h2 className="heading2">Development</h2>
                    <p>We Build Responsive website and web apps at affordable price</p>
                    <button className="btn text-white mt-2" id="btn">Learn More</button>
                    <button className="btn mt-2" id="btn1">Contact US</button>
                </div>
                <div className="col-md-6">
                    <img src={banner} className="img-fluid" />
                </div>
            </div>
        </div>
    )
}
export default Home;