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
                { x: 20, y: 23, content: "Fresh Concept Construction Renovation" },
                { x: 80, y: 25, content: "Reconstruction of Old Factory Building" },
                { x: 63, y: 53, content: "Jazzy Elite Construction Shopping Center" },
                { x: 56, y: 70, content: "Molestie nunc non blandit massa" },
                { x: 45, y: 84, content: "Excepteur sint occaecat cupida" }
            ];

            const spotsMap = document.querySelector(".spots_map");

            function updateHotSpots(spots) {
                const hotSpots = document.querySelectorAll(".hot-spot");
                const speechBubbles = document.querySelectorAll(".speech-bubble");
            
                // Use a regular for loop for better control
                for (let i = 0; i < spots.length; i++) {
                    const hotSpot = hotSpots[i];
                    const { x, y, content } = spots[i];
                    hotSpot.style.top = `${y}%`;
                    hotSpot.style.left = `${x}%`;
                    speechBubbles[i].textContent = content + i;
                    if (window.innerWidth >= 992) {
                        speechBubbles[i].style.top = `${y}%`;
                        speechBubbles[i].style.left = `${x}%`;
                    } else {
                        speechBubbles[i].style.top = '50%';
                        speechBubbles[i].style.left = '50%';
                    }

                    document.body.addEventListener("click", (e) => {
                        e.target === hotSpot ? speechBubbles[i].classList.add("active") : speechBubbles[i].classList.remove("active");
                    });
                }
            }

            for (let i = 0; i < spots.length; i++) {
                const hotSpot = document.createElement("div");
                hotSpot.classList.add("hot-spot");
                spotsMap.append(hotSpot);

                const speechBubble = document.createElement("span");
                speechBubble.classList.add("speech-bubble");
                spotsMap.append(speechBubble);
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
                        Molestie nunc non blandit massa. Lacus sed viverra tellus in hac habitasse platea. Velit egestas dui id ornare
                        arcu. Sapien pellentesque habitant morbi tristique senectus et netus. Ut consequat semper viverra nam libero.
                        Convallis aenean et tortor
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
