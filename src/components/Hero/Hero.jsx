import './Hero.css';
import heroFeatures from './heroFeatures';
import FeatureCard from './FeatureCard';
import Button from '../Button/Button';
import worldMap from '../../assets/world-map.jpg';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-left">
                <h1>Explore the World with Confidence</h1>
                <h3>Your Next Adventure Starts Here</h3>
                <p>Discover breathtaking destinations, carefully planned tour packages, and unforgettable travel
                    experiences. Whether you're looking for a relaxing beach vacation or an exciting mountain adventure,
                    we've got the perfect trip for you.
                </p>
                <div className="hero-buttons">
                    <Button href="#tours"> Explore Tours</Button>
                    <Button href="#popular-destination"> Learn More</Button>
                </div>
                <div className='cards preview'>
                        {
                            heroFeatures.map((feature) => {
                                return (
                                    <FeatureCard key={feature.id}
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                );
                            })
                        }
                </div>
            </div>
            <div className="hero-right">
                <img src={worldMap} alt="world-map"  />
            </div>
        </section>
    )
}

export default Hero