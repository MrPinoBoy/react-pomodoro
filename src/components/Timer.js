const Timer = props => {
    let minutes = "00";
    if (props.seconds > 59) {
        if (props.seconds < 600) {
            minutes = `0${Math.floor(props.seconds / 60)}`;
        } else {
            minutes = Math.floor(props.seconds / 60);
        }
    }
    let seconds = Math.floor(props.seconds % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return (
        <>
            <p>
                {minutes}
                {":"}
                {seconds}
            </p>
        </>
    );
};

export default Timer;