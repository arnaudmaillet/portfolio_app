import React, { useState } from 'react'
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#FFC500',
            contrastText: '#000'
        },
        info: {
            main: '#787878',
            light: '#FAFAFA',
            dark: '#1E1E1E',
        }
    },
})

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ff1e00',
            contrastText: '#000'
        },
        info: {
            main: '#787878',
            light: '#FAFAFA',
            dark: '#1E1E1E',
        }
    },
})

const Theme = (props) =>{
    const { children, darkMode } = props;
    return (<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>)
}

export const withTheme = (Component) => {
    return (props) => {
        const [darkMode, setDarkMode] = useState(false)
        return (
            <Theme darkMode={darkMode}>
                <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode}/>
            </Theme>
        )
    }
}