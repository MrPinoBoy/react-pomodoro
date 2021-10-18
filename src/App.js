import {useState} from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";

const App = () => {
    const [seconds, setSeconds] = useState(5);
    const [start, setStart] = useState(false);
    return (
        <>
            <h2>{"Cool test B)"}</h2>
            <p>{"Test"}</p>
            <Timer seconds={seconds} setSeconds={setSeconds} />
            <Controls
                seconds={seconds}
                setSeconds={setSeconds}
                start={start}
                setStart={setStart}
            />
        </>
    );
};

export default App;
