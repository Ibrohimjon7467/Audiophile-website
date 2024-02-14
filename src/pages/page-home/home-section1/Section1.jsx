import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Section1({ slide }) {

    useEffect(() => {
        slide('#homeSection1', "0.5", "1")
    }, [])

    return (
        <div id="homeSection1" className="product-home1 border-box">
            <img className="mobile" src="../../../assets/images/home/mobile/image-speaker-zx9.png" alt="image" />
            <img className="tablet" src="../../../assets/images/home/tablet/tabspeaker.png" alt="image" />
            <img className="desktop" src="../../../assets/images/home/desktop/speakerzx.png" alt="image" />
            <div className="txt">
                <h2>ZX9 SPEAKER</h2>
                <p>
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </p>
                <NavLink to='/product/zx9-speaker'>
                    <button>see product</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Section1