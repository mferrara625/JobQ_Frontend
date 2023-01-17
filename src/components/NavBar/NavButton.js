import React, {useState} from "react";
import {NavLink} from 'react-router-dom';

const NavButton = (props) => {
    const [hover, setHover] = useState(false);

    return (

        <NavLink style={{
            background: 'transparent',
            textDecoration: 'none',
            fontSize: '1.25em',
            color: "#010101",
            fontWeight: 600,
            textShadow: '1px 1px #F1F1F1',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            margin: '0 10px',
            opacity: hover ? "60%" : "100%"
        }} to={props.to}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >

            {props.label} 
        </NavLink>
    )
}

export default NavButton;