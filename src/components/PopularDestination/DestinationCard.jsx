import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import './DestinationCard.css';

function DestinationCard({ destination }) {

    const [expanded, setExpanded] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const descriptionRef = useRef(null);

    const {
        image,
        country,
        description,
        price,
        rating,
        duration
    } = destination;

    useEffect(() => {
        const element = descriptionRef.current;

        if (element.scrollHeight > element.clientHeight) {
            setShowMore(true);
        }
    }, []);

    return (
        <div className="destination-card">
            <img src={image}
                alt={country}
            />
            <div className="destination-card-content">
                <h3 className="rating">
                    <span>{country}</span>
                    <span className="rate">{rating}⭐</span>
                </h3>


                <div className="description-wrapper">
                    <p
                        ref={descriptionRef}
                        className={`description ${expanded ? "expanded" : ""}`}
                    >
                        {description}
                    </p>

                    {showMore && !expanded && (
                        <button
                            className="see-more"
                            onClick={() => setExpanded(true)}
                        >
                            See More
                        </button>
                    )}
                </div>


                <p>Rs. {price.toLocaleString()} </p>

                <p>Duration: {duration} days</p>

                <div className="viewBook">
                    <Link to={`/destinations/${destination.id}`}>
                        View Details
                    </Link>

                    <Link to={`/booking/${destination.id}`}>
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard;