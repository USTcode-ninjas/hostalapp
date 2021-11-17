import React from "react";
import { Link } from "react-router-dom";
export default function RegistrationPage(){
    return(
        <div className ="registration">
            <h1>Registration Page</h1>
            
            <p>
                <Link to ="./Registration/OwnerRegistrationPage"><button>Owner Registration</button></Link>
                <Link to ="./Registration/StudentsRegistrationPage"><button>Student Registration</button></Link>

            </p>
            <p>
                <Link to ="./"><button>Go to login page</button></Link>
            </p>
        </div>
    )
}