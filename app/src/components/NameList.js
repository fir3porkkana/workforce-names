import React, { useState } from "react"
import Card from "./Card"

const NameList = ({ names, setNames }) => {
  const [sortAlphabetically, setSortAlphabetically] = useState(true)

  const handleClick = () => {
    setSortAlphabetically(!sortAlphabetically)
    handleSorting()
  }
  const handleSorting = () => {
    if (sortAlphabetically) {
      const alphabeticalNames = names.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        } else {
          return 0
        }
      })
      setNames(alphabeticalNames)
    } else {
      const numericalNames = names.sort((a, b) => b.amount - a.amount)
      setNames(numericalNames)
    }
  }

  return (
    <div className="namelist-container">
      <div className="arrow-container">
        <i className="material-icons" onClick={() => handleClick()}>
          arrow_drop_{sortAlphabetically ? "down" : "up"}
        </i>
        <i className="material-icons" onClick={() => handleClick()}>
          arrow_drop_{sortAlphabetically ? "up" : "down"}
        </i>
      </div>
      {names.map((name) => (
        <Card name={name} key={`${name.name}-${name.amount}`} />
      ))}
    </div>
  )
}

export default NameList
