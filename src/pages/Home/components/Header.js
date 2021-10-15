import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@mui/material/Avatar';

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
    button: {
        marginRight: 20,
    },
    bell: {
        marginRight: 20, 
    }
});

function Header() {
    const Classes = useStyles();
    return (
    <AppBar position="fixed" color="inherit" className={Classes.appBar}>
            <Toolbar>
                <img src="images/logo.png" alt="logo" className={Classes.img} />
                <div className={Classes.grow}></div>
                <div className={Classes.userSelection}>
                    <Button variant="contained" className={Classes.button} color="primary">
                        Novo Post
                    </Button>
                    <SvgIcon className={Classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Kelson Carvalho" src="images/avatars/avatar_1.jpg" />
                </div>
        </Toolbar>
    </AppBar>
    );
}

export default Header;