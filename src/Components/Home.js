import React from 'react';
import './Home.css';
import banner from './banner.png';
import service from './service.png';
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
                <div className="col-md-12 text-center">
                    <h3 >Services</h3>
                </div>
                <div className="col-md-5 mt-4">
                 <img src={service} className="img-fluid"/>   
                </div>
                <div className="col-md-7 mt-3" >
                    <p  id="service">
                     We provide expert web application and web design services to our clients.Free flow Design
                     offers variety of web design and development services, from creating responsive website designs
                     to responsive web apps to building e-commerce using latest and proven web technologies the appearance, 
                     usability and accessibility of your website is more important than ever,
                     especially in an competitive market.
                    </p>
                    <p  id="service">
                      Wheather you are Stat-up, Enterprise, Corporate or a Business Giant, we offer unlimited solutions 
                      with our seo friendly responsive website and web applications to manage your business efficiency
                      helping you with more customer engagment, Online Sales, Lead Generation, website traffic and much more 
                    </p>
                     <h4>Our Website Development Services</h4>
                      <ul className="service-list" >
                       <li><i class="fas fa-check-circle"></i> Responsive Website Development</li>
                       <li><i class="fas fa-check-circle"></i> Static & Dynamic Websites</li>
                       <li><i class="fas fa-check-circle"></i> E-commerce Websites</li>
                       <li><i class="fas fa-check-circle"></i> Website Redesigning</li>
                       <li><i class="fas fa-check-circle"></i> Web Hosting</li>
                      </ul>
                </div>
            </div>
            <div className="row mt-3" >
             <div className="col-md-12 text-center">
             <h3 >REQUEST A CALLBACK</h3>
             </div>
            
            </div>
        </div>
        
    )
}
export default Home;