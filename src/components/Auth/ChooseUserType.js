import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { apiHostUrl } from '../../config';
import Button from '../common/Button';
import Container from '../common/Container'
import Input from '../common/Input';
import { AuthContext } from '../Providers/AuthProvider';

const ChooseUserType = () => {

    const [auth] = useContext(AuthContext);

    const [employer, setEmployer] = useState({
        companyName: ""
    })

    const [applicant, setApplicant] = useState({
        name: ""
    })

    const navigate = useNavigate();

    const regEmployer = async (data) => {
        console.log("REGEMPLOYER NAME TEST ###: " + employer.companyName)
        console.log("TEST AUTH IN REGEMPLOYER: " + auth.token);
        try {
            const res = await axios.post(`${apiHostUrl}/Employer/`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            console.log(res.data);
            navigate("/");
        } catch(err) {
            console.error(err.response ? err.response.data : err.message)
        }
    }

    const regApplicant = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/applicant/`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            console.log(res.data);
            navigate("/");
        } catch(err) {
            console.error(err.response ? err.response.data : err.message)
        }
    }

  return (
    <Container style={{justifyContent: 'space-evenly'}}>
        <h1>ALMOST THERE!</h1>
        <h3>choose an option below...</h3>
        <div>
        <Input
        name="name"
        id="name"
        value={employer.companyName}
        placeholder={"Company Name"}
        onChange={e => setEmployer({companyName: e.target.value})}
        type="text"
        required></Input>
        <Button onClick={() => {regEmployer(employer)}}> Register As Employer</Button>
        </div>
        <div>
        <Input
        name="name"
        id="name"
        value={applicant.name}
        placeholder={"Applicant Name"}
        onChange={e => setApplicant({name: e.target.value})}
        type="text"
        required></Input>
        <Button onClick={() => {regApplicant(applicant)}}> Register As Applicant</Button>
        </div>

    </Container>
  )
}

export default ChooseUserType