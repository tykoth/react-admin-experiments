export const darkTheme = {
    "overrides": {
        "MuiTypography": {
            "headline": {
                "color": "red"
            },
        },
    },
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
};

export const lightTheme = {
    "overrides": {
        "MuiDrawer": {
            "docked": {
                "backgroundColor": "rgba(200,200,255,0.8)"
            }
        },
        "MuiToolbar": {
            "borderBottom": "1px solid rgba(200,200,255,0.75)",
            "root": {
                "borderBottom": "1px solid rgba(200,200,255,0.75)"
            }
        },
        "MuiTypography": {
            "headline": {
                "color": "red"
            },
        },
    },
    palette: {
        secondary: {
            light: '#5f5fc4',
            main: '#283593',
            dark: '#001064',
            contrastText: '#fff',
        },
        "text": {
            //    "primary":"rgba(255,255,255, 0.9)",
            //    "secondary":"rgba(255,255,255,  0.8)",
            //    "disabled":"rgba(0, 0, 0, 0.38)",
            //    "hint":"rgba(0, 0, 0, 0.38)"
        }
    },
};

export const newTheme = {
    "overrides": {
        "MuiTypography": {
            "headline": {
                "color": "red"
            },
        },
        "MuiTab": {
            "textColorInherit": {
                "color": "red"
            }
        }
    },
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "rgba(80,227,194,1)",
            "default": "rgba(74, 74, 74, 1)"
        },
        "primary": {
            "light": "rgba(215, 216, 226, 1)",
            "main": "rgba(54, 54, 56, 1)",
            "dark": "rgba(25, 28, 48, 1)",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "rgba(196, 211, 144, 1)",
            "main": "rgba(64, 71, 56, 1)",
            "dark": "rgba(26, 23, 22, 1)",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(255,255,255, 0.87)",
            "secondary": "rgba(255,255,255,  0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        }
    }
}

export const blackTheme = {
    "overrides": {
        "toolbar": {
            "backgroundColor": "rgba(8,8,8,0.8)"
        },
        "MuiToolbar": {
            "root": {
                "borderBottom": "1px solid rgba(200,200,255,0.75)"
            }
        },
        "Toolbar": {
            "backgroundColor": "rgba(8,8,8,0.8)",
            "toolbar": {
                "backgroundColor": "rgba(8,8,8,0.8)"
            }
        },
        "MuiTab": {
            "textColorInherit": {
                "color": "white"
            }
        },
        "MuiTypography": {
            "headline": {
                "color": "red"
            },
        },
    },
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "rgba(0,0,0, 0.7)",
            "default": "rgba(0, 0, 0, 1)"
        },
        "primary": {
            "light": "rgba(74, 74, 74, 1)",
            "main": "rgba(234, 213, 213, 0.75)",
            "dark": "rgba(0, 0, 0, 1)",
            "contrastText": "rgba(74, 74, 74, 1)"
        },
        "secondary": {
            "light": "#ff4081",
            "main": "rgba(0, 0, 0, 0.7)",
            "dark": "rgba(189, 16, 224, 1)",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(255, 255, 255, 1)",
            "secondary": "rgba(184, 233, 134, 1)",
            "disabled": "rgba(80, 227, 194, 1)",
            "hint": "rgba(64, 26, 230, 0.38)"
        }
    }
}
//@todo - facebookTheme, whatsappTheme, telegramTheme, gamehudZeroTheme
