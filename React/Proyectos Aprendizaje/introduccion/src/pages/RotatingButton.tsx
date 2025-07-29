import logo from '../logo.svg';
import '../App.css';
import '../css/styles.css';
import Hola from '../components/Hello.tsx';
import Button from '../components/PickButton.tsx';
import { useState, useEffect, useRef } from 'react';
const names = ["Adri", "Antonio Jesús", "Javi", "Pablo", "Sergio", "Alvaro", "Jorge", "David", "Jose"];
let currentName = 0;

function RotatingButton() {
    // State variables
    const [buttonName, setButtonNameState] = useState(names[0]);
    const [showName, setShowName] = useState(names[0]);
    const [spinning, setSpinning] = useState(true);
    const [age, setAge] = useState(23);
    const [icon, setIcon] = useState(null);

    // Reference to store the interval ID
    const intervalRef = useRef(null);
    function clickHandler() {
        setSpinning(!spinning);
    }
    // Effect to handle the spinning logic
    useEffect(() => {
        if (spinning) {
            // Reset the icon and button name when spinning starts
            setIcon(null);
            setButtonNameState(names[currentName]);
            // Clear any existing interval
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                currentName = (currentName + 1) % names.length;
                setButtonNameState(names[currentName]);
            }, 250);
        }
        else {
            // Clear the interval when spinning stops
            clearInterval(intervalRef.current);
            // Update the visual data when spinning stops
            setButtonNameState("Retry");
            setIcon("bi bi-arrow-counterclockwise")
            setShowName(names[currentName]);
            setAge(Math.floor(Math.random() * 36));

        }
    }, [spinning]);



    return (
        <div className="App">
            <header className="App-header">

                <Hola name={showName} age={age} icon={icon} />
                <Button onClick={clickHandler} name={buttonName} icon={icon} />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default RotatingButton;
