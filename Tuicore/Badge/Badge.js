import React from 'react'
import "./Badge.css"

const COLOR = ["TuiPrimary-badge", "TuiSecondary-badge", "normal"]

function Badge({badgeContent, children, color, className, id}) {
    let badgeColor = color === "primary" ? COLOR[0] : COLOR[2];

    badgeColor = color === "secondary" ? COLOR[1] : badgeColor;

    const badgeContentCheck = badgeContent > 100 ? "99+" : badgeContent;

    return (
        <span className={`TuiBadge-root`}>
            {
                children
            }
            <span className={`TuiBadge ${badgeColor} ${className ? className : ""}`} id={id}>{badgeContentCheck}</span>
        </span>
    )
}

export default Badge;
