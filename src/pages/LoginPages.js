import React from "react";
import { Link } from "react-router-dom";
// import Tree from "../images/tree.avif";
import '../App.css';
export default function LoginPage(){
    return(
        <div className ="div_routes">
            <div>
            <img src="/images/tree.avif"alt ="tree"/>

            </div>
            <div className="main">
                <h1>LoginPage</h1>
                <form >
                    <section>
                        <input type="text" name ="email" placeholder="username"/>
                    </section>
                    <section>
                        <input type="text" name ="email" placeholder="Password"/>
                    </section>
                    <button type="submit">Submit</button>
                </form>
                <p>
                    Click here for new 
                <Link to ="./Registration"><button>Registration</button></Link>
                </p>
                <p>
                    <Link to ="./AboutusPage">aboutus</Link>
                </p>
                
                    
            </div>
        </div>
    )
}