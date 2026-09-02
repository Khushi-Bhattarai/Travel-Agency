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
                <Link to={`/booking/tourPackages/${tourPackage.id}`}>Book-Now</Link>
                <Link to={`/tourPackages/${tourPackage.id}`}>View details</Link>
            </div>
        </article>
    )
}

export default PackageCard