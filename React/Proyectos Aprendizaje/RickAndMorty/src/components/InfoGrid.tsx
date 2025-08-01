import React from "react";
import Character from "../components/Character.tsx";

export default function InfoGrid({ info }) {
    return (<>
        <h1>Personajes</h1>
        <div className="container-characters">
            {info.map((character, indx)=>(<Character key={indx} characterData={character}/>))}
        </div>
    </>
    );
}
