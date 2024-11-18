import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logoSource from "../../../Assets/Images/logo.jpg"
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

export function Header(): JSX.Element {
    
    return (
        <div className="Header">
                <AppBar position="static" sx={{ backgroundColor: 'rgba(7,56,88,255)'}}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button sx={{ borderRadius: '15px', '&:hover': {backgroundColor: 'rgba(10,70,105,255)' }}}>
                                <NavLink to="/home">בית</NavLink> 
                        </Button>
                        <img src={logoSource} />
                        <Button sx={{ borderRadius: '15px', '&:hover': {backgroundColor: 'rgba(10,70,105,255)' }}}>
                                <NavLink to="/about">עלינו</NavLink>
                        </Button>
                    </Toolbar>
                </AppBar>
        </div>
    );
}
