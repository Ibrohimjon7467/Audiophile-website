import React from 'react'
import { NavLink } from "react-router-dom";

export default function MayAlsoLike({ item }) {
    return (
        <div className="box-item">
            <img
                className="mobile-other"
                src={item.image.mobile}
                alt=""
            />
            <img
                className="tablet-other"
                src={item.image.tablet}
                alt=""
            />
            <img
                className="desktop-other"
                src={item.image.desktop}
                alt=""
            />
            <h2>{item.name}</h2>
            <NavLink className="links" to={"/product/" + item.slug}>
                <button className="btn-style1">SEE PRODUCT</button>
            </NavLink>
        </div>
    );
}
