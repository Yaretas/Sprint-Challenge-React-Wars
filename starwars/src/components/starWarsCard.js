import React from "react";
import styled from 'styled-components'

const Card = styled.div`
width: 50%;
background-color: #1A4159;
color: #D3DFE5;
text-shadow: 2px 1px black;
padding: 15px;
margin: 20px auto;
border-radius: 25px;
box-shadow: 6px 8px black;
`;

export default function StarWarsCard(props) {
    console.log(props);
    return (
        <Card>
            <h1>{props.name}</h1>
            <p> height: {props.height}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Age:{ props.age}</p>
            <p>Gender: {props.gender}</p>
            <p>Date Created: {props.created}</p>
        </Card>
    );
}