import React from "react"
import Layout from "../components/Layout"
import Styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

const error = () => {
  return (
    <Layout>
      <header className={Styles.error}>
        <Banner info="You're not supposed to be here">
          <Link to="/" className="btn-white">
            Back To Home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
