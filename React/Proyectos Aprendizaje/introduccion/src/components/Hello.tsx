import React from 'react'
const Hola = (props) => {
    const { name, age } = props
    return (<h1 className={`title`}>Hey wassup, {name} are u {age} years old?</h1>);
}
export default Hola;

