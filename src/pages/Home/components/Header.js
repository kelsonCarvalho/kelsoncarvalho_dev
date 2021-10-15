import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from 'react-feather';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSelection: {
        display: 'flex',
        alignItems: 'center',
    },
});

function Header() {
    const Classes = useStyles();
    return (
    <AppBar position="fixed" color="inherit" className={Classes.appBar}>
            <Toolbar>
                <img src="images/logo.png" alt="logo" className={Classes.img} />
                <div className={Classes.grow}></div>
                <div className={Classes.userSelection}>
                    <Button variant="contained" color="primary">
                        Novo Post
                    </Button>
                    <SvgIcon>
                        <Bell></Bell>
                    </SvgIcon>
                </div>
            {/*<div className="">
                <span><h3>Conecta-Dev</h3></span>
                <input type="text"></input>
            </div>
            <div className="">
                
                <span>img 1</span>
                <span>img 2</span>
            </div>*/}
        </Toolbar>
    </AppBar>
    );
}

export default Header;