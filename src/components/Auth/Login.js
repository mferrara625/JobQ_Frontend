import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import Container from "../common/Container";
import Splash from "../common/Splash";
import RegSplash from "../../assets/regSplash.jpg";
import {apiHostUrl} from "../../config"
import { AuthContext } from "../Providers/AuthProvider";


const Login = (props) => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setUser({
            ...user,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = user;
        data.username = data.email;
        login(data);
    }

    const login = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
            console.log("LOGIN TEST:: " + res.data.id);
            setAuth({
                token: res.data.token,
                profile: {},
                roles: res.data.roles,
                id: res.data.id
            })
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
        <h1>Login</h1>
        </Splash>
        <LoginForm
            user={user}
            onChange={updateForm}
            onSubmit={onSubmit}
        />
    </Container>
    )
}

export default Login;