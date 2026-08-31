import Button from '../Button/Button';
import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {

    const [email, setEmail] = useState("");

    function handleChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        alert("You have successfully subscribed to our newsletter");
        setEmail("");
    }

    return (
        <section className="newsletter">
            <div className="content">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Stay updated with our latest offers and travel deals</p>
                <form id="form" onSubmit={handleSubmit}>
                    <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={handleChange}
                    />
                    <Button type='submit'>Subscribe</Button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter