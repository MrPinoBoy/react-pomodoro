import React, {useState} from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Modal from "./components/Modal";
import "./style.css";

const App = () => {
    const [seconds, setSeconds] = useState(5);
    const [start, setStart] = useState("stop");
    const [initialTime, setInitialTime] = useState(seconds);
    return (
        <>
            <h2 className={"title"}>{"Pomodoro"}</h2>
            <div className={"div"}>
                <div className="crateres">
                    <div className="cratere"></div>
                    <div className="cratere-2"></div>
                    <div className="cratere-3"></div>
                    <div className="cratere-4"></div>
                </div>
                <div className={"lune"} />
                <div className={"lune-2"} id={"lune"} />
                <div className={"soleil"} id={"soleil"} />
                <div className={"soleil-2"} />
            </div>
            <div className={"nuage"}>
                <div className={"nuage-bas"} />
                <div className={"nuage-haut"} />
                <div className={"nuage-haut2"} />
            </div>
            <Timer seconds={seconds} setSeconds={setSeconds} />
            <Controls
                seconds={seconds}
                setSeconds={setSeconds}
                start={start}
                setStart={setStart}
                initialTime={initialTime}
                setInitialTime={setInitialTime}
            />
            <Modal
                seconds={seconds}
                setSeconds={setSeconds}
                initialTime={initialTime}
                start={start}
                setStart={setStart}
            />
        </>
    );
};

export default App;
