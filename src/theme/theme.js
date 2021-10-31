import {createTheme} from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff"
    }
  },
  typography: {
    h5: {
      fontSize: "1.625rem",
      fontFamily: "Montserrat"
    },
    h6: {
      fontSize: "1.125rem",
      fontFamily: "Montserrat"
    },
    body1: {
      fontWeight: 700,
      lineHeight: "19.5px",
      fontFamily: "Montserrat"
    }
  }
})