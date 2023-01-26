import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { apiHostUrl } from '../../config';
import Container from '../common/Container';
import Splash from '../common/Splash';
import { AuthContext } from '../Providers/AuthProvider';
import RegSplash from "../../assets/regSplash.jpg";
import EditJobPostForm from './EditPostForm';

const EditJobPost = () => {
    
    let id = useParams();
    const [job, setJob] = useState({
        title: undefined,
        content: undefined,  // maxLength 1020 characters
        location: undefined
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
        editJobPost(data);
    }

    const editJobPost = async (data) => {
        console.log(id.id)
        try {
            const res = await axios.put(`${apiHostUrl}/JobPost/${id.id}`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            console.log(res.data)
            navigate("/viewCompanyListings");
        } catch(err) {
            console.error(err.response ? err.response.data : err.message)
        }
    }

    useEffect(() => {

        const getJob = async () => {
            try {
                const res = await axios.get(`${apiHostUrl}/JobPost/${id.id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                setJob(res.data);
                console.log(res.data);
            } catch (err) {
                console.error(err.response ? err.response.data : err.message)
            }
        }
        getJob();
    }, []);

  return (
    <Container>
        <Splash image={RegSplash} style={{
            height: "20vh",
            color: "#F1F1F1",
            textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>
        <h1>Edit Job Post</h1>
        </Splash>
        <EditJobPostForm
            job={job}
            onChange={updateForm}
            onSubmit={onSubmit}
        />
    </Container>
  )
}

export default EditJobPost