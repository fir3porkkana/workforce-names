import React from "react"
import { ReactComponent as Logo } from "./componentAssets/solita-logo.svg"

const Banner = () => (
  <div className="App-banner">
    <Logo fill="white" height="90%" width="10%" />
    <h2 className="unselectable">name app</h2>
  </div>
)

export default Banner
