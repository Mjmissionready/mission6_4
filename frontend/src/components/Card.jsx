import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Card = (props) => {
    const  iceCream  = props.icecreams;

    return(
        <div className="card-container">
            <img src="../images/VanillaSwiss.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-list/${iceCream._id}`}>
                        { iceCream.name }
                    </Link>
                </h2>
                <h3>{iceCream.customer_rating}</h3>
                <p>{iceCream.description}</p>
            </div>
        </div>
    )
};

export default Card;