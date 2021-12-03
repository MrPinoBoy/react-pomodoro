import React, {useEffect} from "react";

export const ResetCraters = () => {

    document.querySelector(".crateres").querySelectorAll("div").forEach(
        e => e.style.transform = "scale(100%) rotate(289deg)"
    )
    document.querySelector(".cratere").style.animation = "cratere-reverse 0.5s 0.5s forwards";
    document.querySelector(".cratere-2").style.animation = "cratere-reverse 0.5s 0.25s forwards";
    document.querySelector(".cratere-3").style.animation = "cratere-reverse 0.5s forwards";
    document.querySelector(".cratere-4").style.animation = "cratere-reverse 0.5s 0.25s forwards";
}

export const ResetSunEclipse = () => {
    let id = null;
    //on va rechercher la valeur actuelle du transform : scaleX de nos éléments
    //c'est stocké dans une matrice on va juste la chercher au bon endroit
    //!!! marche seulement avec nav webkit
    let sunStyle = window.getComputedStyle(document.querySelector("#soleil"))
    let sunMatrix = new WebKitCSSMatrix(sunStyle.transform);
    let moonStyle = window.getComputedStyle(document.querySelector("#lune"))

    let moonMatrix = new WebKitCSSMatrix(moonStyle.transform)
    let sunWidth = 99 * sunMatrix.m11;
    let moonWidth = -99 * moonMatrix.m11;

    let bgStyle = window.getComputedStyle(document.body)
    let bgPos = bgStyle.backgroundPositionX;
    let bgPosValue = bgPos.substr(0,bgPos.length -1)

    document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
    document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
    document.body.style.backgroundPositionX = `${bgPosValue}%`;

    document.querySelector("#lune").style.removeProperty("transition");
    document.querySelector("#soleil").style.removeProperty("transition");
    document.body.style.removeProperty("transition")

    id = setInterval(frame, 10);
    function frame(){
        if(bgPosValue>1) {
        bgPosValue -= 0.5;
        document.body.style.backgroundPositionX = `${bgPosValue}%`;
    }
        if(moonWidth <= 0) {
            moonWidth = 0;
            sunWidth = sunWidth + 1
            document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
            document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
        } else {
            moonWidth = moonWidth - 1;
            document.querySelector("#lune").style.transform = "scaleX(-" + moonWidth + "%)";
        }
        if (sunWidth >= 99){
            sunWidth = 100;
            document.querySelector("#soleil").style.transform = "scaleX(" + sunWidth + "%)";
            clearInterval(id);
            document.body.style.backgroundPositionX = `0%`
        }
    }
}

