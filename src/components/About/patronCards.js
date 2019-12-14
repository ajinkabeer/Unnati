import React from "react"
import "./team.css"
const patronCards = props => {
  return (
    <div>
      <div class="column" style={{ paddingBottom: 5 }}>
        <div class="card">
          <div class="container">
            <h2 style={{ fontSize: 15, marginTop: 5 }}>{props.name}</h2>
            <p class="title" style={{ fontSize: 11 }}>
              {props.title}
            </p>
            <a
              className="btn-primary"
              style={{ marginBottom: 10 }}
              href={props.link}
            >
              Facebook Link
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default patronCards
