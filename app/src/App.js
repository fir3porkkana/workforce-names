import React, { useEffect, useState } from "react"
import useAxios from "axios-hooks"
// import logo from "./solita-logo.svg"
import Banner from "./components/Banner"

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
      <header className="App-header">
        {loading || !names ? (
          <h2 className="App-header">loading...</h2>
        ) : (
          names.map((name) => <p>{name.name}</p>)
        )}
      </header>
    </div>
  )
}

export default App
