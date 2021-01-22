import React from "react"

const Card = ({ name }) => {
  return (
    <div className="card-container">
      <h4>
        <b>{name.name}</b>
      </h4>
      <p>{name.amount}</p>
    </div>
  )
}

export default Card
