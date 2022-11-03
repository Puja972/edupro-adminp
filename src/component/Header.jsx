import React,{useState} from 'react';
import { AppBar,Tab,Tabs,Toolbar,Typography,useMediaQuery,useTheme } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DrawerComp from './DrawerComp';
import { Link, useLocation } from 'react-router-dom';

// const PAGES = ["Admin","Trainer","DashBoard"];
const Header = () => {
  const [value,setvalue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  // const[inputs,setInputs]=useState({
  //   name:"",
  //   email:"",
  //   password:"",
  // });
  // const handleChange=(e)=>{
  //   setInputs((prevState)=>({
  //     ...prevState,
  //     [e.target.name]:e.target.value
  //   }))
  // }
  // const[open,setOpen]=useState(false);
  
  let path = useLocation();
  if(path.pathname !=='/'){ 

  return (
    <React.Fragment>
        <AppBar sx={{background:"#068695"}}>
            <Toolbar>
            <AdminPanelSettingsIcon />&nbsp;
            
            {
              isMatch?(
                <>
                <Typography>About us</Typography>
                <DrawerComp />
                </>
              ):(

                <>
                <Typography sx={{fontSize:'1.5rem',paddingLeft:'2%'}}>
                Admin Panel
            </Typography>
                <Tabs sx={{marginLeft:'auto'}} textColor='white' value={value} onChange={(e,value)=>{setvalue(value)}} indicatorColor="secondary">
                 
                      <Tab label='Dashboard'  to='/dashboard' component={Link} />  
                      <Tab label='Admins'  to='/admins' component={Link} />  
                      <Tab label='Trainers'  to='/trainers' component={Link} />  
                      <Tab label='Logout'  to='/' component={Link} />  
                      {/* <Tab label=""></Tab>
                      <Tab label="Trainers"></Tab>
                      <Tab label="Logout"></Tab> */}
                      {/* <Loginform/> */}
                 
            </Tabs>
            
                </>
              )
            }
            </Toolbar>
        </AppBar>
    
    </React.Fragment>
  );
}
else{
  return(
    <div></div>
  )
}
}
export default Header;
