import React from "react";
import { Link } from "react-router-dom";
import "../pages/dashboard.css"
export default function OwnerPages(){
    let c="&"
    return(
        <div >
            <h1>B{c}B</h1>
            <div className="dashboard">
                
                <ul>
                    <li><Link to ="/OwnerPages/profile">Owner</Link></li>
                    {/* <li>list details</li> */}
                    <li><Link to ="/OwnerPages/AddOwnerdetails">Add details</Link></li>
                    <li><Link to ="/" className="nav_buttom">Sign out</Link></li>
                </ul>
            </div>
            
        </div>
    )
}