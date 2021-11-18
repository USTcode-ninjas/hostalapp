import React from "react";
// import { Table } from "./table";

const UserTable = props=>(
    <table className = "">
        <thead>
                <th>Student Name</th>        
                <th>EmailId</th>
                <th>Username</th>
                <th>College Name</th>
                <th>Course Name</th>
                {/* <th>Phone</th> */}
        </thead>
        <tbody>
            {props.users.length > 0 ?(
                props.users.map(user =>(
                    <tr key={user.id}>
                        <td>{user.StudentName}</td>
                        <td>{user.EmailId}</td>
                        <td>{user.Username}</td>
                        <td>{user.CollegeName}</td>
                        <td>{user.CourseName}</td>
                        <td>
                            <button onClick ={() =>{
                                props.editRow(user)
                            }} className ="Button muted-button">Edit</button>
                            <button onClick ={() =>{
                                props.deleteUser(user.id)
                            }} className ="Button muted-button">Delete</button>
                        </td>
                    </tr>
                ))
            ):(
                <tr>
                    <td colSpan ={3}>No Users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default UserTable;