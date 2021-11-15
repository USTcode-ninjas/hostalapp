import React from "react";
import { Link } from "react-router-dom";
export default function OwnerRegistrationPage(){
    return(
        <div className="main1">
            <h1>OwnerRegistrationPage</h1>
            <form>
                <section>
                    {/* <label>Name</label><br/> */}
                    <input type="text" name ="Name" placeholder="Name"/>
                </section>
                <section>
                    {/* <label>UserName</label><br/> */}
                    <input type="text" name ="Username" placeholder="UserName"/>
                </section>
                <section>
                    {/* <label>Password</label><br/> */}
                    <input type="password" name ="Password" placeholder="Password"/>
                </section>
                <section>
                    {/* <label>EmailId</label><br/> */}
                    <input type="email" name ="email" placeholder="Email Id"/>
                </section>
                <section>
                    {/* <label>Phone number</label><br/> */}
                    <input type="number" name ="number" placeholder="Phone Number"/>
                </section>
                <button type="submit">Submit</button>
            </form>
            <p>
                <Link to ="../Registration">Registration</Link>
            </p>
        </div>
    )
}