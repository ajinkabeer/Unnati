import React from 'react'
import Styles from '../css/banner.module.css'

const Banner = ({title,info,children}) => {
  return (
  <div className={Styles.banner}>
  <h1>{title}</h1>
  <p>{info}</p>
  {children}
  </div>
)
}

export default Banner
