import { useParams } from "react-router-dom";
import { useState } from "react";
import './Booking.css';
import TourPackagesData from "../../components/TourPackages/TourPackagesData";

function TourPackageBooking() {

    const { tourPackageId } = useParams();

    const tourPackage = TourPackagesData.find((item) => item.id === tourPackageId);

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

    if (!tourPackage) {
        return <h1>Tour Package not found</h1>;
    }

    return (
        <section className="booking">
            <div className="booking-container">
                <h1>Book Your Trip</h1>

                <h3>{tourPackage.title}</h3>

                <p>Duration: {tourPackage.duration} days</p>

                <p>Price: Rs. {tourPackage.price.toLocaleString()}</p>
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
                        placeholder="Enter your full name"
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
                        placeholder="Enter your email"
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
                        placeholder="Enter your phone number"
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
                        placeholder="Enter number of travellers"
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
                        placeholder="select travel date"
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
                        placeholder="Enter any special requests"
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

export default TourPackageBooking;