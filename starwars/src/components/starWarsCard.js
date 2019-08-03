import React from "react";

export default function starWarsCard(props) {
    return (
        <div>
            <img src={props.url} />;
            <h1>{props.name}</h1>;
            <p>{props.birthyear}</p>;
            <p>{props.age}</p>;
            <p>{props.gender}</p>;
            <p>{props.created}</p>;
        </div>
    );
}