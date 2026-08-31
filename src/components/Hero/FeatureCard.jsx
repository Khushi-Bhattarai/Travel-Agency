import { Star, MapPinHouse, Plane } from 'lucide-react';
import './FeatureCard.css';

const icons = {
    'plane' : Plane,
    'mapPinHouse' : MapPinHouse,
    'star' : Star
}

function FeatureCard({icon,title,description}) {

    const Icon = icons[icon]

    return (
          <div className="hero-card">
                <p> <Icon /> </p>
                <h3> {title} </h3>
                <p> {description} </p>
            </div> 
    )
}

export default FeatureCard