import { useParams } from "react-router-dom";
import { useState } from "react";
import TourPackagesData from "../../components/TourPackages/TourPackagesData";
import './Booking.css';

function TourPackageBooking() {

    const { tourPackageId } = useParams();

    const tourPackage = TourPackagesData.find((item) => item.id === tourPackageId);

    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        travellers: '',
        travelDate: '',
        requests: ''
    }
    const [formData, setFormData] = useState(initialFormData);

    const initialErrors = {
        name: '',
        email: '',
        phone: '',
        travellers: '',
        travelDate: '',
        requests: ''
    }
    const [errors, setErrors] = useState(initialErrors);

    const namePattern = /^[A-Za-z\s]+$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^(98|97)\d{8}$/;

    const todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);

    const yyyy = todaysDate.getFullYear();
    const mm = String(todaysDate.getMonth() + 1).padStart(2, '0');
    const dd = String(todaysDate.getDate()).padStart(2, '0');

    const minDate = `${yyyy}-${mm}-${dd}`;

    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialTouched = {

        name: false,
        email: false,
        phone: false,
        travellers: false,
        travelDate: false,
        requests: false
    }
    const [touched, setTouched] = useState(initialTouched);

    function validateName(value) {

        const trimmedValue = value.trim();

        if (trimmedValue === "") {
            return 'Name cannot be blank'
        }
        else if (trimmedValue.length < 3) {
            return 'Name should  contain atleast 3 characters'
        }
        else if (!namePattern.test(trimmedValue)) {
            return 'Name can only contain letters and in between spaces'
        }

        return '';
    }

    function validateEmail(value) {

        const trimmedValue = value.trim();

        if (trimmedValue === "") {
            return 'Email cannot be blank'
        }

        if (!emailPattern.test(trimmedValue)) {
            return 'Enter a valid email address'
        }

        return '';
    }

    function validatePhone(value) {
        const trimmedValue = value.trim();

        if (trimmedValue === "") {
            return 'Phone number cannot be blank'
        }

        if (!phonePattern.test(trimmedValue)) {
            return 'Phone number should start with 97/98 and it must be of 10 digits'
        }

        return '';
    }

    function validateTravellers(value) {

        if (value.trim() === "") {
            return 'Number of traveller cannot be blank'
        }

        const numberOfTravellers = Number(value);

        if (numberOfTravellers < 1) {
            return 'Atleast 1 traveller is required'
        }

        if (numberOfTravellers > 30) {
            return 'Number of travellers shouldnot be more than 30'
        }

        return '';
    }

    function validateDate(value) {


        if (value.trim() === "") {
            return 'Travel date is required'
        }

        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < todaysDate) {
            return 'Travel date cannot be in the past days'
        }

        return '';
    }

    function validateForm() {

        const newErrors = {

            name: validateName(formData.name),
            email: validateEmail(formData.email),
            phone: validatePhone(formData.phone),
            travellers: validateTravellers(formData.travellers),
            travelDate: validateDate(formData.travelDate),
            requests: ''
        }

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error !== "");
        return !hasErrors;
    }

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData(prevForm => ({
            ...prevForm,
            [name]: value
        }));


    }

    function handleBlur(e) {

        const { name, value } = e.target;

        setTouched((prevTouch) => ({
            ...prevTouch,
            [name]: true
        }));

        let errorMessage = '';


        if (name === "name") {
            errorMessage = validateName(value);
        }

        if (name === "email") {
            errorMessage = validateEmail(value);
        }

        if (name === "phone") {
            errorMessage = validatePhone(value);
        }

        if (name === "travellers") {
            errorMessage = validateTravellers(value);
        }

        if (name === "travelDate") {
            errorMessage = validateDate(value);
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: errorMessage
        }));

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

        const isFormValid = validateForm();

        if (!isFormValid) {
            return;
        }

        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);

        setFormData(initialFormData);
        setErrors(initialErrors);
        setTouched(initialTouched);
    }

    function getInputClass(FieldName) {

        if (!touched[FieldName]) {
            return '';
        }

        if (errors[FieldName]) {
            return 'input-error';
        }

        return 'input-success';
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

            <div className="booking-form-wrapper">
                <form
                    className="booking-form"
                    onSubmit={handleSubmit}
                    noValidate
                >


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
                                autoComplete="tel"
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

export default TourPackageBooking;