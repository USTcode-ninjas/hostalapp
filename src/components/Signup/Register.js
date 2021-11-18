import React from 'react'
import { Link } from "react-router-dom";
import './register.css'
function Register() {
    return (
        <div>
           
        <form className="ownerform" >
            <table className="otable">
                <tr>
                    <th> <h1>Registration</h1></th>
                </tr>
                <tr>
                    <label className="label"><input className="radio" type="radio" id="Owner" name="radio" value="Owner" checked/> Owner</label>
                            
                </tr>
                <tr>
                    <input className="radio" type="radio" id="Student" name="radio" value="Student"/>
                            <label className="label" for="Student">Student</label>
                    
                </tr>

                <tr>
                     <input type="text" name ="Name" placeholder="Name"/>
                </tr>
                <tr>
                     <input type="text" name ="Username" placeholder="UserName"/> 
                </tr>  
                <tr>
                    <input type="password" name ="Password" placeholder="Password"/>
                </tr> 
                <tr>
                    <input type="email" name ="email" placeholder="Email Id"/>
                </tr> 
                <tr>
                   <input type="text" name ="number" placeholder="Phone Number"/>
                </tr> 
                <tr>
                    <button type="submit">Submit</button>
                   
                 </tr>
                 <br/>
                 <tr>
                     <button><Link to ="/">Go to Login page</Link></button>
                 </tr>
            </table>
        </form>
              
    </div>
    )
}

export default Register
