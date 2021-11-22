import React, { useState, useEffect } from "react";
import AdminDashboard from "../pages/adminDashboard";
import { Table } from '../action/table';

// import { Link } from "react-router-dom";
// import DashboardPages from "../pages/dashboardPage";
export default function OwnerDetails(){
    // state ={
    //     characters:[],
    // }
    // removeCharacter=(index) =>{
    //     const {characters} = this.state
    //     this.setState({
    //         characters:characters.filter((character,i)=>{
    //             return i !== index
    //         }),
    //     })
    // }
    
    const columns = [
        { accessor: 'Name', label: 'Name' },
        { accessor: 'EmailId', label: 'EmailId' },
        { accessor: 'Username', label: 'Username'},
    //     { accessor: 'CollegeName', label: 'CollegeName' },
    //     { accessor: 'CourseName', label: 'CourseName'}
      ]
      const userData=[
        {id:1,Name:'',EmailId:'', Username:''},
    
      ]
      const [rows,SetRows] = useState(userData);

    const [editing,setEditing] =  useState(false)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    // const [userAddress, setUserAddress] = useState([]);
    const deleteUser = id =>{
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
      }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                    // setUserAddress(data.address);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="addDetails">
            <div className="divDash"> 
                <AdminDashboard/>
            </div>
            <div className="owner_det">
            {/* <div className ="">
                <table>
                    <thead>
                        <th>Name</th>
                        <th>EmailId</th>
                        <th>Phone</th>
                        <th>Room details</th>
                        <th>Number of vacant rooms</th>
                        <th>location</th>
                        <th>Rate</th>
                        <th>Room Image</th>
                    </thead>
                    <tbody>
                    {users.map(user => (<tr  key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>4 People</td>
                            <td>10</td>
                            <td>collage</td>
                            <td>4.5</td>
                            <td><img src="/images/tree.avif"alt ="tree" width="50px"/></td>
                            <td><button className = "button_del" onClick={deleteUser} >Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                    
                </table>
                
            </div> */}
            {/* <Table rows={rows} columns={columns} deleteUser={deleteUser} /> */}
        </div>
        </div>
        );
    }
    
}
