import React from 'react';
import { useEffect, useState } from "react";
import "../pages/Home.css";
import { BsFillStarFill } from "react-icons/bs"
import axios from 'axios';

function IceCreamCard() {
    const [items, setItems] = useState([
        {
            flavor: "",
            description: "",
            customer_rating: "",
            price: "",
        },
    ]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/all`)
            .then((response) => {
                setItems(response.data);
            });
    }, [])

    console.log('IceCream_data', items)

    return (
        <div className='container'>
            {items?.map((p, i) => {
                return (
                    <div className="listItem" key={i}>
                        <div className="image" />
                        <div className='content'>
                            <p key={p.id} className="name"> {p.flavor}</p>
                            <p key={p.id} className="detail"> {p.description}</p>
                            <p key={p.id} className="rating">
                                <BsFillStarFill color="rgb(255, 207, 4)" sx={{ size: "20px" }} />
                                {p.customer_rating}</p>
                            <p key={p.id} className="price"> {p.price}</p>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}

export default IceCreamCard;