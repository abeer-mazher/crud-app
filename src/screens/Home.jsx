import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tables from '../components/Tables';

function Home() {
    let navigate = useNavigate()
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },)
  return (
    <>
    <h1>data</h1>
    <Button onClick={()=>navigate("/Createuser")} sx={{m:2,float:'right'}}>Create User</Button>
    <Tables userData={data}/>
    </>
  )
}

export default Home