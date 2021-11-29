import React,{useRef} from "react";
import {ResetCraters, ResetSunEclipse} from "./Controls";
const Modal = (props) => {
    const element = useRef(0);
    const cool = useRef();
    if(props.seconds == 0) {
        const inputEl = element.current
        inputEl.style.display = "flex"
    }

    const exit = () => {
        // const inputEl = element.current
        // inputEl.style.display = "none"
        const test = cool.current
        test.style.border = "none"
    }

    const restart = () => {
        const inputEl = element.current
        inputEl.style.display = "none"
        props.setStart("stop")
        props.setSeconds(props.initialTime)
        ResetCraters();
        setTimeout(() => ResetSunEclipse(),1000);
        setTimeout(() => props.setStart("play"), 4000);
    }
    
    return (
        <div ref={element} className={"modal"}>
            <button ref={cool} className={"exit"} onClick={() => exit()}>X</button>
            <button className={"restart"} onClick={() => restart()}>O</button>
        </div>
    );
}
 
export default Modal;