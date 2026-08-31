import TestimonialData from "./TestimonialData";
import TestimonialCard from "./TestimonialCard";
import SectionTitle from '../SectionTitle/SectionTitle';
import './Testimonials.css'

function Testimonials() {
    return (
        <section className="testimonials">
            <SectionTitle>Testimonials</SectionTitle>
            <div className="testCards">
                {
                    TestimonialData.map((testimonial) => {
                        return (
                            <TestimonialCard key={testimonial.id}
                                testimonial={testimonial}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials