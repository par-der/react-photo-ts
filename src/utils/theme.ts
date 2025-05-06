import {createTheme} from "@mui/material/styles";
import {ruRU} from "@mui/material/locale";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0e684c",
        },
        secondary: {
            main: "#f50057",
        },
        success: {
            main: "#6ebe44",
        },
    },
    typography: {
        fontSize: 12,
        fontFamily: "Fira Sans, Nunito Sans, Raleway, sans-serif",
        button: {
            fontFamily: "Fira Sans, Nunito Sans, Raleway, sans-serif",
            textTransform: "none",
            fontWeight: "light",
            fontSize: 14,
        },

    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    fontFamily: "Fira Sans, Nunito Sans, Raleway, sans-serif",
                    fontSize: 23,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    fontSize: 24,
                },
            },
        }
    },
}, ruRU);