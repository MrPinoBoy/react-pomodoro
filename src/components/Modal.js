import React,{useRef} from "react";
import {ResetCraters, ResetSunEclipse} from "./Controls";
const Modal = (props) => {
    
    let showModal = props.start === "finished" ? "modal show" : "modal hide"

    const exit = () => {
        props.setStart("done")
    }

    const restart = () => {
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
        <div className={showModal}>
            
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={"exit"}
                onClick={() => exit()}
            >
                <mask id="path-2" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80" fill="black">
                <rect fill="white" width="80" height="80"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M40.4634 2C39.1837 2 38.1463 3.03739 38.1463 4.31707V38.1463H4.31707C3.03739 38.1463 2 39.1837 2 40.4634C2 41.7431 3.03739 42.7805 4.31707 42.7805H38.1463V75.6829C38.1463 76.9626 39.1837 78 40.4634 78C41.7431 78 42.7805 76.9626 42.7805 75.6829V42.7805H75.6829C76.9626 42.7805 78 41.7431 78 40.4634C78 39.1837 76.9626 38.1463 75.6829 38.1463H42.7805V4.31707C42.7805 3.03739 41.7431 2 40.4634 2Z"/>
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M40.4634 2C39.1837 2 38.1463 3.03739 38.1463 4.31707V38.1463H4.31707C3.03739 38.1463 2 39.1837 2 40.4634C2 41.7431 3.03739 42.7805 4.31707 42.7805H38.1463V75.6829C38.1463 76.9626 39.1837 78 40.4634 78C41.7431 78 42.7805 76.9626 42.7805 75.6829V42.7805H75.6829C76.9626 42.7805 78 41.7431 78 40.4634C78 39.1837 76.9626 38.1463 75.6829 38.1463H42.7805V4.31707C42.7805 3.03739 41.7431 2 40.4634 2Z" fill="#FFA500"/>
                <path d="M38.1463 38.1463V40.1463H40.1463V38.1463H38.1463ZM38.1463 42.7805H40.1463V40.7805H38.1463V42.7805ZM42.7805 42.7805V40.7805H40.7805V42.7805H42.7805ZM42.7805 38.1463H40.7805V40.1463H42.7805V38.1463ZM40.1463 4.31707C40.1463 4.14196 40.2883 4 40.4634 4V0C38.0791 0 36.1463 1.93282 36.1463 4.31707H40.1463ZM40.1463 38.1463V4.31707H36.1463V38.1463H40.1463ZM4.31707 40.1463H38.1463V36.1463H4.31707V40.1463ZM4 40.4634C4 40.2883 4.14196 40.1463 4.31707 40.1463V36.1463C1.93282 36.1463 0 38.0791 0 40.4634H4ZM4.31707 40.7805C4.14196 40.7805 4 40.6385 4 40.4634H0C0 42.8476 1.93282 44.7805 4.31707 44.7805V40.7805ZM38.1463 40.7805H4.31707V44.7805H38.1463V40.7805ZM40.1463 75.6829V42.7805H36.1463V75.6829H40.1463ZM40.4634 76C40.2883 76 40.1463 75.858 40.1463 75.6829H36.1463C36.1463 78.0672 38.0791 80 40.4634 80V76ZM40.7805 75.6829C40.7805 75.858 40.6385 76 40.4634 76V80C42.8476 80 44.7805 78.0672 44.7805 75.6829H40.7805ZM40.7805 42.7805V75.6829H44.7805V42.7805H40.7805ZM75.6829 40.7805H42.7805V44.7805H75.6829V40.7805ZM76 40.4634C76 40.6385 75.858 40.7805 75.6829 40.7805V44.7805C78.0672 44.7805 80 42.8476 80 40.4634H76ZM75.6829 40.1463C75.858 40.1463 76 40.2883 76 40.4634H80C80 38.0791 78.0672 36.1463 75.6829 36.1463V40.1463ZM42.7805 40.1463H75.6829V36.1463H42.7805V40.1463ZM40.7805 4.31707V38.1463H44.7805V4.31707H40.7805ZM40.4634 4C40.6385 4 40.7805 4.14196 40.7805 4.31707H44.7805C44.7805 1.93282 42.8476 0 40.4634 0V4Z" fill="black" mask="url(#path-2)"/>
            </svg>

            

            <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={"restart"}
            onClick={() => restart()}
            >
            <path d="M73 61.4641L50.5 74.4545C47.8333 75.9941 44.5 74.0696 44.5 70.9904V45.0096C44.5 41.9304 47.8333 40.0059 50.5 41.5455L73 54.5359C75.6667 56.0755 75.6667 59.9245 73 61.4641Z" fill="#FFA500" stroke="black" strokeWidth="2"/>
            <mask id="path-2-outside-1_14_4" maskUnits="userSpaceOnUse" x="-3.4374" y="-3.51082" width="125.158" height="125.158" fill="black">
            <rect fill="white" x="-3.4374" y="-3.51082" width="125.158" height="125.158"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M68.1161 95.8439C69.4682 95.4662 70.0672 93.9254 69.4082 92.6859C68.8829 91.6979 67.7227 91.241 66.6428 91.534C51.0259 95.7707 34.002 88.8364 26.0843 73.9453C16.8915 56.6563 23.4549 35.1886 40.7439 25.9959C58.0329 16.8031 79.5006 23.3665 88.6933 40.6555C95.9229 54.2523 93.4074 70.4337 83.5936 81.1963L80.0629 77.6656C79.4329 77.0356 78.3558 77.4818 78.3558 78.3727L78.3558 88.3935C78.3558 88.9458 78.8035 89.3935 79.3558 89.3935L89.3766 89.3935C90.2675 89.3935 90.7137 88.3164 90.0837 87.6864L86.8116 84.4143C98.0008 72.2727 100.898 53.9267 92.7067 38.5215C82.3354 19.016 58.1155 11.6112 38.6099 21.9825C19.1044 32.3537 11.6996 56.5737 22.0709 76.0792C31.0522 92.9707 50.4191 100.787 68.1161 95.8439Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M68.1161 95.8439C69.4682 95.4662 70.0672 93.9254 69.4082 92.6859C68.8829 91.6979 67.7227 91.241 66.6428 91.534C51.0259 95.7707 34.002 88.8364 26.0843 73.9453C16.8915 56.6563 23.4549 35.1886 40.7439 25.9959C58.0329 16.8031 79.5006 23.3665 88.6933 40.6555C95.9229 54.2523 93.4074 70.4337 83.5936 81.1963L80.0629 77.6656C79.4329 77.0356 78.3558 77.4818 78.3558 78.3727L78.3558 88.3935C78.3558 88.9458 78.8035 89.3935 79.3558 89.3935L89.3766 89.3935C90.2675 89.3935 90.7137 88.3164 90.0837 87.6864L86.8116 84.4143C98.0008 72.2727 100.898 53.9267 92.7067 38.5215C82.3354 19.016 58.1155 11.6112 38.6099 21.9825C19.1044 32.3537 11.6996 56.5737 22.0709 76.0792C31.0522 92.9707 50.4191 100.787 68.1161 95.8439Z" fill="#FFA500"/>
            <path d="M69.4082 92.6859L71.1741 91.747L71.1741 91.7469L69.4082 92.6859ZM68.1161 95.8439L67.578 93.9176L67.578 93.9176L68.1161 95.8439ZM66.6428 91.534L67.1664 93.4642H67.1664L66.6428 91.534ZM26.0843 73.9453L27.8502 73.0063L26.0843 73.9453ZM40.7439 25.9959L39.8049 24.23L40.7439 25.9959ZM88.6933 40.6555L86.9274 41.5944L88.6933 40.6555ZM83.5936 81.1963L82.1794 82.6105L83.6603 84.0915L85.0715 82.5439L83.5936 81.1963ZM80.0629 77.6656L78.6487 79.0798L80.0629 77.6656ZM78.3558 78.3727L76.3558 78.3727V78.3727L78.3558 78.3727ZM78.3558 88.3935H80.3558H78.3558ZM79.3558 89.3935V87.3935V89.3935ZM89.3766 89.3935L89.3766 91.3935L89.3766 89.3935ZM90.0837 87.6864L88.6695 89.1006L88.6695 89.1006L90.0837 87.6864ZM86.8116 84.4143L85.3409 83.059L84.0398 84.4709L85.3974 85.8285L86.8116 84.4143ZM92.7067 38.5215L94.4726 37.5825L92.7067 38.5215ZM38.6099 21.9825L37.671 20.2166L37.671 20.2166L38.6099 21.9825ZM22.0709 76.0792L23.8368 75.1403L22.0709 76.0792ZM67.6423 93.6248C67.6869 93.7088 67.6832 93.786 67.6609 93.8413C67.65 93.8684 67.6368 93.8845 67.6276 93.893C67.6208 93.8992 67.6083 93.9092 67.578 93.9176L68.6542 97.7701C71.3269 97.0235 72.3881 94.0302 71.1741 91.747L67.6423 93.6248ZM67.1664 93.4642C67.4108 93.3979 67.5863 93.5196 67.6423 93.6248L71.1741 91.7469C70.1794 89.8763 68.0346 89.0841 66.1191 89.6037L67.1664 93.4642ZM24.3184 74.8842C32.684 90.6176 50.6683 97.94 67.1664 93.4642L66.1191 89.6037C51.3835 93.6014 35.3201 87.0552 27.8502 73.0063L24.3184 74.8842ZM39.8049 24.23C21.5407 33.9413 14.6071 56.6199 24.3184 74.8842L27.8502 73.0063C19.176 56.6926 25.3691 36.4359 41.6828 27.7618L39.8049 24.23ZM90.4592 39.7165C80.7479 21.4522 58.0692 14.5187 39.8049 24.23L41.6828 27.7618C57.9965 19.0876 78.2532 25.2807 86.9274 41.5944L90.4592 39.7165ZM85.0715 82.5439C95.4368 71.1764 98.0981 54.0832 90.4592 39.7165L86.9274 41.5944C93.7477 54.4215 91.3779 69.6911 82.1158 79.8487L85.0715 82.5439ZM78.6487 79.0798L82.1794 82.6105L85.0078 79.7821L81.4771 76.2514L78.6487 79.0798ZM80.3558 78.3727C80.3558 79.2636 79.2787 79.7098 78.6487 79.0798L81.4771 76.2514C79.5872 74.3615 76.3558 75.7 76.3558 78.3727L80.3558 78.3727ZM80.3558 88.3935L80.3558 78.3727L76.3558 78.3727L76.3558 88.3935L80.3558 88.3935ZM79.3558 87.3935C79.9081 87.3935 80.3558 87.8412 80.3558 88.3935L76.3558 88.3935C76.3558 90.0504 77.6989 91.3935 79.3558 91.3935L79.3558 87.3935ZM89.3766 87.3935L79.3558 87.3935L79.3558 91.3935L89.3766 91.3935L89.3766 87.3935ZM88.6695 89.1006C88.0395 88.4707 88.4857 87.3935 89.3766 87.3935L89.3766 91.3935C92.0493 91.3935 93.3878 88.1621 91.4979 86.2722L88.6695 89.1006ZM85.3974 85.8285L88.6695 89.1006L91.4979 86.2722L88.2258 83.0001L85.3974 85.8285ZM90.9408 39.4604C98.7209 54.0927 95.9725 71.5223 85.3409 83.059L88.2824 85.7697C100.029 73.023 103.075 53.7608 94.4726 37.5825L90.9408 39.4604ZM39.5489 23.7484C58.0791 13.8956 81.0881 20.9302 90.9408 39.4604L94.4726 37.5825C83.5827 17.1017 58.1518 9.32672 37.671 20.2166L39.5489 23.7484ZM23.8368 75.1403C13.9841 56.61 21.0186 33.6011 39.5489 23.7484L37.671 20.2166C17.1902 31.1064 9.41514 56.5373 20.305 77.0182L23.8368 75.1403ZM67.578 93.9176C50.7663 98.6139 32.3679 91.185 23.8368 75.1403L20.305 77.0182C29.7366 94.7564 50.0719 102.961 68.6542 97.7701L67.578 93.9176Z" fill="black" mask="url(#path-2-outside-1_14_4)"/>
            </svg>

            {/* <button ref={cool} className={"exit"} onClick={() => exit()}>X</button>
            <button className={"restart"} onClick={() => restart()}>O</button> */}
        </div>
    );
}
 
export default Modal;