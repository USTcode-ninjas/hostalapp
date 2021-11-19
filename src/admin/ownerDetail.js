// import logo from './logo.svg';
// import './App.css';

import React,{useState, Fragment} from 'react';
import UserTable from '../action/userTable';
import AdminDashboard from "../pages/adminDashboard";
import { Table } from '../action/table';
import "../action/table.css"


const OwnerDetail =() =>{
  //Data
  const columns = [
    { accessor: 'Name', label: 'Name' },
    { accessor: 'EmailId', label: 'EmailId' },
    { accessor: 'Phone', label: 'Phone'},
    { accessor: 'RoomDetails', label: 'RoomDetails' },
    { accessor: 'Numberofvacant', label: 'Numberofvacant'}
  ]

  const userData=[
    {id:1,Name:'sai',EmailId:'sai@gamil.com', Phone:'9704847890',RoomDetails:'2 share',Numberofvacant:'5'},
    {id:2,Name:'jaya ',EmailId:'jaya@gamil.com', Phone:'9988026539',RoomDetails:'4 share',Numberofvacant:'10'},
    {id:3,Name:'krishna',EmailId:'vk@gamil.com', Phone:'7207470735',RoomDetails:'3 share',Numberofvacant:'15'},
    {id:4,Name:'sai v',EmailId:'saiv@gamil.com', Phone:'9949202669',RoomDetails:'4 share',Numberofvacant:'2'},
    {id:5,Name:'jaya k',EmailId:'jayak@gamil.com', Phone:'9490265389',RoomDetails:'2 share',Numberofvacant:'4'},
    {id:6,Name:'krishna c',EmailId:'vkc@gamil.com', Phone:'9998877555',RoomDetails:'4 share1',Numberofvacant:'8'},

  ]
  const initialFormState ={id:null,Name:'',EmailId:'',Username:'',CourseName:'',CourseName:''}
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


export default OwnerDetail;

