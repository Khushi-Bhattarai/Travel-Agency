import { Link } from "react-router-dom";
import './DestinationCard.css';

function DestinationCard({ destination }) {


    const {
        image,
        country,
        description,
        price,
        rating,
        duration
    } = destination;

  

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
                    <p>
                        {description}
                    </p>
                </div>

                <div className="destination-wrapper">
                    <p>Duration: {duration} days</p>
                    <p>Rs. {price.toLocaleString()} </p>
                </div>

                <div className="viewBook">
                    <Link to={`/destinations/${destination.id}`}>
                        View Details
                    </Link>

                    <Link to={`/booking/destinations/${destination.id}`}>
                        Book Now
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default DestinationCard;