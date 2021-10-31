import {createTheme} from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff"
    },
    primary: {
      main: "#000"
    }
  },
  typography: {
    h5: {
      fontSize: "1.625rem",
      fontFamily: "Montserrat"
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 400,
      fontFamily: "Montserrat",
      lineHeight: "24.94px"
    },
    body1: {
      fontWeight: 700,
      lineHeight: "19.5px",
      fontFamily: "Montserrat"
    },
    subtitle1:  {
      fontWeight: 400,
      lineHeight: "28px",
      fontFamily: "Montserrat"

    },
    h2: {
      fontSize: "4rem",
      fontFamily: "Montserrat",
      fontWeight: 700,
      lineHeight: "78.02px"

    }
  }
})