import React from "react";
import styled from "styled-components";
import useDarkMode from "../hooks/useDarkMode.js";

const Button = styled.button`
  width:350px;
  height: 100px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  :hover {
    box-shadow: 0 14px 28px rgba(19, 128, 19, 0.25), 0 10px 10px rgba(19, 128, 19, 0.22);
    border-radius: 5%;
    border: green 1px solid;
    background: white;
  }
`;

export default function NavButton () {
    const [ darkMode, setDarkMode ] = useDarkMode("DarkMode", false);

    const toggle = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);        
    }
  
    return (

        <Button type="submit" onClick={toggle}>Dark Mode</Button>

    )
}