import WhyChooseUsData from './WhyChooseUsData';
import FeatureCard from './FeatureCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './WhyChooseUs.module.css';

function WhyChooseUs() {
    return (
        <section className={styles['choose-us']}>
            <SectionTitle>Why Choose Us?</SectionTitle>
            <div className={styles.cards}>
                {
                    WhyChooseUsData.map((feature) => {
                        return (
                            <FeatureCard key={feature.id}
                                feature={feature}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default WhyChooseUs;