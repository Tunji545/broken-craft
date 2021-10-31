import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { Button as MuiButton } from '@mui/material';
import { theme } from "../theme/theme";

function Button({variant, color, size, text, ...rest }) {

  return (
    <ThemeProvider theme={theme}>
      <MuiButton 
        variant={variant || "contained"}
        size={size || "small"}
        color={color || "primary"} 
        {...rest}
      >
        {text}
      </MuiButton>
    </ThemeProvider>
  )
}

export default Button;