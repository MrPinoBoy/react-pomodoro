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
        props.setStart("reset")
        props.setSeconds(props.initialTime)
        ResetCraters();
        setTimeout(() => ResetSunEclipse(),1000);
        let id = setInterval(frame, 500)
        function frame(){
            let bgStyle = window.getComputedStyle(document.body);
            let bgPos = bgStyle.backgroundPositionX;
            if (bgPos === "0%") {
                props.setStart("play")
                clearInterval(id)
            }
        }
    }
    
    return (
        <div ref={element} className={"modal"}>
            <button ref={cool} className={"exit"} onClick={() => exit()}>X</button>
            <button className={"restart"} onClick={() => restart()}>O</button>
        </div>
    );
}
 
export default Modal;