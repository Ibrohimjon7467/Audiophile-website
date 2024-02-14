import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function IntroHeader({ slide }) {

    useEffect(() => {
        slide('#introHome', "0.5", "1")
    }, [])

    return (
        <section className="intro">
            <div id="introHome" className="container-intro">
                <div className="txt">
                    <span className="new-product">New product</span>
                    <h1>XX99 mark ii headphones</h1>
                    <p>
                        Experience natural, lifelike audio and exceptional
                        build quality made for the passionate music
                        enthusiast.
                    </p>
                    <NavLink to='/product/xx99-mark-two-headphones'>
                        <button className="btn-style1">see product</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default IntroHeader