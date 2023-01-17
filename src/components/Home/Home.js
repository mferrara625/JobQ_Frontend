import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import splashImg from '../../assets/splash.jpg';
import axios from "axios";



const Home = () => {
   

    return (
        <Container>
            <Splash image={splashImg} style={{
                color: "#f1f1f1",
                textAlign: 'center'
            }}>
                <h1 style={{
                    textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
                }}>Welcome to JobQ</h1>
                

            </Splash>
        </Container>
    )
}

export default Home;