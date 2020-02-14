import React from 'react';
import "../App.css";
import styled from "styled-components";

const Card = styled.div`
    
    background-color: green;
    width:25%;
    margin: 0 auto;
    padding-bottom: 20px;
    h1 {
        color: lightblue;
        background red;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    p {
        color: lightblue;
    }
`;

const PlayerCard = ({playerInfo}) => {
    // console.log(playerInfo)
    const { name, country, searches } = playerInfo;
    return (
        <Card>
            <h1>name: {playerInfo.name} </h1>
            <p> Country: {playerInfo.country} </p>
            <p> Searches: {playerInfo.searches} </p>
            
        </Card>
    )
}

export default PlayerCard;