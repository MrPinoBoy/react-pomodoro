import React, {useEffect} from "react";

export const ResetCraters = () => {
    document.querySelector(".cratere").style.transform = "scale(100%) rotate(289deg)";
    document.querySelector(".cratere-2").style.transform = "scale(100%) rotate(289deg)";
    document.querySelector(".cratere-3").style.transform = "scale(100%) rotate(289deg)";
    document.querySelector(".cratere-4").style.transform = "scale(100%) rotate(289deg)";
    document.querySelector(".cratere").style.animation = "cratere-reverse 0.5s 0.5s forwards";
    document.querySelector(".cratere-2").style.animation = "cratere-reverse 0.5s 0.25s forwards";
    document.querySelector(".cratere-3").style.animation = "cratere-reverse 0.5s forwards";
    document.querySelector(".cratere-4").style.animation = "cratere-reverse 0.5s 0.25s forwards";
}

export const ResetSunEclipse = () => {
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
    document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
    document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
    document.querySelector("#lune").style.removeProperty("transition");
    document.querySelector("#soleil").style.removeProperty("transition");
    id = setInterval(frame, 10);
    function frame(){
        if(moonWidth <= 0) {
            moonWidth = 0;
            sunWidth = sunWidth + 1
            document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
            document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
        } else {
            moonWidth = moonWidth - 1;
            document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
        }
        if (sunWidth >= 99){
            sunWidth = 100;
            document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
            clearInterval(id);
        }
    }
}

