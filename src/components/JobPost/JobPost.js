import React from 'react'
import BorderCard from '../common/BorderCard'

const JobPost = (props) => {

    const{title, content, employer} = props.job;

  return (
    <BorderCard style={{flexDirection: "column", minWidth: "500px"}}>
        <h1>{title}</h1>
        <p>{content}</p>
    </BorderCard>
  )
}

export default JobPost