import React from 'react'
import Title from '../StyledTitle'
import Styles from '../../css/services.module.css'
import Services from '../../constants/services'

const services = () => {
  return(
    <section className={Styles.services}>
    <Title title="our" subtitle="branches" />
    <div className={Styles.center}>
    {Services.map((item,index)=>{
      return (
      <article key={index} className={Styles.service}>
       <h4>{item.title}</h4>
      <p>{item.text}</p>
      <p>{item.para}</p>
      <p>{item.link}</p>
        </article>
    )
    })}
      </div>
    </section>
  )

}

export default services
