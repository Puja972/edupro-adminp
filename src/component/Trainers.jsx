import { Box,Breadcrumbs, Button, Typography,TextField,Dialog } from '@mui/material';
import { Container } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90 
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  // {
  //   field: 'lastName',
  //   headerName: 'Last name',
  //   width: 150,
  //   editable: true,
  // },
  {
    field: 'email',
    headerName: 'Email',
    type: '',
    width: 110,
    editable: true,
  },
  {
    field: 'mobno',
    headerName: 'Mobile No',
    type: '',
    width: 110,
    editable: true,
  },
  {
    field: 'pwd',
    headerName: 'Password',
    type: '',
    width: 110,
    editable: true,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1,   name: 'Jon', email: 'jonsnow@gmail.com',mobno:'54757657',pwd:'457'},
  { id: 2,   name: 'Cersei', email:'cersei@gmail.com',mobno:'56565474',pwd:'547'},
  { id: 3,  name: 'Jaime', email: 'jaime@gmail.com',mobno:'657545475',pwd:'754'},
  { id: 4,  name: 'Arya', email: 'arya@gmail.com' ,mobno:'3753574457',pwd:'876'},
  { id: 5,   name: 'Daenerys', email: null ,mobno:'5464655547',pwd:'755'},
  { id: 6,  name: 'emrey', email: 'emrey@gmail.com' ,mobno:'743757543',pwd:'867'},
  { id: 7,   name: 'Ferrara', email: 'ferrara@gmail.com',mobno:'754754574',pwd:'354'},
  { id: 8,  name: 'Rossini', email: 'rossini@gmail.com',mobno:'75477543',pwd:'524'},
  { id: 9,   name: 'Harvey', email: 'harvey@gmail.com' ,mobno:'7547547',pwd:'976'},
];

const Trainers = () => {

  const[open,setOpen] = useState(false);

  const [inputs,setInputs]=useState({
    name:"",
    email:"",
    password:""
  });
  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,

    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <Container maxWidth='lg'>
        <Grid Container  style={{marginTop:"100px"}}>
        <Breadcrumbs aria-label="breadcrumb">
        <Typography color="primary">Admin Panel</Typography>
        <Typography color="primary">Trainers</Typography>                                
      </Breadcrumbs>
          <Grid item xs={12} sx={{marginLeft:"0"}} sm={6}>
            <h1>Trainers</h1>
          </Grid>
          <Grid item xs={12} sx={{marginLeft:"0",textAlign:"right",marginTop:"0"}}  sm={6}>
            <>
            {/* Trainers loginform */}
            <Button onClick={()=>setOpen(true)} sx={{marginBottom:"10px"}} variant='contained'>Add Trainer</Button>
            <Dialog open={open} onClose={()=>setOpen(false)}>
      <form onSubmit={handleSubmit}>
        <Box display="flex" 
             flexDirection={'column'} 
             maxWidth={400} alignItems="center"
            justifyContent={'center'} 
            margin="auto" 
            marginTop={5} 
            padding={5} 
            borderRadius={5} 
            boxShadow={'5px 5px 10px #ccc'}
            sx={{":hover":{
              boxShadow:"10px 10px 20px #ccc",
            },
            }}>
          <Typography variant='h2' padding={2} textAlign="center">Trainers</Typography>
          <TextField 
          value={inputs.name} 
          name="name" 
          onChange={handleChange} 
          margin='normal' 
          type={'text'} 
          variant='outlined' 
          placeholder='Name'/>

          <TextField 
          value={inputs.email} 
          name="email" 
          onChange={handleChange}  
          margin='normal' 
          type={'email'}       
          variant='outlined' 
          placeholder='Email'/>

          <TextField 
          value={inputs.password} 
          name="password" 
          onChange={handleChange}  
          margin='normal' 
          type={'password'}  
          variant='outlined' 
          placeholder='Password'/>

          <Button 
          type="submit" 
          sx={{marginTop:3,borderRadius:2}} 
          variant='contained' 
          color='success'>Save</Button>
        </Box>
      </form>
      </Dialog>
            </>
          </Grid>
      </Grid>
      </Container>
      <Container>
      <Box sx={{ height: '400px', width: 'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </Container>
    </div>
  )
}

export default Trainers;
