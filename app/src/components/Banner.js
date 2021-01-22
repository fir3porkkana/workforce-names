import React from "react"
import { ReactComponent as Logo } from "./componentAssets/solita-logo.svg"

//tutki tätä widthiä ku se vaikuttaa näköjää kokoon
const Banner = () => (
  <div className="App-banner">
    <Logo fill="white" height="90%" width="10%" />
    <h2>names</h2>
  </div>
)

export default Banner
