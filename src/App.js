import React, {useEffect, useState} from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Modal from "./components/Modal";
import "./style.css";

const App = () => {
    const [seconds, setSeconds] = useState(10);
    const [start, setStart] = useState("start");
    const [initialTime, setInitialTime] = useState(seconds);

    //this is supposed to change the y-position of the clouds when they restart their animation but intervals bug out when components refresh
    // useEffect(() => {
    //     setInterval(() => {
    //         let nuage1Pos = Math.ceil(Math.random()*80)+20;
    //         document.querySelector(".svg").style.bottom = nuage1Pos + "%"
    //     }, 30000);
    
    //     setInterval(() => {
    //         let nuage2Pos = Math.ceil(Math.random()*80)+20;
    //         document.querySelector(".svg2").style.bottom = nuage2Pos + "%"
    //     }, 20000);
    
    //     setInterval(() => {
    //         let nuage3Pos = Math.ceil(Math.random()*80)+20;
    //         document.querySelector(".svg3").style.bottom = nuage3Pos + "%"
    //     }, 25000);
    // })
    
    return (
        <>
            <div className={"div"}>
                <div className="astre">
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
                <div className="cloud-box">
                    <svg width="304" height="184" viewBox="0 0 152 92" fill="none" xmlns="http://www.w3.org/2000/svg" className={"svg"}>
                        <mask id="path-1-outside-1_3_19" maskUnits="userSpaceOnUse" x="0" y="0" width="152" height="92" fill="black">
                        <rect fill="white" width="152" height="92"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M134 51C134 51.0746 134 51.1491 134 51.2234C143.622 52.6707 151 60.9738 151 71C151 82.0457 142.046 91 131 91H21C9.9543 91 1 82.0457 1 71C1 61.3217 7.8746 53.249 17.0071 51.3986C17.3114 38.5095 27.3705 28.0346 40.0864 27.0721C48.5688 11.5378 65.0538 1 84 1C111.614 1 134 23.3858 134 51Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M134 51C134 51.0746 134 51.1491 134 51.2234C143.622 52.6707 151 60.9738 151 71C151 82.0457 142.046 91 131 91H21C9.9543 91 1 82.0457 1 71C1 61.3217 7.8746 53.249 17.0071 51.3986C17.3114 38.5095 27.3705 28.0346 40.0864 27.0721C48.5688 11.5378 65.0538 1 84 1C111.614 1 134 23.3858 134 51Z" fill="#ADD8E6"/>
                        <path d="M134 51.2234L133 51.2191L132.996 52.0837L133.851 52.2123L134 51.2234ZM17.0071 51.3986L17.2057 52.3787L17.988 52.2202L18.0068 51.4222L17.0071 51.3986ZM40.0864 27.0721L40.1619 28.0693L40.7037 28.0283L40.9641 27.5514L40.0864 27.0721ZM135 51.2277C135 51.152 135 51.0761 135 51H133C133 51.0731 133 51.1462 133 51.2191L135 51.2277ZM152 71C152 60.4715 144.253 51.7543 134.148 50.2345L133.851 52.2123C142.992 53.5871 150 61.476 150 71H152ZM131 92C142.598 92 152 82.598 152 71H150C150 81.4934 141.493 90 131 90V92ZM21 92H131V90H21V92ZM0 71C0 82.598 9.40202 92 21 92V90C10.5066 90 2 81.4934 2 71H0ZM16.8085 50.4186C7.21897 52.3615 0 60.8366 0 71H2C2 61.8067 8.53022 54.1365 17.2057 52.3787L16.8085 50.4186ZM18.0068 51.4222C18.2989 39.0496 27.9558 28.9932 40.1619 28.0693L40.0109 26.075C26.7853 27.0761 16.3238 37.9694 16.0074 51.375L18.0068 51.4222ZM84 0C64.6735 0 47.8593 10.7505 39.2087 26.5929L40.9641 27.5514C49.2782 12.3252 65.434 2 84 2V0ZM135 51C135 22.8335 112.167 0 84 0V2C111.062 2 133 23.938 133 51H135Z" fill="black" mask="url(#path-1-outside-1_3_19)"/>
                        <path d="M66 52C66 38.1929 54.8071 27 41 27C27.1929 27 16 38.1929 16 52" stroke="black"/>
                    </svg>

                    <svg width="94" height="58" viewBox="0 0 94 58" fill="none" xmlns="http://www.w3.org/2000/svg" className={"svg2"}>
                        <mask id="path-1-outside-1_4_23" maskUnits="userSpaceOnUse" x="0" y="0" width="94" height="58" fill="black">
                        <rect fill="white" width="94" height="58"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.0196 26C26.5445 12.6565 37.5278 2 51 2C64.4722 2 75.4555 12.6565 75.9804 26H77C85.2843 26 92 32.7157 92 41C92 49.2843 85.2843 56 77 56H17C8.71573 56 2 49.2843 2 41C2 32.7157 8.71573 26 17 26H26.0196Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.0196 26C26.5445 12.6565 37.5278 2 51 2C64.4722 2 75.4555 12.6565 75.9804 26H77C85.2843 26 92 32.7157 92 41C92 49.2843 85.2843 56 77 56H17C8.71573 56 2 49.2843 2 41C2 32.7157 8.71573 26 17 26H26.0196Z" fill="#ADD8E6"/>
                        <path d="M26.0196 26V28H27.9425L28.0181 26.0786L26.0196 26ZM75.9804 26L73.9819 26.0786L74.0575 28H75.9804V26ZM28.0181 26.0786C28.5009 13.804 38.606 4 51 4V0C36.4496 0 24.5881 11.509 24.0212 25.9214L28.0181 26.0786ZM51 4C63.394 4 73.4991 13.804 73.9819 26.0786L77.9788 25.9214C77.4119 11.509 65.5504 0 51 0V4ZM75.9804 28H77V24H75.9804V28ZM77 28C84.1797 28 90 33.8203 90 41H94C94 31.6112 86.3888 24 77 24V28ZM90 41C90 48.1797 84.1797 54 77 54V58C86.3888 58 94 50.3888 94 41H90ZM77 54H17V58H77V54ZM17 54C9.8203 54 4 48.1797 4 41H0C0 50.3888 7.61116 58 17 58V54ZM4 41C4 33.8203 9.8203 28 17 28V24C7.61116 24 0 31.6112 0 41H4ZM17 28H26.0196V24H17V28Z" fill="black" mask="url(#path-1-outside-1_4_23)"/>
                    </svg>

                    <svg width="129" height="84" viewBox="0 0 129 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={"svg3"}>
                        <mask id="path-1-outside-1_5_28" maskUnits="userSpaceOnUse" x="0" y="0" width="129" height="84" fill="black">
                        <rect fill="white" width="129" height="84"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.8286 41.3043C18.7214 40.1829 18.6666 39.0465 18.6666 37.8974C18.6666 18.0718 34.9895 2 55.1249 2C68.0197 2 79.351 8.5914 85.8329 18.5389C86.6963 18.4538 87.5721 18.4103 88.4582 18.4103C102.339 18.4103 113.684 29.1037 114.458 42.5805C121.828 45.6912 127 52.9851 127 61.4872C127 72.8161 117.816 82 106.487 82H22.5128C11.1839 82 2 72.8161 2 61.4872C2 51.416 9.25793 43.04 18.8286 41.3043Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.8286 41.3043C18.7214 40.1829 18.6666 39.0465 18.6666 37.8974C18.6666 18.0718 34.9895 2 55.1249 2C68.0197 2 79.351 8.5914 85.8329 18.5389C86.6963 18.4538 87.5721 18.4103 88.4582 18.4103C102.339 18.4103 113.684 29.1037 114.458 42.5805C121.828 45.6912 127 52.9851 127 61.4872C127 72.8161 117.816 82 106.487 82H22.5128C11.1839 82 2 72.8161 2 61.4872C2 51.416 9.25793 43.04 18.8286 41.3043Z" fill="#ADD8E6"/>
                        <path d="M18.8286 41.3043L19.1855 43.2722L20.9945 42.9441L20.8195 41.114L18.8286 41.3043ZM85.8329 18.5389L84.1573 19.6308L84.8204 20.6484L86.0291 20.5293L85.8329 18.5389ZM114.458 42.5805L112.461 42.6951L112.532 43.9387L113.68 44.423L114.458 42.5805ZM20.8195 41.114C20.7184 40.0557 20.6666 38.9828 20.6666 37.8974H16.6666C16.6666 39.1101 16.7244 40.3101 16.8377 41.4947L20.8195 41.114ZM20.6666 37.8974C20.6666 19.2055 36.0647 4 55.1249 4V0C33.9143 0 16.6666 16.9381 16.6666 37.8974H20.6666ZM55.1249 4C67.3244 4 78.0339 10.2335 84.1573 19.6308L87.5086 17.4471C80.6681 6.94929 68.7151 0 55.1249 0V4ZM86.0291 20.5293C86.8274 20.4506 87.6377 20.4103 88.4582 20.4103V16.4103C87.5064 16.4103 86.5652 16.4571 85.6368 16.5486L86.0291 20.5293ZM88.4582 20.4103C101.3 20.4103 111.749 30.2973 112.461 42.6951L116.454 42.4658C115.618 27.9101 103.378 16.4103 88.4582 16.4103V20.4103ZM113.68 44.423C120.335 47.2321 125 53.8172 125 61.4872H129C129 52.153 123.32 44.1502 115.235 40.7379L113.68 44.423ZM125 61.4872C125 71.7115 116.712 80 106.487 80V84C118.921 84 129 73.9207 129 61.4872H125ZM106.487 80H22.5128V84H106.487V80ZM22.5128 80C12.2885 80 4 71.7115 4 61.4872H0C0 73.9207 10.0793 84 22.5128 84V80ZM4 61.4872C4 52.4001 10.5492 44.8384 19.1855 43.2722L18.4717 39.3364C7.96663 41.2415 0 50.4319 0 61.4872H4Z" fill="black" mask="url(#path-1-outside-1_5_28)"/>
                    </svg>
                </div>
            </div>

            
            
            
            
            <Timer
                seconds={seconds}
                setSeconds={setSeconds} 
                start={start}
                setStart={setStart}
                initialTime={initialTime}
                setInitialTime={setInitialTime}
            />
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
