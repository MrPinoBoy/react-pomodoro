import React, {useEffect} from "react";

const Controls = props => {
    if (props.seconds > 1 && props.start === "play") {
        useEffect(() =>
            setTimeout(() => props.setSeconds(props.seconds - 0.1), 100),
        );
    }
    const resetAnim = () => {
        document.querySelector("#soleil").style.animation = "none";
        document.querySelector("#lune").style.animation = "none";
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
                        props.setStart("play");
                        document.querySelector(
                            "#soleil",
                        ).style.animation = `eclipse-1 ${
                            props.seconds / 2
                        }s ease-in forwards`;
                        document.querySelector(
                            "#lune",
                        ).style.animation = `eclipse-2 ${props.seconds / 2}s ${
                            props.seconds / 2
                        }s ease-out forwards`;
                    } else if (props.start === "pause") {
                        props.setStart("play");
                        document.querySelector(
                            "#soleil",
                        ).style.animationPlayState = "running";
                        document.querySelector(
                            "#lune",
                        ).style.animationPlayState = "running";
                    } else {
                        props.setStart("pause");
                        document.querySelector(
                            "#soleil",
                        ).style.animationPlayState = "paused";
                        document.querySelector(
                            "#lune",
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
                    setTimeout(() => props.setSeconds(props.seconds + 27), 100);
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
                    resetAnim();
                    props.setStart("stop");
                    setTimeout(() => props.setSeconds(props.initialTime), 100);
                }}>
                {"Reset"}
            </button>
        </>
    );
};

export default Controls;
