import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RegSplash from '../../assets/regSplash.jpg'
import { apiHostUrl } from '../../config';
import Button from '../common/Button';
import Container from '../common/Container';
import Input from '../common/Input';
import Splash from '../common/Splash';
import { AuthContext } from '../Providers/AuthProvider';
import JobPost from './JobPost';



const ViewJobPosts = () => {

    const [jobList, setJobList] = useState([]);

    const [keyword, setKeyword] = useState("");

    const [auth] = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {

        const viewJobPosts = async () => {
            try {
                const res = await axios.get(`${apiHostUrl}/JobPost/`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                setJobList(res.data);
                console.log(res.data);
            } catch (err) {
                console.error(err.response ? err.response.data : err.message)
            }
        }
        viewJobPosts();
    }, []);

    async function applyForJob(id) {
        try {
            const res = await axios.put(`${apiHostUrl}/JobPost/apply/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            alert(res.data);
            console.log(res.data);
            navigate("/viewAppliedJobs");

        } catch (err) {
            console.error(err.response ? err.response.data : err.message)
        }
    }

    async function searchJobs(keyword) {
        try {
            const res = await axios.get(`${apiHostUrl}/JobPost/search/${keyword}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            setJobList(res.data);
            console.log(res.data);

        } catch (err) {
            console.error(err.response ? err.response.data : err.message)
        }
    }

    const displayJobs = () => {

        return jobList.map(job => {
            return <div style={{ flexDirection: 'column' }}>
                <JobPost job={job} key={job.id} />
                <Button onClick={() => applyForJob(job.id)} > Apply </Button>
            </div>
        })

    }

    return (
        <Container>
            <Splash image={RegSplash} style={{
                height: "25vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                textAlign: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <br />
                <h1>Job Listings</h1>

            </Splash>
            <div>
                <Input
                    name="keyword"
                    id="keyword"
                    value={keyword}
                    placeholder={"Search Jobs"}
                    onChange={e => setKeyword(e.target.value)}
                    type="text"
                />
                <Button onClick={() => { searchJobs(keyword) }}> Search </Button>
            </div>
            {jobList == null ?
                <p>LOADING...</p>
                :
                displayJobs()
            }
        </Container>
    )
}

export default ViewJobPosts