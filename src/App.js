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
                    
                    <svg width="304" height="184" viewBox="0 0 304 184" fill="none" xmlns="http://www.w3.org/2000/svg" className={"svg"}>
                        <mask id="path-1-outside-1_3_19" maskUnits="userSpaceOnUse" x="0" y="0" width="304" height="184" fill="black">
                        <rect fill="white" width="304" height="184"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M268 102C268 102.149 268 102.298 267.999 102.447C287.245 105.341 302 121.948 302 142C302 164.091 284.091 182 262 182H42C19.9086 182 2 164.091 2 142C2 122.643 15.7492 106.498 34.0142 102.797C34.6227 77.0191 54.7411 56.0693 80.1728 54.1443C97.1375 23.0757 130.108 2 168 2C223.228 2 268 46.7715 268 102Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M268 102C268 102.149 268 102.298 267.999 102.447C287.245 105.341 302 121.948 302 142C302 164.091 284.091 182 262 182H42C19.9086 182 2 164.091 2 142C2 122.643 15.7492 106.498 34.0142 102.797C34.6227 77.0191 54.7411 56.0693 80.1728 54.1443C97.1375 23.0757 130.108 2 168 2C223.228 2 268 46.7715 268 102Z" fill="#ADD8E6"/>
                        <path d="M267.999 102.447L265.999 102.438L265.992 104.167L267.702 104.425L267.999 102.447ZM34.0142 102.797L34.4113 104.757L35.976 104.44L36.0136 102.844L34.0142 102.797ZM80.1728 54.1443L80.3238 56.1386L81.4074 56.0566L81.9282 55.1028L80.1728 54.1443ZM269.999 102.455C270 102.304 270 102.152 270 102H266C266 102.146 266 102.292 265.999 102.438L269.999 102.455ZM304 142C304 120.943 288.506 103.509 268.296 100.469L267.702 104.425C285.983 107.174 300 122.952 300 142H304ZM262 184C285.196 184 304 165.196 304 142H300C300 162.987 282.987 180 262 180V184ZM42 184H262V180H42V184ZM0 142C0 165.196 18.804 184 42 184V180C21.0132 180 4 162.987 4 142H0ZM33.617 100.837C14.4379 104.723 0 121.673 0 142H4C4 123.613 17.0604 108.273 34.4113 104.757L33.617 100.837ZM36.0136 102.844C36.5978 78.0993 55.9116 57.9864 80.3238 56.1386L80.0219 52.15C53.5706 54.1521 32.6477 75.9389 32.0147 102.75L36.0136 102.844ZM168 0C129.347 0 95.7187 21.501 78.4175 53.1858L81.9282 55.1028C98.5564 24.6504 130.868 4 168 4V0ZM270 102C270 45.667 224.333 0 168 0V4C222.124 4 266 47.8761 266 102H270Z" fill="black" mask="url(#path-1-outside-1_3_19)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M71 55.6721C75.1447 54.5816 79.5026 54 84 54C111.633 54 134 75.9566 134 103H136C136 74.8149 112.7 52 84 52C79.5118 52 75.1556 52.558 71 53.6072V55.6721Z" fill="black"/>
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
            <div className="controls-container">
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
            </div>
        </>
    );
};

export default App;
