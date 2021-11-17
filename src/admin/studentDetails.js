import React from "react";
import AdminDashboard from "../pages/adminDashboard";
// import { Link } from "react-router-dom";
// import DashboardPages from "../pages/dashboardPage";
export default function StudentDetails(){
    return(
        <div className="addDetails">
            <div className="divDash"> 
                <AdminDashboard/>
            </div>
            <div className="stu_detilas">
            <div className ="">
                <table>
                    <thead>
                        <th>Student Name</th>
                        
                        <th>EmailId</th>
                        <th>Username</th>
                        <th>College Name</th>
                        <th>Course Name</th>
                        {/* <th>Phone</th> */}
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jaya</td>
                            <td>jaya@gamil.com</td>
                            {/* <td>97048479102</td> */}
                        </tr>
                        
                    </tbody>
                    
                </table>
            </div>
        </div>
        </div>
    )
}
