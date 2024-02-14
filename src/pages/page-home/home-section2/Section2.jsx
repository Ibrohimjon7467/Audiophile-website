import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Section2({ slide }) {

    useEffect(() => {
        slide('#homeSection2', "1", "1")
    }, [])

    return (
        <div id="homeSection2" className="product-home2 border-box">
            <img className="mobile" src="../../../assets/images/home/mobile/image-speaker-zx7.jpg" alt="" />
            <img className="tablet" src="../../../assets/images/home/tablet/image-speaker-zx7.jpg" alt="" />
            <img className="desktop" src="../../../assets/images/home/desktop/image-speaker-zx7.jpg" alt="" />
            <div className="txt">
                <h2>ZX7 SPEAKER</h2>
                <NavLink to='/product/zx7-speaker'> <button>see product</button></NavLink>
            </div>
        </div>
    );
}




