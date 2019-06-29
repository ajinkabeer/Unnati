import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Styledhero = ({img,className,children,home}) => {
  return(
   <BackgroundImage className={className} fluid={img} home={home}>
    {children}
  </BackgroundImage>
  )
}

export default styled(Styledhero) `
min-height:${props=>(props.home?"calc(100vh - 62px)":"40vh")};
background:${props =>(props.home?"linear-gradient(rgba(244, 67, 48, 0.7), rgba(0, 0, 0, 0.7))center/cover no-repeat":"linear-gradient(rgba(244, 67, 48, 0.7), rgba(0, 0, 0, 0.7))center/cover no-repeat")};
background-poistion:center;
background-size:cover;
opacity:1!important;
display:flex;
justify-content:center;
align-items:center;
`
