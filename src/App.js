import React, {useState} from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import "./style.css";

const App = () => {
    const [seconds, setSeconds] = useState(5);
    const [start, setStart] = useState("stop");
    const [totalSeconds, settotalSeconds] = useState();
    const [initialTime, setInitialTime] = useState(0);
    return (
        <>
            <h2 className={"title"}>{"Pomodoro"}</h2>
            <div className={"div"}>
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
                totalSeconds={totalSeconds}
                settotalSeconds={settotalSeconds}
                initialTime={initialTime}
                setInitialTime={setInitialTime}
            />
        </>
    );
};

export default App;
