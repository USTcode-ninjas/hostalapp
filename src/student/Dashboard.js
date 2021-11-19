import React from "react"
import StudentDashboard from "../pages/StudentDashboard";

export default function Dashboard(){
    return(
        <div className="addDetails">
            <div className="divDash"> 
                <StudentDashboard/>
            </div>
            <div className="AddDetails2">
            <div className ="Details1">
               <table>
                    {/* <thead>
                        <th>Name</th>
                        <th>EmailId</th>
                        <th>Phone</th>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>Owner Name</td>
                            <td> Surya</td>
                        </tr>
                        <tr>
                            <td>EmailId</td>
                            <td> surya@ust.com</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>7558891118</td>
                            
                        </tr>
                        <tr>
                            <td>Room Numbers</td>
                            <td>4</td>
                        
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>4500</td>

                        </tr>
                        <tr>
                            <td> Room Style </td>
                            <td> <a href ="/images/img1.jpeg"><img src="/images/img1.jpeg" width="50px" alt="img1"/> </a></td>
                                  
                            </tr>
                           
                    </tbody>
                    
                </table>
            </div>
        </div>
        </div>
    )
}
