import React, { useState } from "react"
import Card from "./Card"

const sortByName = (a, b) => (a.name < b.name ? -1 : 1)
const sortByAmount = (a, b) => (a.amount > b.amount ? -1 : 1)

const filterNames = (names, search) => {
  return names.filter((n) => n?.name.toLowerCase().includes(search))
}

const NameList = ({ names, setNames }) => {
  const [sortAlphabetically, setSortAlphabetically] = useState(true)
  const [search, setSearch] = useState("")

  const handleClick = () => {
    setSortAlphabetically(!sortAlphabetically)
    handleSorting()
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSorting = () => {
    if (sortAlphabetically) {
      const alphabeticallySortedNames = names.sort(sortByName)
      setNames(alphabeticallySortedNames)
    } else {
      const numericallySortedNames = names.sort(sortByAmount)
      setNames(numericallySortedNames)
    }
  }

  //get the aggregate name count
  const accumulatedNamecount = names.reduce(
    (accumulated, current) => accumulated + current.amount,
    0
  )

  return (
    <div className="namelist-container">
      <div className="menu-container">
        {/* up/down arrow */}
        <i
          className="material-icons unselectable"
          onClick={() => handleClick()}
        >
          arrow_drop_{sortAlphabetically ? "down" : "up"}
        </i>

        {/* search/filter bar */}
        <input onChange={handleSearchChange} size="7" />

        {/* name stats */}
        <h6>unique names: {names.length}</h6>
        <h6>total entries: {accumulatedNamecount}</h6>

        {/* up/down arrow */}
        <i
          className="material-icons unselectable"
          onClick={() => handleClick()}
        >
          arrow_drop_{sortAlphabetically ? "up" : "down"}
        </i>
      </div>

      {filterNames(names, search).map((name) => (
        <Card name={name} key={`${name.name}-${name.amount}`} />
      ))}
    </div>
  )
}

export default NameList
