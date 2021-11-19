import React from 'react'
import './Section.css'

// import { Link } from "react-router-dom";


let c='&';
function Section() {
    // const [values,setValues]=useState();
    
    return (
        <div className="section1">
               
                <div className="main">
                    <h1 style={{color:'white'}}>Login</h1>
                     <form>
                         <section>
                            <input className="input1" type="text" name ="email" placeholder="username"/>
                         </section>
                        <section>
                             <input className="input1" type="text" name ="email" placeholder="Password"/>
                        </section>
                         <button className="button1" type="submit">Submit</button>
                    </form>
                             
                </div>


                <div className="description">
                    <p className="text1">
                        A simple app that enables the students to locate hostels and Hostel owners to register their hostels along with its features. 
                    </p>
                </div>  
                <div className="banner">
                    <div ><img className="images" src="/images/img1.jpeg" alt="img1"/></div>
                    <div ><img className="images" src="/images/img2.jpeg" alt="img2"/></div>
                    <div ><img className="images" src="/images/img3.jpeg"alt="img3"/></div>
                    <div ><img className="images" src="/images/img4.jpeg"alt="img4"/></div>
                    <div ><img className="images" src="/images/img5.jpeg"alt="img5"/></div>
                    <div ><img className="images" src="/images/img6.jpeg"alt="img6"/></div>
                   
                </div> 
                <footer className="footer">
                    <div>
                        <h2>Bed and Breakfast</h2>
                    </div>
                    <div>
                        <p>
                             Copyright © 2021–2030 B{c}B.com™. All rights reserved. | Privacy policy | Terms of use | Legal
 
                        </p>
                    </div>
                    
                </footer>  
        </div>

    )
}

export default Section
