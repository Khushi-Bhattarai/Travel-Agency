import './PackageCard.css';
import { Link } from "react-router-dom";

function PackageCard({ tourPackage }) {

    const {
        image,
        title,
        description,
        duration,
        price
    } = tourPackage;

    return (
        <article className="tour-card">
            <img src={image}
                alt={title}
            />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
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