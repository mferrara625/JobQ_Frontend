import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import CreateJobPost from '../JobPost/CreateJobPost';
import ViewJobPosts from '../JobPost/ViewJobPosts';
import ViewJobPostWithApplicants from '../JobPost/ViewJobPostWithApplicants';
import ChooseUserType from '../Auth/ChooseUserType';
import ViewAppliedJobs from '../JobPost/ViewAppliedJobs';
import EditJobPost from '../JobPost/EditJobPost';

const AppRouter = () => {
    return (
        <div style={{width: "100%", flexDirection: 'column'}}>


        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/createJobPost" element={<CreateJobPost />} />
            <Route path="/jobListings" element={<ViewJobPosts/>} />
            <Route path="/viewCompanyListings" element={<ViewJobPostWithApplicants/>} />
            <Route path="/continueReg" element={<ChooseUserType/>} />
            <Route path="/viewAppliedJobs" element={<ViewAppliedJobs/>} />
            <Route path="/editJobPost/:id" element={<EditJobPost/>} />





        </Routes>
        </div>                 
    )
}

export default AppRouter;