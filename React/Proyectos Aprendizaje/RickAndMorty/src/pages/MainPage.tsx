import React, { useState } from "react";
import img from '../assets/img/rick-morty.png';

import InfoGrid from "../components/InfoGrid.tsx";

import '../index.css';
import '../App.css';
export default function MainPage() {
    const [characters, setCharacters] = React.useState([]);

    const ShowInfo = async () => {
        const apiCall = await fetch('https://rickandmortyapi.com/api/character?&page=20');
        const charactersData = await apiCall.json();
        setCharacters(charactersData.results);
    }
    const HideInfo = () => setCharacters([]);
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">Rick & Morty</h1>
                <img className="img-home" src={img} alt="Rick and Morty" />
                {characters.length > 0 ? <>
                <p onClick={HideInfo} className="back-home">Volver</p> 
                <InfoGrid info={characters} />
                <p onClick={HideInfo} className="back-home">Volver</p> 
                </>
                
                : 
                <button onClick={ShowInfo} className="btn-search">Buscar Personajes</button>}
            </header>
        </div>
    );
};