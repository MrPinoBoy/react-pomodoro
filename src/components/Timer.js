import React,{useEffect} from "react";

const Timer = props => {

    if (props.seconds > 0.2 && props.start === "play") {
        useEffect(() =>
            setTimeout(() => props.setSeconds(props.seconds - 0.1), 100),
        );
        if (props.seconds === props.initialTime){
        document.querySelector("#soleil").style.transition = `${(props.seconds-1)/2}s ease-in transform`;
        document.querySelector("#soleil").style.transform = `scaleX(0%)`;
        document.querySelector("#lune").style.transition = `${(props.seconds-1)/2}s ${(props.seconds-1)/2}s ease-out transform`;
        document.querySelector("#lune").style.transform = `scaleX(-100%)`;
        document.body.style.transition = `${props.seconds-1}s linear background-position-x`
        document.body.style.backgroundPositionX = `100%`;
        }
    }
    if (props.seconds < 0.2 && props.start === "play") {
        useEffect(() => {
            props.setSeconds(0)
            props.setStart("finished")
        });
    }

    
    let minutes = "00";
    if (props.seconds > 59) {
        if (props.seconds < 600) {
            minutes = `0${Math.floor(props.seconds / 60)}`;
        } else {
            minutes = Math.floor(props.seconds / 60);
        }
    }
    let seconds = Math.floor(props.seconds % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return (
        <>
            <p className={"timer"} onClick={() => console.log(props.start)}>
                {minutes}
                {":"}
                {seconds}
            </p>
        </>
    );
};

export default Timer;
