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

    const initialformData = {

        name: '',
        email: '',
        phone: '',
        travellers: 1,
        travelDate: '',
        requests: ''

    }
    const [formData, setFormData] = useState(initialformData);

    const initalerrors = {

        name: '',
        email: '',
        phone: '',
        travellers: '',
        travelDate: '',
        requests: ''

    }
    const [errors, setErrors] = useState(initalerrors);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);

    const yyyy = todaysDate.getFullYear();
    const mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const dd = String(todaysDate.getDate()).padStart(2, '0');

    const minDate = `${yyyy}-${mm}-${dd}`;


    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "name") {

            if (value.trim() === "") {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    name: 'Name cannot be blank'
                }));
            }
            else if (value.trim().length < 3) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    name: "Name should  contain atleast 3 characters"
                }))
            }

            else if (!namePattern.test(value.trim())) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    name: 'Name can only contain letters and in between spaces'
                }))
            }
            else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    name: ''
                }));
            }
        }


        if (name === "email") {

            if (
                value.trim() === ""
            ) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    email: 'Email cannot be blank'
                }));
            }
            else if (!emailPattern.test(value.trim())) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    email: 'Enter a valid email address'
                }))
            }
            else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    email: ''
                }));
            }
        }

        if (name === "phone") {

            if (value.trim() === "") {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    phone: 'Phone number cannot be blank'
                }))
            }
            else if (!phonePattern.test(value.trim())) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    phone: 'Phone number should start with 97/98 and it must be of 10 digits'
                }))
            }
            else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    phone: ''
                }));
            }
        }

        if (name === "travellers") {

            const numberOfTravellers = Number(value);

            if (value.trim() === "") {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    travellers: 'Number of traveller cannot be blank'
                }))
            }
            else if (numberOfTravellers < 1) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    travellers: 'Atleast 1 traveller is required'
                }))
            }
            else if (numberOfTravellers > 30) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    travellers: 'Number of travellers shouldnot be more than 30'
                }))
            }
            else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    travellers: ''
                }));
            }
        }

        if (name === "travelDate") {

            const selectedDate = new Date(value);
            selectedDate.setHours(0, 0, 0, 0);

            const todaysDate = new Date();
            todaysDate.setHours(0, 0, 0, 0);

            if (value.trim() === "") {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    travelDate: 'Travel date is required'
                }))
            }
            else if (selectedDate < todaysDate) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    travelDate: 'Travel date cannot be in the past days'
                }))
            }
            else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    travelDate: ''
                }))
            }
        }
    }

    if (!destination) {
        return <h1>Destination not found</h1>;
    }


    function validateForm() {

        const errors = {};

        const selectedDate = new Date(formData.travelDate);
        selectedDate.setHours(0, 0, 0, 0);

        const numberOfTravellers = Number(formData.travellers);

        if (formData.name.trim() === "") {
            errors.name = "Name cannot be blank";
        }
        else if (formData.name.trim().length < 3) {
            errors.name = "Name should  contain atleast 3 characters";
        }

        else if (!namePattern.test(formData.name.trim())) {
            errors.name = 'Name can only contain  letters and in between spaces';
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

        else if (numberOfTravellers < 1) {
            errors.travellers = "Atleast 1 traveller is required";
        }

        else if (numberOfTravellers > 30) {
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

        if (!isValid) {
            console.log("The form field is invalid");
            return;
        }
        setIsSubmitted(true);
        {
            isSubmitted && (
                <p>Your booking request has been submitted successfully! </p>
            )
        }

        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);

        setFormData(initialformData);
        setErrors(initalerrors);
    }


    return (
        <section className="booking">
            <div className="booking-container">
                <h1>Book Your Trip</h1>

                <h3>{destination.country}</h3>

                <p>Duration: {destination.duration} days</p>

                <p>Price: Rs. {destination.price.toLocaleString()}</p>
            </div>

            <div className="booking-form-wrapper">
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
                                min={1}
                                max={30}
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
                                min={minDate}
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

                {
                    isSubmitted && (
                        <div className="booking-success">
                            <p>Your booking request has been submitted successfully! </p>
                        </div>
                    )
                }

            </div>

        </section>
    );
}

export default DestinationBooking;