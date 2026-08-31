import './TestimonialCard.css'

// const arr = [1, 2, 3, 4, 5];
const star = Array.from({length: 5});

function TestimonialCard({ testimonial }) {

    const {
        image,
        name,
        rating,
        review
    } = testimonial;

    return (
        <article className="test-card">
            <img src={image}
                alt={name} />
            <div className="card-content">
                <h3>{name}</h3>
                <div className="ratings">
                    {
                        star.map((_, index) => {
                            return (
                                <span key={index}>
                                    {index < rating ? '⭐' : ''}
                                </span>

                            );
                        })
                    }
                </div>
                <p>{review}</p>
            </div>
        </article>
    )
}

export default TestimonialCard