import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import RegSplash from '../../assets/regSplash.jpg'
import { apiHostUrl } from '../../config';
import Button from '../common/Button';
import Container from '../common/Container';
import Splash from '../common/Splash';
import { AuthContext } from '../Providers/AuthProvider';
import JobPost from './JobPost';



const ViewJobPosts = () => {

const [jobList, setJobList] = useState([]);

const [auth] = useContext(AuthContext);

useEffect(() => {

const viewJobPosts = async () => {
    try {
        const res = await axios.get(`${apiHostUrl}/JobPost/`, {
            headers : {
            Authorization: `Bearer ${auth.token}`
        }
    });
        setJobList(res.data);
        console.log(res.data);
    } catch(err) {
        console.error(err.response ? err.response.data : err.message)
    }
}
viewJobPosts();
}, []);

async function applyForJob(id){
    console.log("AUTH TEST:" + auth.token);
    console.log(auth.id);
    console.log(auth.roles);
    console.log("ID TEST: " + id)
    try {
        const res = await axios.put(`${apiHostUrl}/JobPost/apply/${id}`, {} , {
            headers : {
            Authorization: `Bearer ${auth.token}`
        }
    });
        alert(res.data);
        console.log(res.data);
    } catch(err) {
        console.error(err.response ? err.response.data : err.message)
    }
}

const displayJobs = () => {

    return jobList.map(job => {
        return <div style={{flexDirection:'column'}}> 
                    <JobPost job = {job} key = {job.id}/>
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
                backgroundAttachment: 'fixed'}}>
                    <br/>
            <h1>Job Listings</h1>
            </Splash>
            { jobList == null ?
                <p>LOADING...</p>
                :
                displayJobs()
            }
        </Container>
  )
}

export default ViewJobPosts