import React from "react";
// import { Link } from "react-router-dom";
import DashboardPages from "../pages/dashboardPage";
export default function AddOwnerdetails(){
    return(
        <div className="addDetails">
            <div className="divDash"> 
                <DashboardPages/>
            </div>
            <div className="addDetil">
            <h1>addOwnerdetails</h1>
            <form>
                <section>
                    <input type="text" name ="Name" placeholder="Name"/>
                </section>
                <section>
                    <input type="text" name ="Username" placeholder="Room details"/>
                </section>
                <section>
                    <input type="number" name ="number" placeholder="Number of vacant rooms"/>
                </section>
                <section>
                    <input type="address" name ="Location" placeholder="location"/>
                </section>
                <section>
                    <input type="Number" name ="Rate" placeholder="Rate"/>
                </section>
                <section>
                    <input type="file" name ="Rate" placeholder="Room Image"/>
                </section>
                {/* <section>
                    <input type="number" name ="number" placeholder="Phone Number"/>
                </section> */}
                <button type="submit">uploading</button>
            </form>
            </div>
            
        </div>
    )
}