import React from "react";

export default function Character({ characterData }) {
    const genderIcon = {
        Male: "♂️",
        Female: "♀️",
        Genderless: "⚧",
        unknown: "❓"
    };
    return (<>
        <div className={`character-container `}>
            <div>
                <img src={characterData.image} alt={`imagen del personaje ${characterData.name}`} />
            </div>
            <div>
                <h3>{characterData.name}</h3>

                <h6  >Estado:  <span className={`${characterData.status.toLowerCase()}`}> </span> {characterData.status}</h6>
                <h6 className="text-grey">Sexo: {genderIcon[characterData.gender]}</h6>
                <h6><span className="text-grey"> Especie:</span> {characterData.species}</h6>
            </div>
            {/* Cambiar por iconitos */}
        </div >
    </>
    );
}