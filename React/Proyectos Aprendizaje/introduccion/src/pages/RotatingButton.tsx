// @ts-ignore
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
    const [icon, setIcon] = useState("");

    // Reference to store the interval ID
    const intervalRef = useRef(setInterval(()=>{},Infinity
));
    function clickHandler() {
        setSpinning(!spinning);
    }
    // Effect to handle the spinning logic
    useEffect(() => {
        if (spinning) {
            // Reset the icon and button name when spinning starts
            setIcon("");
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
               
            </header>
        </div>
    );
}

export default RotatingButton;
