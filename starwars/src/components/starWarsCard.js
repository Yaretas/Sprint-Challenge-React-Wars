import React from "react";
import styled from 'styled-components'

const card = styled.div`
width: 50%;
background-color: #1A4159;
color: #D3DFE5;
padding: 15px;
margin: 20px auto;
border-radius: 15px;
`;

export default function starWarsCard(props) {
    console.log(props);
    return (
        <card>
            <img src={props.url} />;
            <h1>{props.name}</h1>;
            <p>{props.birthyear}</p>;
            <p>{props.age}</p>;
            <p>{props.gender}</p>;
            <p>{props.created}</p>;
        </card>
    );
}