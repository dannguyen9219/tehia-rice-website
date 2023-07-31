import React from "react"
import { Box, Typography } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./MainScreen.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppMainScreen = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: 1000, width: "100%", border: "1px red solid" }}>
        <Typography paragraph variant="h6">
          Welcome to My Vite Template! 😎
        </Typography>
        <Typography paragraph>
          Feel free to poke around the project because you are now inside a fully structured React application 🥳
        </Typography>
      </Box>
    </Box>
  )
}
