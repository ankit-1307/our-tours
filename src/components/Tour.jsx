import React, { useState } from "react";
import "../App.css";

export const Tour = (props) => {
    // console.log(props.place);
    const { id, name, info, image, price } = props.place;
    const [fullDescription, setFullDescription] = useState((currentValue) => {
        currentValue = info.slice(0, 200);
        return currentValue;
    });
    // setFullDescription(info);
    const handleClick = (e) => {
        e.target.style.display = "none";
        setFullDescription(info);
    };

    return (
        <article>
            <div className="tour-item" key={id}>
                <h3>{`$${price}`}</h3>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <p>{fullDescription}</p>
                <p className="read-more"
                    onClick={(e) => {
                        handleClick(e);
                    }}
                >
                    read more..
                </p>
                {props.children}
            </div>
        </article>
    );
};
