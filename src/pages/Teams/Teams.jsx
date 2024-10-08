import React from 'react';
import "./teams.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Teams() {
  return (
    <div className='teamsall'>
        <Navbar/>
            <div className="teamhd">
                <p>The brilliant heads behind this</p>
                <h3>Meet The Developers</h3>
            </div>
            <div className="devpad">
                <div className="devi alanjs">
                    <div className="sidevara"></div>
                    <div className="devit"><h3>Alan Jose Santo</h3>
                    <p>UI & Development Lead</p></div>
                </div>
                <div className="devi adarshs">
                    <div className="sidevara"></div>
                    <div className="devit"><h3>Adarsh S</h3>
                    <p>Frontend Dev</p></div>
                </div>
                <div className="devi vakkil">
                    <div className="sidevara"></div>
                    <div className="devit"><h3>Abhiram V</h3>
                    <p>Frontend Dev</p></div>
                </div>
                <div className="devi abidd">
                    <div className="sidevara"></div>
                    <div className="devit"><h3>Abid Ahammed S H</h3>
                    <p>Frontend Dev</p></div>
                </div>
                <div className="devi arunj">
                    <div className="sidevara"></div>
                    <div className="devit"><h3>Arun John</h3>
                    <p>Backend Dev</p></div>
                </div>
                <div className="devi christu">
                    <div className="sidevara"></div>
                    <div className="devit"><h3>Christopher J Neelankavil</h3>
                    <p>Backend Dev</p></div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Teams