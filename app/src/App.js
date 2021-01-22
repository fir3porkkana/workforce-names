import React, { useEffect, useState } from "react"
import useAxios from "axios-hooks"
// import logo from "./solita-logo.svg"
import Banner from "./components/Banner"
import NameList from "./components/NameList"

const App = () => {
  const [names, setNames] = useState()

  const [{ data, loading, error }] = useAxios("http://localhost:3001/api")

  useEffect(() => {
    if (!loading && data) {
      console.log(data)
      setNames(data)
    }
    if (error) {
      console.log("error: ", error)
    }
  }, [loading, error, data, setNames])

  return (
    <div className="App">
      <Banner />
      <header className="App-container">
        {loading || !names ? <h2>loading...</h2> : <NameList names={names} />}
      </header>
    </div>
  )
}

export default App
