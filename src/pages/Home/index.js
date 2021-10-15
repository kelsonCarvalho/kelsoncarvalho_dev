import React from "react";
//import './style.css';
import { makeStyles } from "@material-ui/styles";
import Header from "./components/Header";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
    }
});


function Home() {
    const Classes = useStyles();
    return (
        <div className={Classes.root}>
            <Header />
            <div className={Classes.toolbar}></div>
            <main className={Classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default Home;