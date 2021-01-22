import React from "react"
import Card from "./Card"

const NameList = ({ names }) => {
  return (
    <div className="namelist-container">
      {names.map((name) => (
        <Card name={name} />
      ))}
    </div>
  )
}

export default NameList
