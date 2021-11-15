import React from "react";
import { Link } from "react-router-dom";
export default function StudentsRegistrationPage(){
    return(
        <div className="main1">
            <h1>StudentsRegistrationPage</h1>
            <form>
                <section>
                    {/* <label>Student Name</label><br/> */}
                    <input type="text" name ="email" placeholder="Student Name"/>
                </section>
                <section>
                    {/* <label>E-mail ID</label><br/> */}
                    <input type="email" name ="email" placeholder="Email Id"/>
                </section>
                <section>
                    {/* <label>College Name</label><br/> */}
                    <input type="text" name ="email" placeholder="College Name"/>
                </section>
                <section>
                    {/* <label>Course Name</label><br/> */}
                    <input type="text" name ="email" placeholder="Course Name"/>
                </section>
                <section>
                    {/* <label>Username</label><br/> */}
                    <input type="text" name ="email" placeholder="Username"/>
                </section>
                <section>
                    {/* <label>Password</label><br/> */}
                    <input type="Password" name ="email" placeholder="Password"/>
                </section>
                <button type="submit">Submit</button>
            </form>
            <p>
                <Link to ="../Registration">Registration</Link>
            </p>
        </div>
    )
}