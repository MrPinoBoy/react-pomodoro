import React, {useEffect, useState} from "react";

const Controls = props => {

    const [moon, setMoon] = useState(0);
    const [sun, setSun] = useState(100);

    const soleil = document.querySelector("#soleil");
    const lune = document.querySelector("#lune")

    let sunWidth = sun;
    let moonWidth = moon;

    let id = () => {
        return setInterval(frame, 10);
    };

    let test;

    function frame(){
        if(sunWidth <= 0) {
            moonWidth = moonWidth + 2/props.seconds;
            document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
        } else {
            sunWidth = sunWidth - 2/props.seconds
            document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
        }
        if (moonWidth >= 100 || props.start == "pause" ){
            clearInterval(test);
        }
    }

    useEffect(()=>{
        console.log(props.start);
        if(props.start === "play"){       
            test = id();
        } else {
            clearInterval(test);
        }
        
    },[props.start])

    // const sunEclipse = () => {
    //     let id = null;
    //     let sunWidth = sun;
    //     let moonWidth = moon;
    //     id = setInterval(frame, 10);
    //     function frame(){
    //         if(sunWidth <= 0) {
    //             moonWidth = moonWidth + 2/props.seconds;
    //             document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
    //         } else {
    //             sunWidth = sunWidth - 2/props.seconds
    //             document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
    //         }
    //         if (moonWidth >= 100 || props.start == "pause" ){
    //             clearInterval(id);
    //         }
    //     }
    //     if(props.start == "pause") {
    //         clearInterval(id)
    //     }
    // }

    const resetSunEclipse = () => {
        let id = null;
        //on va rechercher la valeur actuelle du transform : scaleX de nos éléments
        //c'est stocké dans une matrice on va juste la chercher au bon endroit
        //!!! marche seulement avec nav webkit
        let sunStyle = window.getComputedStyle(document.querySelector("#soleil"))
        let sunMatrix = new WebKitCSSMatrix(sunStyle.transform);
        let moonStyle = window.getComputedStyle(document.querySelector("#lune"))
        let moonMatrix = new WebKitCSSMatrix(moonStyle.transform)
        let sunWidth = 99 * sunMatrix.m11;
        let moonWidth = -99 * moonMatrix.m11;
        console.log(moonWidth)
        id = setInterval(frame, 10);
        function frame(){
            if(moonWidth <= 0) {
                sunWidth = sunWidth + 1
                document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
            } else {
                moonWidth = moonWidth - 1;
                document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
            }
            if (sunWidth >= 99){
                sunWidth = 99;
                clearInterval(id);
            }
        }
    }

    

    return (
        <>
            <button
                id={"trigger"}
                type={"button"}
                onClick={() => {
                    if (props.start === "stop" && props.seconds > 1) {
                        props.setInitialTime(props.seconds);
                        props.setStart("play");
                        // sunEclipse();
                    } else if (props.start === "pause") {
                        props.setStart("play");
                        clearInterval(test)
                    } else {
                        props.setStart("pause");
                    }
                }}>
                {"Start/Pause"}
            </button>

            <button
                type={"button"}
                onClick={() => {
                    // resetAnim();
                    props.setStart("stop");
                    setTimeout(() => {
                        props.setSeconds(props.seconds + 10);
                    }, 100);
                }}>
                {"+"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    props.setStart("stop");
                    if (props.seconds > 30) {
                        setTimeout(
                            () => props.setSeconds(props.seconds - 30),
                            100,
                        );
                    } else {
                        setTimeout(() => props.setSeconds(0), 100);
                    }
                }}>
                {"-"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    props.setStart("stop");
                    // resetSunEclipse();
                    setTimeout(() => props.setSeconds(props.initialTime), 100);
                }}>
                {"Reset"}
            </button>
        </>
    );
};

export default Controls;
