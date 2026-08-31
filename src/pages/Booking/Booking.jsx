import { useParams } from "react-router-dom";
import { useState } from "react";
import Destination from "../../components/PopularDestination/destination";
import './Booking.css';

function Booking() {

    const { destinationId } = useParams();

    const destination = Destination.find(
        (item) => item.id === destinationId
    );

    const [formData, setFormData] = useState({

        name: '',
        email: '',
        phone: '',
        travellers: 1,
        travelDate: '',
        requests: ''

    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    if (!destination) {
        return <h1>Destination not found</h1>;
    }

    return (
        <section className="booking">
            <div className="booking-container">
                <h1>Book Your Trip</h1>

                <h3>{destination.country}</h3>

                <p>Duration: {destination.duration} days</p>

                <p>Price: Rs. {destination.price.toLocaleString()}</p>
            </div>

            <form
                className="booking-form"
                onSubmit={handleSubmit}>


                <div className="bookForm form-name">
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="bookForm form-email">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="bookForm form-phone">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="phone"
                        required
                    />
                </div>

                <div className="bookForm form-travellers">
                    <label htmlFor="travellers">Number of Travellers</label>
                    <input
                        id="travellers"
                        name="travellers"
                        type="number"
                        min={1}
                        value={formData.travellers}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="bookForm form-travelDate">
                    <label htmlFor="travelDate">Travel Date</label>
                    <input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        value={formData.travelDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="bookForm form-requests">
                    <label htmlFor="requests">Special requests</label>
                    <textarea
                        id="requests"
                        name="requests"
                        value={formData.requests}
                        onChange={handleChange}
                        rows="4"
                    />
                </div>

                <button className="form-submit">
                    Submit
                </button>

            </form>

        </section>
    );
}

export default Booking;