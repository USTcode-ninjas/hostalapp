import React from "react";
import OwnerPages from "../pages/dashboardPage";
// import { Link } from "react-router-dom";
export default function Profile(){
    return(
        <div className="addDetails">
            <div className="divDash"> 
                <OwnerPages/>
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
                            <td>Jaya</td>
                        </tr>
                        <tr>
                            <td>EmailId</td>
                            <td>jaya@gamil.com</td>
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
