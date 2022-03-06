import {createTheme, responsiveFontSizes, Theme} from "@mui/material";

export const theme: Theme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "dark"
        }
    })
)