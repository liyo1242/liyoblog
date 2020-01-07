import React, { Children } from "react"
import "./layout.css"

const layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default layout
