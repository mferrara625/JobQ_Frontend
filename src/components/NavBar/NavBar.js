import React, { Fragment, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import NavButton from "./NavButton";

const NavBar = (props) => {

    const [auth] = useContext(AuthContext);
    return (
        <Fragment>
        <div style={{
            backgroundColor: "#5C4853",
            position: 'fixed',
            width: '100%',
            zIndex: 9999,
            top: 0,
            left: 0,
            height: '75px',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'

        }}>
            <h1 style = {{
                color: "#BCB099",
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "2.5em",
                margin: "0 20px",
                textShadow: '1px 1px #F5F6F1',
                textAlign: 'center'
            }}>JobQ</h1>
            <div style={{
                margin: '0 20px',
                flexDirection: 'row',
                background: 'transparent',
                userSelect: 'none',
                alignItems: 'center',
                textAlign: 'center'
            }}>
            <NavButton to="/" label='Home'/>
            <NavButton to="/signin" label='Login'/>
            <NavButton to="/signup" label='Sign Up'/>
            {auth.roles.includes("ROLE_EMPLOYER") ?
            <NavButton to="/createJobPost" label='Create Job Post'/>
        : " "}

            <NavButton to="/jobListings" label='Jobs'/>



            </div>
        </div>
        <div style={{ height: '75px'}}/>
        </Fragment>
        
    )
}

export default NavBar;