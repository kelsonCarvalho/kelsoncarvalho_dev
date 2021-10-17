import { createTheme } from '@mui/material/styles';
//import { colors } from '@material-ui/core';
import typography from './typography';
import palette from './palette';


const theme = createTheme({
    palette,
    typography,
});

export default theme;