import React from 'react'
import BorderCard from '../common/BorderCard';

const Applicant = (props) => {
    const{name, resume} = props.applicant;

    return (
      <BorderCard style={{flexDirection: "column", maxWidth: "300px", backgroundColor: "rgb(153, 185, 188)"}}>
          <h3>{name}</h3>
          <p>{resume}</p>
      </BorderCard>
    )
  }

export default Applicant