import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { apiHostUrl } from '../../config';
import Container from '../common/Container';
import Splash from '../common/Splash';
import { AuthContext } from '../Providers/AuthProvider';
import NewJobPostForm from './NewJobPostForm'
import RegSplash from "../../assets/regSplash.jpg";

const CreateJobPost = () => {
    const [job, setJob] = useState({
        title: '',
        content: ''
    })

    const [auth] = useContext(AuthContext);
    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setJob({
            ...job,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = job;
        createJobPost(data);
    }

    const createJobPost = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/JobPost/`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            console.log("JOB POST SUCCESFUL:")
            console.log(res.data)
            navigate("/");
        } catch(err) {
            console.error(err.response ? err.response.data : err.message)
        }
    }
  return (
    <Container>
        <Splash image={RegSplash} style={{
            height: "20vh",
            color: "#F1F1F1",
            textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>
        <h1>Create Job Post</h1>
        </Splash>
        <NewJobPostForm
            job={job}
            onChange={updateForm}
            onSubmit={onSubmit}
        />
    </Container>
  )
}

export default CreateJobPost