const Controls = props => {
    if (props.seconds > 0.2 && props.start === "play") {
        useEffect(() =>
            setTimeout(() => props.setSeconds(props.seconds - 0.1), 100),
        );
        document.querySelector("#soleil").style.transition = `${(props.seconds-1)/2}s ease-in transform`;
        document.querySelector("#soleil").style.transform = `scaleX(0%)`;
        document.querySelector("#lune").style.transition = `${(props.seconds-1)/2}s ${(props.seconds-1)/2}s ease-out transform`;
        document.querySelector("#lune").style.transform = `scaleX(-100%)`;
    }
    if (props.seconds < 0.2 && props.start === "play") {
        useEffect(() => {
            props.setSeconds(0)
            props.setStart("stop")
        });
    }

    if(props.start === "play" && props.seconds <=1){
    document.querySelector(
        ".cratere"
    ).style.transform =
    `scale(0%) rotate(289deg)`;
    document.querySelector(
        ".cratere-2"
    ).style.transform =
    `scale(0%) rotate(289deg)`;
    document.querySelector(
        ".cratere-3"
    ).style.transform =
    `scale(0%) rotate(289deg)`;
    document.querySelector(
        ".cratere-4"
    ).style.transform =
    `scale(0%) rotate(289deg)`;
    document.querySelector(
        ".cratere"
    ).style.animation = 
    `cratere 0.5s forwards`;
    document.querySelector(
        ".cratere-2"
    ).style.animation = 
    `cratere 0.5s 0.25s forwards`;
    document.querySelector(
        ".cratere-3"
    ).style.animation = 
    `cratere 0.5s 0.25s forwards`;
    document.querySelector(
        ".cratere-4"
    ).style.animation = 
    `cratere 0.5s 0.5s forwards`;
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
                        document.querySelector("#soleil").style.transition = `${(props.seconds-1)/2}s ease-in transform`;
                        document.querySelector("#soleil").style.transform = `scaleX(0%)`;
                        document.querySelector("#lune").style.transition = `${(props.seconds-1)/2}s ${(props.seconds-1)/2}s ease-out transform`;
                        document.querySelector("#lune").style.transform = `scaleX(-100%)`;
                        // document.querySelector(
                        //     "#soleil",
                        // ).style.animation = `eclipse-1 ${
                        //     (props.seconds-1) / 2
                        // }s ease-in forwards`;
                        // document.querySelector(
                        //     "#lune",
                        // ).style.animation = `eclipse-2 ${(props.seconds-1) / 2}s ${
                        //     (props.seconds-1) / 2
                        // }s ease-out forwards`;
                        // document.querySelector(
                        //     "body",
                        // ).style.animation = `bgcolor ${
                        //     props.seconds
                        // }s forwards`;
                        
                    } else if (props.start === "pause" && props.seconds > 1) {
                        props.setStart("play");
                        let moonStyle = window.getComputedStyle(document.querySelector("#lune"))
                        let moonMatrix = new WebKitCSSMatrix(moonStyle.transform)
                        let moonTransformState = 100*moonMatrix.m11
                        document.querySelector("#soleil").style.transition = `${(props.initialTime-1)/2 - ((props.initialTime) - props.seconds)}s linear transform`;
                        document.querySelector("#soleil").style.transform = `scaleX(0%)`;
                        if((props.initialTime - props.seconds) < (props.initialTime/2)){
                            //delay
                            document.querySelector("#lune").style.transition = `${(props.initialTime-1)/2}s ${props.seconds - (props.initialTime/2 + 0.5)}s ease-out transform`;
                            document.querySelector("#lune").style.transform = `scaleX(-100%)`;
                        } else {
                            //no delay
                            document.querySelector("#lune").style.transition = `${props.seconds-1}s ease-out transform`;
                            document.querySelector("#lune").style.transform = `scaleX(-100%)`;
                        }
                        // document.querySelector(
                        //     "#soleil",
                        // ).style.animationPlayState = "running";
                        // document.querySelector(
                        //     "#lune",
                        // ).style.animationPlayState = "running";
                        // document.querySelector(
                        //     "body",
                        // ).style.animationPlayState = "running";
                        // document.querySelector(
                        //     ".cratere"
                        // ).style.animationPlayState = "running"; 
            
                        // document.querySelector(
                        //     ".cratere-2"
                        // ).style.animationPlayState = "running"; 
                        
                        // document.querySelector(
                        //     ".cratere-3"
                        // ).style.animationPlayState = "running"; 
                        
                        // document.querySelector(
                        //     ".cratere-4"
                        // ).style.animationPlayState = "running"; 
                    
                    } else {
                        props.setStart("pause");
                        let sunStyle = window.getComputedStyle(document.querySelector("#soleil"))
                        let sunMatrix = new WebKitCSSMatrix(sunStyle.transform)
                        let sunTransformState = 100*sunMatrix.m11
                        let moonStyle = window.getComputedStyle(document.querySelector("#lune"))
                        let moonMatrix = new WebKitCSSMatrix(moonStyle.transform)
                        let moonTransformState = 100*moonMatrix.m11
                        document.querySelector("#soleil").style.removeProperty("transition");
                        document.querySelector("#soleil").style.transform = `scaleX(${sunTransformState}%)`;
                        document.querySelector("#lune").style.removeProperty("transition");
                        document.querySelector("#lune").style.transform = `scaleX(${moonTransformState}%)`;

                        // document.querySelector("#lune").style.transition = `${(props.seconds-1)/2}s ${(props.seconds-1)/2}s linear transform`;
                        // document.querySelector("#lune").style.transform = `scaleX(-100%)`;

                        // document.querySelector(
                        //     "#soleil",
                        // ).style.animationPlayState = "paused";
                        // document.querySelector(
                        //     "#lune",
                        // ).style.animationPlayState = "paused";
                        // document.querySelector(
                        //     "body",
                        // ).style.animationPlayState = "paused";
                        // document.querySelector(
                        //     ".cratere"
                        // ).style.animationPlayState = "paused"; 
            
                        // document.querySelector(
                        //     ".cratere-2"
                        // ).style.animationPlayState = "paused"; 
                            
                        // document.querySelector(
                        //     ".cratere-3"
                        // ).style.animationPlayState = "paused"; 
                        
                        // document.querySelector(
                        //     ".cratere-4"
                        // ).style.animationPlayState = "paused"; 
                    }
                }}>
                {"Start/Pause"}
            </button>

            <button
                type={"button"}
                onClick={() => {
                    // resetAnim();
                    props.setStart("stop");
                    setTimeout(() => props.setSeconds(props.seconds + 10), 100);
                }}>
                {"+"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    // resetAnim();
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
                    if(props.seconds > 1 || props.seconds === 0) {
                    props.setStart("stop");
                    if(props.seconds === 0){
                        ResetCraters();
                        setTimeout(() => ResetSunEclipse(),1000);
                    }else {
                        ResetSunEclipse();
                    }
                    setTimeout(() => props.setSeconds(props.initialTime), 100);
                }}}>
                {"Reset"}
            </button>
        </>
    );
};

export default Controls;
