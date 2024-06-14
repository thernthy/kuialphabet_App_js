import React, { useEffect } from 'react';
import googleMapSvg from '../../assets/img/mape/googleMap_svg.svg';
import '../../assets/css/preload.min.css';
import '../../assets/css/icomoon.css';
import '../../assets/css/libs.min.css';
import '../../assets/css/mapstyle.css';
import { Link } from 'react-router-dom';

const GoogleMap = ({t}) => {
    useEffect(() => {
        const initializeMap = () => {
            const spots = [
                { x: 20, y: 23, content:t("Siem Reap")},
                { x: 80, y: 25, content: "Mondulkiri" },
                { x: 63, y: 53, content: "coming soon" },
                { x: 56, y: 70, content: "coming soon" },
                { x: 45, y: 84, content: "coming soon" }
            ];
        
            const spotsMap = document.querySelector(".spots_map");
        
            for (let i = 0; i < spots?.length; i++) {
                const hotSpot = document.createElement("div");
                hotSpot.classList.add("hot-spot");
                spotsMap.append(hotSpot);
        
                const speechBubble = document.createElement("span");
                speechBubble.classList.add("speech-bubble");
                spotsMap.append(speechBubble);
            }
        
            function updateHotSpots(spots) {
                const hotSpots = document.querySelectorAll(".hot-spot");
                const speechBubbles = document.querySelectorAll(".speech-bubble");
            
                // Ensure hotSpots and speechBubbles arrays have the same length as spots
                if (hotSpots?.length !== spots?.length || speechBubbles?.length !== spots?.length) {
                    console.error("Mismatch in spots, hotSpots, or speechBubbles array lengths");
                    return;
                }
            
                for (let i = 0; i < spots?.length; i++) {
                    const { x, y, content } = spots[i];
            
                    // Check if hotSpot and speechBubble elements are available
                    if (!hotSpots[i] || !speechBubbles[i]) {
                        console.error(`hotSpot or speechBubble not found at index ${i}`);
                        continue;
                    }
            
                    hotSpots[i].style.top = `${y}%`;
                    hotSpots[i].style.left = `${x}%`;
                    speechBubbles[i].textContent = content;
            
                    if (window.innerWidth >= 992) {
                        speechBubbles[i].style.top = `${y}%`;
                        speechBubbles[i].style.left = `${x}%`;
                    } else {
                        speechBubbles[i].style.top = '50%';
                        speechBubbles[i].style.left = '50%';
                    }
            
                    document.body.addEventListener("click", (e) => {
                        e.target === hotSpots[i] ? speechBubbles[i].classList.add("active") : speechBubbles[i].classList.remove("active");
                    });
                }
            }
            
        
            updateHotSpots(spots);
        
            window.addEventListener("load", () => updateHotSpots(spots));
            window.addEventListener("resize", () => updateHotSpots(spots));
        };

        initializeMap();
    }, []);

    return (
        <section className="spots section">
            <div className="container">
                <div className="wrapper">
                    <div className="spots_header section_header">
                        <span className="subtitle caption-top">{t("homePage.kui")} {t("homePage.community")}</span>
                        <h2 className="title">
                            {t("homePage.our")}
                            <span className="highlight">{t("homePage.community")}</span>
                            {t("homePage.in cambodia")}
                        </h2>
                    </div>
                    <div className="spots_map">
                        <img src={googleMapSvg} alt="Map" />
                    </div>
                </div>
                <div className="spots_info">
                    <p className="spots_info-text">
                        {t("homePage.community_content")}
                    </p>
                    <div className="wrapper">
                        <div className="spots_info-number">
                            <h2 className="countNum number" data-suffix="+" data-value="200">10 +</h2>
                            <span className="label capitalize">{t("homePage.kui")} {t("homePage.community")}</span>
                        </div>
                        <div className="spots_info-number">
                            <h2 className="countNum number" data-suffix="%" data-value="99">80%</h2>
                            <span className="label">{t("homePage.explore")} {t("homePage.our")} {t("homePage.community")}</span>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Link className="px-6 py-2 rounded-full text-white no-underline bg-blue-600 " href="about.html">
                         {t("homePage.explore")} {t("homePage.our")} {t("homePage.community")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleMap;
