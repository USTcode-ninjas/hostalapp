import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
export default function LoginPage(){
    return(
        <div className="main">
            <h1>LoginPage</h1>
            <form >
                <section>
                    {/* <label>UserName/EmailId</label><br/> */}
                    <input type="text" name ="email" placeholder="username"/>
                </section>
                <section>
                    {/* <label>Password</label><br/> */}
                    <input type="text" name ="email" placeholder="Password"/>
                </section>
                <button type="submit">Submit</button>
            </form>
            <p>
                Click here for new 
            <Link to ="./Registration"><button>Registration</button></Link>
            </p>
            
                
        </div>
    )
}