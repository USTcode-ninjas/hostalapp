import React from "react";
import { Link } from "react-router-dom";
export default function OwnerRegistrationPage(){
    // const initialFormState = {
    //     id:null,
    //     itemname:'', 
    //     description:'', 
    //     price:'', 
    //     quantity:'', 
    //     stockreceivedDate:''
    // }
    // const [user,setUser] = useState(initialFormState)
    // const handleInputChange = event =>{
    //     const {name, value} = event.target
    //     setUser({...user,[name]:value})
    // }
    return(
        <div className="main1">
            <h1>OwnerRegistrationPage</h1>
            <form>
                <section>
                    <input type="text" name ="Name" placeholder="Name"/>
                </section>
                <section>
                    <input type="text" name ="Username" placeholder="UserName"/>
                </section>
                <section>
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
            <Link to ="/">Go back to login page</Link>
            </p>
        </div>
    )
}