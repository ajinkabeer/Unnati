import React from "react"
import "./team.css"
import Lokesh from "../../images/lokesh.jpg"
import Jyoti from "../../images/jyoti.jpg"
import oscar from "../../images/oscar.jpg"
import punia from "../../images/punia.jpg"

const team = () => {
  return (
    <div class="row">
      <div class="column">
        <div class="card">
          <img src={oscar} alt="oscar fernandes" style={{ width: "100%" }} />
          <div class="container">
            <h2 style={{ fontSize: 17, marginTop: 5 }}>Mr. Oscar Fernandes</h2>
            <p class="title">Chief Patron of Unnati</p>
            <p style={{ fontSize: 12 }}>(Member of Parliament, Rajya Sabha)</p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src={punia} alt="Mr. P. L. Punia" style={{ width: "100%" }} />
          <div class="container">
            <h2 style={{ fontSize: 17, marginTop: 5 }}>Mr. P. L. Punia</h2>
            <p class="title">Chief Patron of Unnati</p>
            <p style={{ fontSize: 12 }}>(Member of Parliament, Rajya Sabha)</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img src={Lokesh} alt="Lokesh" style={{ width: "100%" }} />
          <div class="container">
            <h2 style={{ fontSize: 17, marginTop: 12 }}>Mr.Lokesh Chugh</h2>
            <p style={{ paddingBottom: 30 }} class="title">
              Founder and Chairman
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img src={Jyoti} alt="jyoti" style={{ width: "100%" }} />
          <div class="container">
            <h2 style={{ fontSize: 17, marginTop: 12 }}>Ms. Jyoti Gupta</h2>
            <p style={{ paddingBottom: 30 }} class="title">
              President
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default team
