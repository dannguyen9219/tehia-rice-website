import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Drawer, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./AppNavDrawer.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppNavDrawer = ({ isDrawer, setDrawer, navItems }: { isDrawer: boolean, setDrawer: (params: boolean) => any, navItems: Array<{ name: string, route: string }> }) => {
  const navigate = useNavigate()
  return (
    <Box onClick={() => setDrawer(false)} sx={{ textAlign: "center" }}>
      <Drawer
        variant="temporary"
        open={isDrawer}
        onClose={() => setDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "80%" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
              SALON BY TEHIA
            </Typography>
          </Box>
          <Box sx={{ mt: 1, mr: 1 }}>
            <CloseIcon sx={{ fontSize: 26, cursor: "pointer" }} onClick={() => setDrawer(false)} />
          </Box>
        </Box>
        <Divider />
        <List>
          {navItems.map((item: { name: string, route: string }) => (
            <ListItem key={item.name} disablePadding onClick={() => navigate(item.route)}>
              <ListItemButton sx={{ textAlign: "left" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
