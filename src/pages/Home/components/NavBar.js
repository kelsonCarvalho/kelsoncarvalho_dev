import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) =>({
    root: {
        padding: 16,
        width: 275,
        marginRight: 16,
    },
    pontaaponta: {
        width: '100%',
    }
}));

const tags = [
    { id: 1, name: 'reactjs' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'dotnet' },
    { id: 4, name: 'php'},
    { id: 5, name: 'materialdesign'},
    { id: 6, name: 'webdev'},
]

function Navbar() {
    const Classes = useStyles();
    return (
        <Paper className={Classes.root}>
            <Button variant="outlined" color="primary" className={Classes.pontaaponta}>Registrar Gratis</Button>
            <ListSubheader>
                {
                    'Tags em alta'
                }
            </ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>

    );
}

export default Navbar;