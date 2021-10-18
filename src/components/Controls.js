import React, {useEffect} from "react";

const Controls = props => {
    if (props.seconds > 1 && props.start === true) {
        useEffect(
            () => setTimeout(() => props.setSeconds(props.seconds - 0.01), 10),
            [props.seconds],
        );
    }
    return (
        <>
            <button
                type={"button"}
                onClick={() => {
                    if (props.start === false) {
                        props.setStart(true);
                    } else {
                        props.setStart(false);
                    }
                }}>
                {"Start/Pause"}
            </button>

            <button
                type={"button"}
                onClick={() => {
                    props.setStart(false);
                    setTimeout(() => props.setSeconds(props.seconds + 60), 10);
                }}>
                {"+"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    props.setStart(false);
                    setTimeout(() => props.setSeconds(props.seconds - 60), 10);
                }}>
                {"-"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    props.setStart(false);
                    setTimeout(() => props.setSeconds(0), 10);
                }}>
                {"Reset"}
            </button>
        </>
    );
};

export default Controls;
