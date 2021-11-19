import React from "react"
import StudentDashboard from "../pages/StudentDashboard";

export default function Profile1(){
    return(
        <div className="addDetails">
            <div className="divDash"> 
                <StudentDashboard/>
            </div>
            <div className="addDetil1">
            <div className ="Details">
                <table>
                    {/* <thead>
                        <th>Name</th>
                        <th>EmailId</th>
                        <th>Phone</th>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>Name</td>
                          
                        </tr>
                        <tr>
                            <td>EmailId</td>
                            
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
        </div>
    )
}
