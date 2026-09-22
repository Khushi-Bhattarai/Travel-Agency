import { Link } from "react-router-dom"
import SectionTitle from "../SectionTitle/SectionTitle"
import './BookingChoice.css'
import { MoveRight } from "lucide-react"

function BookingChoice() {
    return (
        <section className="booking-choice" id="booking-choice">

            <SectionTitle>Start Your Journey</SectionTitle>
            <p>What would you like to explore?</p>

            <div className="booking-cards">

                <div className="destinationDesc">
                    <h3>Destinations</h3>
                    <p>Explore places around the world</p>
                    <Link to="/destinations" className="btn btn-primary">
                        <div className="par">
                            Explore Destinations
                        </div>
                        <MoveRight></MoveRight>
                    </Link>
                </div>

                <div className="tourDesc">
                    <h3>Tours</h3>
                    <p>Join guided experiences</p>
                    <Link to="/tours" className="btn btn-secondary">
                        <div className="par">
                            Explore Tours
                        </div>
                        <MoveRight></MoveRight>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default BookingChoice