import React from "react";
import { Link } from "react-router-dom";
import "../pages/dashboard.css"
export default function AdminDashboard(){
    let c="&"
    return(
        <div className="dashboard">
            <div>
            <h2>B{c}B</h2>
            <ul>
                <li><Link to ="/AdminDashboard/AdminProfile">Admin</Link></li>
                <li><Link to ="/AdminDashboard/OwnerDetails">Owner Details</Link></li>
                <li><Link to ="/AdminDashboard/StudentDetails">Student details</Link></li>
                <li><Link to ="/">Sign out</Link></li>
            </ul>
            </div>
            <div>

            </div>
        </div>
    )
}