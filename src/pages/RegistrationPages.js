import React from "react";
import { Link } from "react-router-dom";
export default function RegistrationPage(){
    return(
        <div className ="registration">
            <h1>RegistrationPage</h1>
            
            <p>
                <Link to ="./Registration/OwnerRegistrationPage"><button>OwnerRegistrationPage</button></Link>
                <Link to ="./Registration/StudentsRegistrationPage"><button>StudentsRegistrationPage</button></Link>

            </p>
            <p>
                <Link to ="./"><button>go to login page</button></Link>
            </p>
        </div>
    )
}