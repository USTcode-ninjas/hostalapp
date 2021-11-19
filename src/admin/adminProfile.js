import React from "react";
import AdminDashboard from "../pages/adminDashboard";
// import { Link } from "react-router-dom";
export default function AdminProfile(){
    return(
        <div className="addDetails">
            <div className="divDash"> 
                <AdminDashboard/>
            </div>
            <div className="addDetil1">
            <div className ="">
                <table>
                    {/* <thead>
                        <th>Name</th>
                        <th>EmailId</th>
                        <th>Phone</th>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Admin</td>
                        </tr>
                        <tr>
                            <td>EmailId</td>
                            <td>admin@gamil.com</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>97048479102</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
        </div>
    )
}
