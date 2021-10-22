import React, {useEffect} from "react";

const Controls = props => {
    if (props.seconds > 0.2 && props.start === "play") {
        useEffect(() =>
            setTimeout(() => props.setSeconds(props.seconds - 0.1), 100),
        );
    }
    if (props.seconds < 0.2 && props.start === "play") {
        useEffect(() => {
            props.setSeconds(0)
            props.setStart("stop")
        });
    }
    const resetAnim = () => {
        document.querySelector(".lune").style.zIndex = "1";
        document.querySelector(".lune").style.animation = "moon-gone 2s 1s";
        document.querySelector(".lune-2").style.transform = "scaleX(-100%)";
        document.querySelector(".lune-2").style.animation = "moon2-gone 2s 1s";
        document.querySelector("#soleil").style.animation = "none"
        setTimeout(()=> {
            document.querySelector(".lune").style.zIndex = "0";
            document.querySelector(".lune-2").style.transform = "scaleX(0%)";
            document.querySelector(".lune").style.animation = "none";
        }, 3000);
        document.querySelector(
            "body",
        ).style.backgroundPosition = "right";
        document.querySelector(
            "body",
        ).style.animation = `bgcolor2 3s 1s forwards`;
        document.querySelector(
            ".cratere"
        ).style.transform =
        `scale(100%) rotate(289deg)`;
        document.querySelector(
            ".cratere-2"
        ).style.transform =
        `scale(100%) rotate(289deg)`;
        document.querySelector(
            ".cratere-3"
        ).style.transform =
        `scale(100%) rotate(289deg)`;
        document.querySelector(
            ".cratere-4"
        ).style.transform =
        `scale(100%) rotate(289deg)`;
        document.querySelector(
            ".cratere"
        ).style.animation = 
        `cratere-reverse 0.5s 0.5s forwards`;
        document.querySelector(
            ".cratere-2"
        ).style.animation = 
        `cratere-reverse 0.5s 0.25s forwards`;
        document.querySelector(
            ".cratere-3"
        ).style.animation = 
        `cratere-reverse 0.5s forwards`;
        document.querySelector(
            ".cratere-4"
        ).style.animation = 
        `cratere-reverse 0.5s 0.25s forwards`;
    };
    return (
        <>
            <button
                id={"trigger"}
                type={"button"}
                onClick={() => {
                    console.log(props.seconds);
                    if (props.start === "stop" && props.seconds > 1) {
                        props.setInitialTime(props.seconds);
                        console.log(props.initialTime)
                        props.setStart("play");
                        document.querySelector(
                            "#soleil",
                        ).style.animation = `eclipse-1 ${
                            (props.seconds-1) / 2
                        }s ease-in forwards`;
                        document.querySelector(
                            "#lune",
                        ).style.animation = `eclipse-2 ${(props.seconds-1) / 2}s ${
                            (props.seconds-1) / 2
                        }s ease-out forwards`;
                        document.querySelector(
                            "body",
                        ).style.animation = `bgcolor ${
                            props.seconds
                        }s forwards`;
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
                        `cratere 0.5s ${props.seconds-1}s forwards`;
                        document.querySelector(
                            ".cratere-2"
                        ).style.animation = 
                        `cratere 0.5s ${props.seconds-0.75}s forwards`;
                        document.querySelector(
                            ".cratere-3"
                        ).style.animation = 
                        `cratere 0.5s ${props.seconds-0.75}s forwards`;
                        document.querySelector(
                            ".cratere-4"
                        ).style.animation = 
                        `cratere 0.5s ${props.seconds-0.5}s forwards`;
                    } else if (props.start === "pause") {
                        props.setStart("play");
                        document.querySelector(
                            "#soleil",
                        ).style.animationPlayState = "running";
                        // document.querySelector(
                        //     "#lune",
                        // ).style.animationPlayState = "running";
                        document.querySelector(
                            "body",
                        ).style.animationPlayState = "running";
                        document.querySelector(
                            ".cratere"
                        ).style.animationPlayState = "running"; 
            
                        document.querySelector(
                            ".cratere-2"
                        ).style.animationPlayState = "running"; 
                        
                        document.querySelector(
                            ".cratere-3"
                        ).style.animationPlayState = "running"; 
                        
                        document.querySelector(
                            ".cratere-4"
                        ).style.animationPlayState = "running"; 
                    
                    } else {
                        props.setStart("pause");
                        document.querySelector(
                            "#soleil",
                        ).style.animationPlayState = "paused";
                        // document.querySelector(
                        //     "#lune",
                        // ).style.animationPlayState = "paused";
                        document.querySelector(
                            "body",
                        ).style.animationPlayState = "paused";
                        document.querySelector(
                            ".cratere"
                        ).style.animationPlayState = "paused"; 
            
                        document.querySelector(
                            ".cratere-2"
                        ).style.animationPlayState = "paused"; 
                            
                        document.querySelector(
                            ".cratere-3"
                        ).style.animationPlayState = "paused"; 
                        
                        document.querySelector(
                            ".cratere-4"
                        ).style.animationPlayState = "paused"; 
                    }
                }}>
                {"Start/Pause"}
            </button>

            <button
                type={"button"}
                onClick={() => {
                    resetAnim();
                    props.setStart("stop");
                    setTimeout(() => props.setSeconds(props.seconds + 10), 100);
                }}>
                {"+"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    resetAnim();
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
                    resetAnim();
                    setTimeout(() => props.setSeconds(props.initialTime), 100);
                }}>
                {"Reset"}
            </button>
        </>
    );
};

export default Controls;
