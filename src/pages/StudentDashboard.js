import React from "react";
import { Link } from "react-router-dom";
import "../pages/dashboard.css"
export default function StudentDashboard(){
    let c="&"
    return(
        <div className="dashboard">
            <div>
            <h2>B{c}B</h2>
            <ul>
                <li><Link to ="/StudentDashboard/Profile1">Student</Link></li>
                <li><Link to ="/StudentDashboard/Dashboard">Dashboard</Link></li>
                {/* <li>list details</li> */}
                <li><Link to ="/DashboardPages/AddOwnerdetails">Add details</Link></li>
                <li><Link to ="/">Sign out</Link></li>
            </ul>
            </div>
            <div>

            </div>
        </div>
    )
}