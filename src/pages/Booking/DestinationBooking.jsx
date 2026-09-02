import { useParams } from "react-router-dom";
import { useState } from "react";
import Destination from "../../components/PopularDestination/destination";
import './Booking.css';

function DestinationBooking() {

    const namePattern = /^[A-Za-z\s]+$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^(98|97)\d{8}$/;

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

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        travellers: '',
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

    if (!destination) {
        return <h1>Destination not found</h1>;
    }

    function validateForm() {

        const errors = {};

        const selectedDate = new Date(formData.travelDate);
        selectedDate.setHours(0,0,0,0);

        const todaysDate = new Date();
        todaysDate.setHours(0,0,0,0);

        if (formData.name.trim() === "") {
            errors.name = "Name cannot be blank";
        }
        else if (formData.name.trim().length < 3) {
            errors.name = "Name should  contain atleast 3 characters";
        }

        else if (!namePattern.test(formData.name.trim())) {
            errors.name = 'Name can only contain  letters and spaces';
        }

        if (formData.email.trim() === "") {
            errors.email = "Email cannot be blank";
        }

        else if (!emailPattern.test(formData.email.trim())) {
            errors.email = "Enter a valid email address";
        }

        if (formData.phone.trim() === "") {
            errors.phone = "Phone number cannot be blank";
        }

        else if (!phonePattern.test(formData.phone.trim())) {
            errors.phone = "Phone number should start with 97/98 and it must be of 10 digits";
        }

        if (formData.travellers === "") {
            errors.travellers = "Number of traveller cannot be blank"
        }

        else if (formData.travellers <= 0) {
            errors.travellers = "Atleast 1 traveller is required";
        }

        else if (formData.travellers > 30) {
            errors.travellers = "Number of travellers shouldnot be more than 30";
        }

        if (formData.travelDate.trim() === "") {
            errors.travelDate = "Travel date is required";
        }

        else if (selectedDate < todaysDate) {
            errors.travelDate = "Travel date cannot be in the past days";
        }

       setErrors(errors);

       const hasErrors = Object.keys(errors).length > 0;

       return !hasErrors;

    }

    function handleSubmit(e) {
        
        e.preventDefault();

        const isValid = validateForm();

        if(!isValid ){
            console.log("The form field is invalid");
            return;
        }
        console.log(`The form field is valid`, formData );


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
                    <div className="formDesc">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            placeholder="Enter your full name"
                        />

                        {errors.name && (
                            <p> {errors.name} </p>
                        )}

                    </div>
                </div>

                <div className="bookForm form-email">
                    <label htmlFor="email">Email</label>
                    <div className="formDesc">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            placeholder="Enter your email"
                        />

                        {
                            errors.email && (
                                <p>{errors.email}</p>
                            )
                        }

                    </div>
                </div>

                <div className="bookForm form-phone">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="formDesc">
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            autoComplete="phone"
                            placeholder="Enter your phone number"
                        />

                        {
                            errors.phone && (
                                <p>{errors.phone}</p>
                            )
                        }

                    </div>
                </div>

                <div className="bookForm form-travellers">
                    <label htmlFor="travellers">Number of Travellers</label>
                    <div className="formDesc">
                        <input
                            id="travellers"
                            name="travellers"
                            type="number"
                            // min={1}
                            value={formData.travellers}
                            onChange={handleChange}
                            placeholder="Enter number of travellers"
                        />

                        {
                            errors.travellers && (
                                <p>{errors.travellers}</p>
                            )
                        }

                    </div>
                </div>

                <div className="bookForm form-travelDate">
                    <label htmlFor="travelDate">Travel Date</label>
                    <div className="formDesc">
                        <input
                            id="travelDate"
                            name="travelDate"
                            type="date"
                            value={formData.travelDate}
                            onChange={handleChange}
                            placeholder="select travel date"
                        />

                        {
                            errors.travelDate && (
                                <p>{errors.travelDate}</p>
                            )
                        }

                    </div>
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

export default DestinationBooking;