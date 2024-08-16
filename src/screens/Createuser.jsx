import { Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Createuser() {
    let navigate = useNavigate()
    let [userData,setUserData] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
    });
    let createHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/users",userData)
        .then(res=> res)
        .catch(err => console.log(err))
        alert("User Created");
        navigate('/');
    }
  return (
    <>
    <Paper elevation={24} sx={{m:20,padding:4}}>
        <form onSubmit={(e)=>createHandler(e)}>
            <Typography mb={2}>
                Create User
            </Typography>

            <TextField onChange={(e)=>setUserData({...userData,name:e.target.value})} value={userData.name} fullWidth sx={{mb:2}} label="Name"></TextField>
            <TextField onChange={(e)=>setUserData({...userData,username:e.target.value})} value={userData.username} fullWidth sx={{mb:2}} label="Username"></TextField>
            <TextField onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} fullWidth sx={{mb:2}} label="email"></TextField>
            <TextField onChange={(e)=>setUserData({...userData,phone:e.target.value})} value={userData.phone} fullWidth sx={{mb:2}} label="phone"></TextField>
            <Button type='submit'>Create User</Button>
        </form>
    </Paper>
    </>
  )
}

export default Createuser