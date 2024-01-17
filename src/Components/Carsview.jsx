import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Carsview = () => {
    var [cars,setCars] = useState([]);
useEffect(()=>{
axios.get("http://localhost:3005/view")
.then(response =>{
console.log(response.data)
setCars(response.data) })
.catch(err=>console.log(err))
},[])
 
  return (
    <div>

<Typography variant='h5'>Car 
Details</Typography><br></br>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
<TableRow>
<TableCell>Carid</TableCell>
<TableCell>Company Name</TableCell>
<TableCell>Color</TableCell>
<TableCell>Car no</TableCell>
<TableCell>Fuel</TableCell>
<TableCell>Description</TableCell>
<TableCell>Model</TableCell>
</TableRow>
</TableHead>
{/* <TableBody> */}
{cars.map((value,index)=>{
return(
<TableRow key={index}>
<TableCell>{value.carid}</TableCell>
<TableCell>{value.company}</TableCell>
<TableCell>{value.color}</TableCell>
<TableCell>{value.no}</TableCell>
<TableCell>{value.model}</TableCell>
<TableCell>{value.description}</TableCell>
</TableRow>
)
})}
<TableBody/>
</Table>
</TableContainer>
    </div>
  
    )
}

export default Carsview