const Controls = props => {

    
    const showControls = props.start === "finished" ? "controls hide" : "controls show";
    
    if(props.start === "play" && props.seconds <=1){
        document.querySelector(".crateres").querySelectorAll("div").forEach(
            e => e.style.transform = "scale(0%) rotate(289deg)"
        )
        document.querySelector(
            ".cratere"
        ).style.animation = 
        `cratere 0.5s forwards`;
        document.querySelector(
            ".cratere-2"
        ).style.animation = 
        `cratere 0.5s 0.25s forwards`;
        document.querySelector(
            ".cratere-3"
        ).style.animation = 
        `cratere 0.5s 0.25s forwards`;
        document.querySelector(
            ".cratere-4"
        ).style.animation = 
        `cratere 0.5s 0.5s forwards`;
    }


    const playPauseButton = () => {
        if ((props.start === "stop" || props.start === "start" ) && props.seconds > 1) {
        props.setInitialTime(props.seconds);
        props.setStart("play");
        document.querySelector("#soleil").style.transition = `${(props.seconds-1)/2}s ease-in transform`;
        document.querySelector("#soleil").style.transform = `scaleX(0%)`;
        document.querySelector("#lune").style.transition = `${(props.seconds-1)/2}s ${(props.seconds-1)/2}s ease-out transform`;
        document.querySelector("#lune").style.transform = `scaleX(-100%)`;
        document.body.style.transition = `${props.seconds-1}s linear background-position-x`
        document.body.style.backgroundPositionX = `100%`;
    } else if (props.start === "pause" && props.seconds > 1) {
        props.setStart("play");
        document.querySelector("#soleil").style.transition = `${(props.initialTime-1)/2 - ((props.initialTime) - props.seconds)}s linear transform`;
        document.querySelector("#soleil").style.transform = `scaleX(0%)`;
        document.body.style.transition = `${props.seconds-1}s linear background-position-x`
        document.body.style.backgroundPositionX = `100%`;
        if((props.initialTime - props.seconds) < (props.initialTime/2)){
            //delay
            document.querySelector("#lune").style.transition = `${(props.initialTime-1)/2}s ${props.seconds - (props.initialTime/2 + 0.5)}s ease-out transform`;
            document.querySelector("#lune").style.transform = `scaleX(-100%)`;
        } else {
            //no delay
            document.querySelector("#lune").style.transition = `${props.seconds-1}s ease-out transform`;
            document.querySelector("#lune").style.transform = `scaleX(-100%)`;
        }
    } else {
        props.setStart("pause");
        let sunStyle = window.getComputedStyle(document.querySelector("#soleil"))
        let sunMatrix = new WebKitCSSMatrix(sunStyle.transform)
        let sunTransformState = 100*sunMatrix.m11

        document.querySelector("#soleil").style.removeProperty("transition");
        document.querySelector("#soleil").style.transform = `scaleX(${sunTransformState}%)`;

        let moonStyle = window.getComputedStyle(document.querySelector("#lune"))
        let moonMatrix = new WebKitCSSMatrix(moonStyle.transform)
        let moonTransformState = 100*moonMatrix.m11

        document.querySelector("#lune").style.removeProperty("transition");
        document.querySelector("#lune").style.transform = `scaleX(${moonTransformState}%)`;

        let bgStyle = window.getComputedStyle(document.body);
        let bgPos = bgStyle.backgroundPositionX;
        document.body.style.removeProperty("transition")
        document.body.style.backgroundPositionX = `${bgPos}`;
    }
}

    document.addEventListener("visibilitychange", () => {
        if(document.hidden && props.start === "play"){
            playPauseButton()
        }
    })


    let buttonsStyle = props.start === "reset" ? "controlsOff" : "controlsHover";
    let playStyle = (props.start === "reset" || props.start === "done") ? "controlsOff" : "controlsHover";
    let plusStyle = (props.start === "play" || props.start === "reset") ? "controlsOff" : "controlsHover";
    let minusStyle = (props.start === "play" || props.start === "reset" || props.start === "done") ? "controlsOff" : "controlsHover";

    return (
        <div className={showControls}>
            {props.start === "play" ?
                <svg width="75" height="88" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                        id={"trigger"}
                        className={`pause`}
                        onClick={() => {
                            if(props.start !== "reset"){
                                playPauseButton()
                            }
                        }
                        }>
                    <rect x="14.5" y="1.5" width="7" height="77" rx="3.5" fill="#FFA500" stroke="black" strokeWidth="2"/>
                    <rect x="44.5" y="1.5" width="7" height="77" rx="3.5" fill="#FFA500" stroke="black" strokeWidth="2"/>                
                </svg>
                : 
                <svg width="75" height="88" viewBox="0 0 65 88" fill="none" xmlns="http://www.w3.org/2000/svg"
                        id={"trigger"}
                        className={`${playStyle}`}
                        onClick={() => {
                            if(props.start !== "reset" && props.start !== "finished" && props.start !== "done"){
                                playPauseButton()
                            }
                        }
                        }>
<path d="M67.1429 44.4501L7.02406 79.7198C4.35748 81.2842 1 79.3613 1 76.2697V5.73027C1 2.63869 4.35749 0.715781 7.02406 2.28017L67.1429 37.5499C69.7775 39.0955 69.7775 42.9045 67.1429 44.4501Z" fill="#FFA500" stroke="black" strokeWidth="2"/>
                </svg>
                }
            
            <svg width="88" height="88" viewBox="0 0 78 88" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`${minusStyle}`}
                onClick={() => {
                    if(props.start === "start" || props.start === "pause" || props.start === "stop"){
                        if(props.start !== "start"){
                            props.setStart("stop");
                        }
                    if (props.seconds-10 > 10) {
                        setTimeout(
                            () => props.setSeconds(props.seconds - 10),
                            100,
                        );
                    } else {
                        setTimeout(() => props.setSeconds(10), 100);
                    }
                }}}>
                <rect x="1" y="44" width="7" height="78" rx="3.5" transform="rotate(-90 1 44)" fill="#FFA500" stroke="black" strokeWidth="2"/>
            </svg>

            <svg width="88" height="88" viewBox="0 0 78 88" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`${plusStyle}`}
                onClick={() => {
                    if(props.start !== "reset" && props.start !== "finished" && props.start !== "play"){
                    setTimeout(() => props.setSeconds(props.seconds + 10), 100);
                    if(props.start !== "start"){
                        if(props.seconds > 1 || props.seconds === 0) {
                        props.setStart("reset");
                        if(props.start === "done"){
                            props.setStart("reset");
                            ResetCraters();
                            setTimeout(() => ResetSunEclipse(),1000);
                        }else {
                            props.setStart("reset");
                            ResetSunEclipse();
                        }
                        let id = setInterval(frame, 500)
                        function frame(){
                            let bgStyle = window.getComputedStyle(document.body);
                            let bgPos = bgStyle.backgroundPositionX;
                            if (bgPos === "0%") {
                                props.setStart("start")
                                clearInterval(id)
                            }
                        }
                        }
                    }
                }}}
            >
                <mask id="path-1-outside-1_7_11" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80" fill="black">
                <rect fill="white" width="80" height="80"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M40.4634 2C39.1837 2 38.1463 3.03739 38.1463 4.31707V38.1463H4.31707C3.03739 38.1463 2 39.1837 2 40.4634C2 41.7431 3.03739 42.7805 4.31707 42.7805H38.1463V75.6829C38.1463 76.9626 39.1837 78 40.4634 78C41.7431 78 42.7805 76.9626 42.7805 75.6829V42.7805H75.6829C76.9626 42.7805 78 41.7431 78 40.4634C78 39.1837 76.9626 38.1463 75.6829 38.1463H42.7805V4.31707C42.7805 3.03739 41.7431 2 40.4634 2Z"/>
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M40.4634 2C39.1837 2 38.1463 3.03739 38.1463 4.31707V38.1463H4.31707C3.03739 38.1463 2 39.1837 2 40.4634C2 41.7431 3.03739 42.7805 4.31707 42.7805H38.1463V75.6829C38.1463 76.9626 39.1837 78 40.4634 78C41.7431 78 42.7805 76.9626 42.7805 75.6829V42.7805H75.6829C76.9626 42.7805 78 41.7431 78 40.4634C78 39.1837 76.9626 38.1463 75.6829 38.1463H42.7805V4.31707C42.7805 3.03739 41.7431 2 40.4634 2Z" fill="#FFA500"/>
                <path d="M38.1463 38.1463V40.1463H40.1463V38.1463H38.1463ZM38.1463 42.7805H40.1463V40.7805H38.1463V42.7805ZM42.7805 42.7805V40.7805H40.7805V42.7805H42.7805ZM42.7805 38.1463H40.7805V40.1463H42.7805V38.1463ZM40.1463 4.31707C40.1463 4.14196 40.2883 4 40.4634 4V0C38.0791 0 36.1463 1.93282 36.1463 4.31707H40.1463ZM40.1463 38.1463V4.31707H36.1463V38.1463H40.1463ZM4.31707 40.1463H38.1463V36.1463H4.31707V40.1463ZM4 40.4634C4 40.2883 4.14196 40.1463 4.31707 40.1463V36.1463C1.93282 36.1463 0 38.0791 0 40.4634H4ZM4.31707 40.7805C4.14196 40.7805 4 40.6385 4 40.4634H0C0 42.8476 1.93282 44.7805 4.31707 44.7805V40.7805ZM38.1463 40.7805H4.31707V44.7805H38.1463V40.7805ZM40.1463 75.6829V42.7805H36.1463V75.6829H40.1463ZM40.4634 76C40.2883 76 40.1463 75.858 40.1463 75.6829H36.1463C36.1463 78.0672 38.0791 80 40.4634 80V76ZM40.7805 75.6829C40.7805 75.858 40.6385 76 40.4634 76V80C42.8476 80 44.7805 78.0672 44.7805 75.6829H40.7805ZM40.7805 42.7805V75.6829H44.7805V42.7805H40.7805ZM75.6829 40.7805H42.7805V44.7805H75.6829V40.7805ZM76 40.4634C76 40.6385 75.858 40.7805 75.6829 40.7805V44.7805C78.0672 44.7805 80 42.8476 80 40.4634H76ZM75.6829 40.1463C75.858 40.1463 76 40.2883 76 40.4634H80C80 38.0791 78.0672 36.1463 75.6829 36.1463V40.1463ZM42.7805 40.1463H75.6829V36.1463H42.7805V40.1463ZM40.7805 4.31707V38.1463H44.7805V4.31707H40.7805ZM40.4634 4C40.6385 4 40.7805 4.14196 40.7805 4.31707H44.7805C44.7805 1.93282 42.8476 0 40.4634 0V4Z" fill="black" mask="url(#path-1-outside-1_7_11)"/>
            </svg>

            <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`${buttonsStyle} reset`}
                onClick={() => {
                    if(props.start !== "start"){
                    if(props.seconds > 1 || props.seconds === 0) {
                        document.querySelector(".reset").style.transform = "rotate(360deg)"
                        setTimeout(()=>{
                            document.querySelector(".reset").style.transition = "none"
                        },1000)
                        setTimeout(() => {
                            document.querySelector(".reset").style.transform = "rotate(0deg)"
                        },1100)
                        setTimeout(()=> {
                            document.querySelector(".reset").style.transition = "transform 1s"
                        },1200)
                    props.setStart("reset");
                    if(props.start === "finished" || props.start === "done"){
                        props.setStart("reset");
                        ResetCraters();
                        setTimeout(() => ResetSunEclipse(),1000);
                    }else {
                        props.setStart("reset");
                        ResetSunEclipse();
                    }
                    setTimeout(() => props.setSeconds(props.initialTime), 100);
                    let id = setInterval(frame, 500)
                    function frame(){
                        let bgStyle = window.getComputedStyle(document.body);
                        let bgPos = bgStyle.backgroundPositionX;
                        if (bgPos === "0%") {
                            props.setStart("start")
                            clearInterval(id)
                        }
                    }
                    }
                }
                }}>
                <mask id="path-1-outside-1_8_31" maskUnits="userSpaceOnUse" x="-18.4374" y="-18.5108" width="125.158" height="125.158" fill="black">
                <rect fill="white" x="-18.4374" y="-18.5108" width="125.158" height="125.158"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M53.1161 80.8439C54.4682 80.4662 55.0672 78.9254 54.4082 77.6859C53.8829 76.6979 52.7227 76.241 51.6428 76.534C36.0259 80.7707 19.002 73.8364 11.0843 58.9453C1.89155 41.6563 8.45487 20.1886 25.7439 10.9959C43.0329 1.80314 64.5006 8.36646 73.6933 25.6555C80.9229 39.2523 78.4074 55.4337 68.5936 66.1963L65.0629 62.6656C64.4329 62.0356 63.3558 62.4818 63.3558 63.3727L63.3558 73.3935C63.3558 73.9458 63.8035 74.3935 64.3558 74.3935L74.3766 74.3935C75.2675 74.3935 75.7137 73.3164 75.0837 72.6864L71.8116 69.4143C83.0008 57.2727 85.8978 38.9267 77.7067 23.5215C67.3354 4.01595 43.1155 -3.38882 23.6099 6.98245C4.10438 17.3537 -3.3004 41.5737 7.07088 61.0792C16.0522 77.9707 35.4191 85.7875 53.1161 80.8439Z"/>
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M53.1161 80.8439C54.4682 80.4662 55.0672 78.9254 54.4082 77.6859C53.8829 76.6979 52.7227 76.241 51.6428 76.534C36.0259 80.7707 19.002 73.8364 11.0843 58.9453C1.89155 41.6563 8.45487 20.1886 25.7439 10.9959C43.0329 1.80314 64.5006 8.36646 73.6933 25.6555C80.9229 39.2523 78.4074 55.4337 68.5936 66.1963L65.0629 62.6656C64.4329 62.0356 63.3558 62.4818 63.3558 63.3727L63.3558 73.3935C63.3558 73.9458 63.8035 74.3935 64.3558 74.3935L74.3766 74.3935C75.2675 74.3935 75.7137 73.3164 75.0837 72.6864L71.8116 69.4143C83.0008 57.2727 85.8978 38.9267 77.7067 23.5215C67.3354 4.01595 43.1155 -3.38882 23.6099 6.98245C4.10438 17.3537 -3.3004 41.5737 7.07088 61.0792C16.0522 77.9707 35.4191 85.7875 53.1161 80.8439Z" fill="#FFA500"/>
                <path d="M54.4082 77.6859L56.1741 76.7469L56.1741 76.7469L54.4082 77.6859ZM53.1161 80.8439L52.578 78.9176L52.578 78.9176L53.1161 80.8439ZM51.6428 76.534L52.1664 78.4642L52.1664 78.4642L51.6428 76.534ZM11.0843 58.9453L12.8502 58.0063L12.8502 58.0063L11.0843 58.9453ZM25.7439 10.9959L24.8049 9.22996L24.8049 9.22996L25.7439 10.9959ZM73.6933 25.6555L71.9274 26.5944L71.9274 26.5944L73.6933 25.6555ZM68.5936 66.1963L67.1794 67.6105L68.6603 69.0915L70.0715 67.5439L68.5936 66.1963ZM65.0629 62.6656L63.6487 64.0798L63.6487 64.0798L65.0629 62.6656ZM63.3558 63.3727L61.3558 63.3727L61.3558 63.3727L63.3558 63.3727ZM63.3558 73.3935L65.3558 73.3935L65.3558 73.3935L63.3558 73.3935ZM64.3558 74.3935L64.3558 72.3935H64.3558V74.3935ZM74.3766 74.3935L74.3766 76.3935H74.3766V74.3935ZM75.0837 72.6864L73.6695 74.1006L73.6695 74.1006L75.0837 72.6864ZM71.8116 69.4143L70.3409 68.059L69.0398 69.4709L70.3974 70.8285L71.8116 69.4143ZM77.7067 23.5215L79.4726 22.5826L79.4726 22.5826L77.7067 23.5215ZM23.6099 6.98245L22.671 5.21656L22.671 5.21656L23.6099 6.98245ZM7.07088 61.0792L8.83677 60.1403L7.07088 61.0792ZM52.6423 78.6248C52.6869 78.7088 52.6832 78.786 52.6609 78.8413C52.65 78.8684 52.6368 78.8845 52.6276 78.893C52.6208 78.8992 52.6083 78.9092 52.578 78.9176L53.6542 82.7701C56.3269 82.0235 57.3881 79.0302 56.1741 76.7469L52.6423 78.6248ZM52.1664 78.4642C52.4108 78.3979 52.5863 78.5196 52.6423 78.6248L56.1741 76.7469C55.1794 74.8763 53.0346 74.0841 51.1191 74.6037L52.1664 78.4642ZM9.31838 59.8842C17.684 75.6176 35.6683 82.94 52.1664 78.4642L51.1191 74.6037C36.3835 78.6014 20.3201 72.0552 12.8502 58.0063L9.31838 59.8842ZM24.8049 9.22996C6.54066 18.9413 -0.392913 41.6199 9.31838 59.8842L12.8502 58.0063C4.17601 41.6926 10.3691 21.4359 26.6828 12.7618L24.8049 9.22996ZM75.4592 24.7165C65.7479 6.45224 43.0692 -0.481321 24.8049 9.22996L26.6828 12.7618C42.9965 4.0876 63.2532 10.2807 71.9274 26.5944L75.4592 24.7165ZM70.0715 67.5439C80.4368 56.1764 83.0981 39.0832 75.4592 24.7165L71.9274 26.5944C78.7477 39.4215 76.3779 54.6911 67.1158 64.8487L70.0715 67.5439ZM63.6487 64.0798L67.1794 67.6105L70.0078 64.7821L66.4771 61.2514L63.6487 64.0798ZM65.3558 63.3727C65.3558 64.2636 64.2787 64.7098 63.6487 64.0798L66.4771 61.2514C64.5872 59.3615 61.3558 60.7 61.3558 63.3727L65.3558 63.3727ZM65.3558 73.3935L65.3558 63.3727L61.3558 63.3727L61.3558 73.3935L65.3558 73.3935ZM64.3558 72.3935C64.9081 72.3935 65.3558 72.8412 65.3558 73.3935L61.3558 73.3935C61.3558 75.0504 62.6989 76.3935 64.3558 76.3935V72.3935ZM74.3766 72.3935L64.3558 72.3935L64.3558 76.3935L74.3766 76.3935L74.3766 72.3935ZM73.6695 74.1006C73.0395 73.4707 73.4857 72.3935 74.3766 72.3935V76.3935C77.0493 76.3935 78.3878 73.1621 76.4979 71.2722L73.6695 74.1006ZM70.3974 70.8285L73.6695 74.1006L76.4979 71.2722L73.2258 68.0001L70.3974 70.8285ZM75.9408 24.4604C83.7209 39.0927 80.9725 56.5223 70.3409 68.059L73.2824 70.7697C85.0291 58.023 88.0747 38.7608 79.4726 22.5826L75.9408 24.4604ZM24.5489 8.74835C43.0791 -1.10436 66.0881 5.93017 75.9408 24.4604L79.4726 22.5826C68.5827 2.10173 43.1518 -5.67328 22.671 5.21656L24.5489 8.74835ZM8.83677 60.1403C-1.01594 41.61 6.0186 18.6011 24.5489 8.74835L22.671 5.21656C2.19016 16.1064 -5.58486 41.5373 5.30498 62.0182L8.83677 60.1403ZM52.578 78.9176C35.7663 83.6139 17.3679 76.185 8.83677 60.1403L5.30498 62.0182C14.7366 79.7564 35.0719 87.961 53.6542 82.7701L52.578 78.9176Z" fill="black" mask="url(#path-1-outside-1_8_31)"/>
            </svg>

        </div>
    );
            }
export default Controls;
