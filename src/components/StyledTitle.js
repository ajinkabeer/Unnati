import React from 'react'
import Styled from 'styled-components'

const Title = ({title,subtitle}) => {
  return(
    <TitleWrapper>
    <h4>
    <span className="title">{title}</span>
    <span>{ subtitle}</span>
    </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = Styled.div `
text-transform:uppercase;
font-size:2.3 rem;
margin-bottom:2rem;
h4{
  text-align:center;
  letter-spacing:7px;
  color:var(--primaryColor);
  padding-top:10px;
}
.title{
  color: var(--mainBlack);
}
span{
  display:block;
}
@media (min-width:576px){
  span{
    display:inline-block;
    margin:0 0.35rem;
  }
}
`

export default Title;
