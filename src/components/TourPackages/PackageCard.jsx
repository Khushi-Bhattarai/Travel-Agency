import './PackageCard.css';
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';

function PackageCard({ tourPackage }) {

    const {
        image,
        title,
        description,
        duration,
        price
    } = tourPackage;

    const [showMore, setShowMore] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const element = descriptionRef.current;

        if (element === null) return;

        if (element.scrollHeight > element.clientHeight) {
            setShowMore(true);
        } else {
            setShowMore(false);
        }
    }, []);

    return (
        <article className="tour-card">
            <img src={image}
                alt={title}
            />
            <div className="card-content">
                <h3>{title}</h3>

                <div className="description-wrapper">
                    <p
                        ref={descriptionRef}
                        className={`description ${expanded ? "expanded" : ""} `}
                    >
                        {description}
                    </p>

                    {showMore && !expanded && (
                        <button
                            className='see-more'
                            onClick={() => setExpanded(true)}
                        >
                            SeeMore
                        </button>
                    )}

                    {showMore && expanded && (
                        <button
                            className='see-less'
                            onClick={() => setExpanded(false)}
                        >
                            SeeLess
                        </button>
                    )}

                </div>

                <div className="package-info">
                    <p>Rs. {price.toLocaleString()}</p>
                    <p>{duration} days</p>
                </div>
                <div className="tour-buttons">
                    <Link to={`/tours/${tourPackage.id}`}>View Details</Link>
                    <Link to={`/booking/tours/${tourPackage.id}`}>Book Now</Link>
                </div>
            </div>
        </article>
    )
}

export default PackageCard