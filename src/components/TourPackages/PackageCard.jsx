import Button from "../Button/Button";
import './PackageCard.css'

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
                <Button>Book-Now</Button>
            </div>
        </article>
    )
}

export default PackageCard