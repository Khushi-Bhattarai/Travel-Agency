import { UserCheck, Shield, Heart } from 'lucide-react';
import styles from './FeatureCard.module.css';


const icons = {
    'user-check': UserCheck,
    'shield': Shield,
    'heart': Heart
};

function FeatureCard({ feature }) {

    const {
        icon,
        title,
        description
    } = feature;


    const Icon = icons[icon];


    return (
        <article className={styles.card}>
            <Icon />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export default FeatureCard;