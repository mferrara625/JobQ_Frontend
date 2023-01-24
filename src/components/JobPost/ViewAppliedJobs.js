import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import RegSplash from '../../assets/regSplash.jpg'
import { apiHostUrl } from '../../config';
import Container from '../common/Container';
import Splash from '../common/Splash';
import { AuthContext } from '../Providers/AuthProvider';
import JobPost from './JobPost';



const ViewAppliedJobs = () => {

const [jobList, setJobList] = useState([]);

const [auth] = useContext(AuthContext);

useEffect(() => {

const viewAppliedJobs = async () => {
    try {
        const res = await axios.get(`${apiHostUrl}/JobPost/viewYourAppliedJobs/${auth.id}`, {
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
viewAppliedJobs();
}, []);


const displayJobs = () => {

    return jobList.map(job => {
        return <div style={{flexDirection:'column'}}> 
                    <JobPost job = {job} key = {job.id}/>
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
            <h1>Your Jobs</h1>
            </Splash>
            { jobList == null ?
                <p>LOADING...</p>
                :
                displayJobs()
            }
        </Container>
  )
}

export default ViewAppliedJobs