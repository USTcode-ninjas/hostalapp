// import logo from './logo.svg';
// import './App.css';

import React,{useState, Fragment} from 'react';
import UserTable from '../action/userTable';
import AdminDashboard from "../pages/adminDashboard";
import { Table } from '../action/table';
import "../action/table.css"


const StudentDetails =() =>{
  //Data
  const columns = [
    { accessor: 'StudentName', label: 'StudentName' },
    { accessor: 'EmailId', label: 'EmailId' },
    { accessor: 'Username', label: 'Username'},
    { accessor: 'CollegeName', label: 'CollegeName' },
    { accessor: 'CourseName', label: 'CourseName'}
  ]

  const userData=[
    {id:1,StudentName:'sai',EmailId:'sai@gamil.com', Username:'sai',CollegeName:'ssce',CourseName:'cse'},
    {id:2,StudentName:'jaya ',EmailId:'jaya@gamil.com', Username:'jaya',CollegeName:'ssic',CourseName:'eee'},
    {id:3,StudentName:'krishna',EmailId:'vk@gamil.com', Username:'Krishna',CollegeName:'kkce',CourseName:'ece'},
    {id:4,StudentName:'sai v',EmailId:'saiv@gamil.com', Username:'sai',CollegeName:'ssce',CourseName:'cse'},
    {id:5,StudentName:'jaya k',EmailId:'jayak@gamil.com', Username:'jaya',CollegeName:'ssic',CourseName:'eee'},
    {id:6,StudentName:'krishna c',EmailId:'vkc@gamil.com', Username:'Krishna',CollegeName:'kkce',CourseName:'ece'},

  ]
  const initialFormState ={id:null,StudentName:'',EmailId:'',Username:'',CourseName:'',CourseName:''}
  //Setting sate
  const [users,SetUsers] = useState(userData)
  const [rows,SetRows] = useState(userData);

  const [currentUser,setCurrentUser] = useState(initialFormState)
  const [editing,setEditing] =  useState(false)
 
  const deleteUser = id =>{
    setEditing(false)
    SetUsers(users.filter(user => user.id !== id))
    SetRows(rows.filter(row => row.id !== id))
  }


	return (
		<div className="addDetails">
			<div className="divDash"> 
                <AdminDashboard/>
             </div>
            <div className="stu_detilas">
             <div className ="">
                {/* <UserTable users={users}  deleteUser={deleteUser} /> */}
                <Table rows={rows} columns={columns} deleteUser={deleteUser} />
            </div>
        </div>
		</div>
	)
}


export default StudentDetails;

