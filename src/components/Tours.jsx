import { useState, useEffect } from "react";
import "../App.css";
import { Tour } from "./Tour";
const url = "https://course-api.com/react-tours-project";

export const Tours = () => {
    const [tourPlace, setTourPlace] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTourPlace(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    // fetchData();
    const handleClick = (id) => {
        setTourPlace((currentValue) => {
            return tourPlace.filter((value) => {
                if (id !== value.id) {
                    return value;
                }
            });
        });
    };

    if (tourPlace.length == 0) {
        return (
            <section>
                <div className="page-Header">Our Tours</div>
                <div className="border-header"></div>

                <button
                    className="btn-refresh-int"
                    onClick={() => {
                        fetchData();
                    }}
                >
                    Refresh Me
                </button>
            </section>
        );
    }
    return (
        <section>
            <div className="page-Header">Our Tours</div>
            <div className="border-header"></div>
            <div className="place-list">
                {tourPlace.map((place) => {
                    //console.log(place);
                    return (
                        <>
                            <Tour place={place} key={place.id}>
                                <div className="btn-div">
                                    <button
                                        className="btn-no-int"
                                        onClick={() => {
                                            handleClick(place.id);
                                        }}
                                    >
                                        not interested
                                    </button>
                                </div>
                            </Tour>
                        </>
                    );
                })}
            </div>
        </section>
    );
};
