import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import Styles from './layout.css'

const Layout = ({children}) => {
  return (
    <main>
    <Navbar style={{  boxShadow:'2px'}} />
    {children}
    <Footer/>
    </main>
  )
}

export default Layout
