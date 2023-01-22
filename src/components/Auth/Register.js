import React, {useState, useContext} from "react";
import NewUserForm from "./NewUserForm";
import Container from "../common/Container";
import Splash from "../common/Splash";
import SignupSplash from "../../assets/signupSplash.jpg";
import axios from "axios";
import { apiHostUrl } from "../../config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = (props) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useContext(AuthContext);
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        fName: "",
        lName: "",
        })
        
    const updateForm = (field, value) => {
        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = newUser;
        data.username = data.email;
        createUser(data);
    };

   

    const createUser = async (data) => {
        try{
            const res = await axios.post(`${apiHostUrl}/api/auth/signup`, data);
            console.log(res.data)
            login(data);
        } catch (err) {
            console.error(err.message);
        }
       

    }

    const login = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
            console.log(res.data); 
            setAuth({
                token: res.data.token,
                profile: {},
                roles: res.data.roles,
                id: res.data.id
            })
            navigate("/continueReg");
        } catch (err) {
            console.error(err.response.data);
        }
    }



    return (
        <Container>
            <Splash image={SignupSplash} style={{
                height: "20vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>
            <h1>Register</h1>
            </Splash>
            <NewUserForm
                newUser={newUser}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default Register;