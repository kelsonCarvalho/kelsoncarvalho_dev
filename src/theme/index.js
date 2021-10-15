import { createTheme } from '@mui/material/styles';
import { colors } from '@material-ui/core';

const theme = createTheme({
    pallete: {
        primary: {
            main: colors.indigo['A400']
        },
        secondary: {
            main: colors.orange['A700']
        }
    }
});

export default theme;