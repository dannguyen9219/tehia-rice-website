import React from "react"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"


// Application Screen || App State
// =================================================================================================
// =================================================================================================
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"
import { observer } from "mobx-react-lite"


// Application Navigator || App Imports
// =================================================================================================
// ================================================================================================='
import { AppLayout } from "@src/routing-app/app-layout/AppLayout"
import { AppMainScreen } from "@src/routing-app/app-screen-main/MainScreen"
import { AppAboutScreen } from "@src/routing-app/app-screen-about/AboutScreen"
import { AppContactScreen } from "@src/routing-app/app-screen-contact/ContactScreen"


// Application Navigator || Define Exports
// =================================================================================================
// =================================================================================================
// The Mobx `observer()` is used to reload the authentication wrapper for the 2 route types ========
export const NavigationRoot = observer(() => {
  const AuthStore: IAuthStore = MSTContext().AuthStore

  return (
    <Box className="wrapper">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<AppMainScreen />} />
          <Route path="about" element={<AppAboutScreen />} />
          <Route path="contact" element={<AppContactScreen />} />
          <Route path={"/*"} element={<AppMainScreen />} />
        </Route>
      </Routes>
    </Box>
  )
})
