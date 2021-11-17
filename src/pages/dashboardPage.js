import React from "react";
import { Link } from "react-router-dom";
import "../pages/dashboard.css"
export default function DashboardPages(){
    let c="&"
    return(
        <div >
            <h2>B{c}B</h2>
            <div className="dashboard">
                
                <ul>
                    <li><Link to ="/DashboardPages/profile">Owner</Link></li>
                    {/* <li>list details</li> */}
                    <li><Link to ="/DashboardPages/AddOwnerdetails">Add details</Link></li>
                    <li><Link to ="/">Sign out</Link></li>
                </ul>
            </div>
            
        </div>
    )
}