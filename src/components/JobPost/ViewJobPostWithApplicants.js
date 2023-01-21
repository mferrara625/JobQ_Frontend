import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import RegSplash from '../../assets/regSplash.jpg'
import { apiHostUrl } from '../../config';
import Applicant from '../Applicant/Applicant';
import Container from '../common/Container';
import Splash from '../common/Splash';
import { AuthContext } from '../Providers/AuthProvider';
import JobPost from './JobPost';



const ViewJobPostWithApplicants = () => {

const [jobList, setJobList] = useState([]);

const [auth] = useContext(AuthContext);

useEffect(() => {

const viewJobPosts = async () => {
    try {
        const res = await axios.get(`${apiHostUrl}/JobPost/viewYourCurrentListings/${auth.id}`, {
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



const displayJobs = () => {

    return jobList.map(job => {
        return <div style={{flexDirection:'column'}}> 
                    <JobPost job = {job} key = {job.id}/>
                        APPLICANTS:
                    {job.applicants.map(appl => {
                        return <div style={{ justifyContent: "center"}}>
                            <Applicant applicant = {appl}/>
                            </div>
                    })}
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
            <h1>Your Job Listings</h1>
            </Splash>
            { jobList == null ?
                <p>LOADING...</p>
                :
                displayJobs()
            }
        </Container>
  )
}

export default ViewJobPostWithApplicants