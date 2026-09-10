import { useParams } from "react-router-dom";
import { useState } from "react";
import Destination from "../../data/destination";
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
        travellers: '',
        travelDate: '',
        requests: ''

    }
    const [formData, setFormData] = useState(initialformData);

    const initialerrors = {

        name: '',
        email: '',
        phone: '',
        travellers: '',
        travelDate: '',
        requests: ''

    }
    const [errors, setErrors] = useState(initialerrors);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);

    const yyyy = todaysDate.getFullYear();
    const mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const dd = String(todaysDate.getDate()).padStart(2, '0');

    const minDate = `${yyyy}-${mm}-${dd}`;

    const initialTouched = {
        name: false,
        email: false,
        phone: false,
        travellers: false,
        travelDate: false,
        requests: false
    }
    const [touched, setTouched] = useState(initialTouched);

    function getInputClass(FieldName) {
        if (!touched[FieldName]) {
            return '';
        }

        if (errors[FieldName]) {
            return 'input-error';
        }

        return 'input-success';
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });


    }

    function handleBlur(e) {

        const { name, value } = e.target;

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true
        }));

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

        setTouched({
            name: true,
            email: true,
            phone: true,
            travellers: true,
            travelDate: true,
            requests: true
        })

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);

        setFormData(initialformData);
        setErrors(initialerrors);
        setTouched(initialTouched);
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
                                onBlur={handleBlur}
                                autoComplete="name"
                                placeholder="Enter your full name"
                                className={getInputClass('name')}
                            />

                            {touched.name && errors.name && (
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
                                onBlur={handleBlur}
                                autoComplete="email"
                                placeholder="Enter your email"
                                className={getInputClass('email')}
                            />

                            {
                                touched.email && errors.email && (
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
                                onBlur={handleBlur}
                                autoComplete="phone"
                                placeholder="Enter your phone number"
                                className={getInputClass('phone')}
                            />

                            {
                                touched.phone && errors.phone && (
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
                                onBlur={handleBlur}
                                placeholder="Enter number of travellers"
                                className={getInputClass('travellers')}
                            />

                            {
                                touched.travellers && errors.travellers && (
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
                                onBlur={handleBlur}
                                placeholder="select travel date"
                                className={getInputClass('travelDate')}
                            />

                            {
                                touched.travelDate && errors.travelDate && (
                                    <p>{errors.travelDate}</p>
                                )
                            }

                        </div>
                    </div>

                    <div className="bookForm form-requests">
                        <label htmlFor="requests">Special requests</label>

                        <div className="textarea-wrapper">

                            <textarea
                                id="requests"
                                name="requests"
                                value={formData.requests}
                                onChange={handleChange}
                                placeholder="Enter any special requests"
                                rows="4"
                                maxLength={500}
                            />

                            <span className="character-count">
                                {formData.requests.length}/500
                            </span>

                        </div>
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