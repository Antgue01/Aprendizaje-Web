import React from "react";
import img from '../assets/img/rick-morty.png';
import '../index.css';
import '../App.css';
export default function MainPage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">Rick & Morty</h1>
                <img className="img-home" src={img} alt="Rick and Morty" />
                <button onClick={() => {console.log("https://rickandmortyapi.com/api") }} className="btn-search">Buscar Personajes</button>
            </header>
        </div>
    );
};