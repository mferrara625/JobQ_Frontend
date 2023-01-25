import React from 'react'
import BorderCard from '../common/BorderCard'

const JobPost = (props) => {

    const{title, content, location, employer} = props.job;

  return (
    <BorderCard style={{flexDirection: "column", minWidth: "500px"}}>
        <h1>{title}</h1>
        <h3 style={{color: "#5C4853", fontFamily: 'cursive'}}>{location}</h3>
        <p>{content}</p>
    </BorderCard>
  )
}

export default JobPost