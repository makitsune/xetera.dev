import React from "react"
import "typeface-sriracha"
import "typeface-jetbrains-mono"
import "./static/fonts/wotfard/stylesheet.css"
import { wrapRootElement as wrap } from "./src/wrappers/gatsby"
import { defaultTheme } from "./src/data/themeProvider"
import { ColorModeScript } from "@chakra-ui/react"

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode={defaultTheme}
      key="chakra-ui-no-flash"
    />,
  ])
}

export const wrapRootElement = wrap