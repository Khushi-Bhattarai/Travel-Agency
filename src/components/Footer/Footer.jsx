import FooterLinks from "./FooterLinks"
import './Footer.css'

function Footer() {

    const quickLinks = [

        {
            href: '#home',
            label: 'Home'
        },

        {
            href: '#popular-destination',
            label: 'Destination'
        },

        {
            href: '#tours',
            label: 'Tours'
        },

        {
            href: '#contact',
            label: 'Contact'
        }

    ]

    const support = [

        {
            href: '#faq',
            label: 'FAQs'
        },

        {
            href: '#tos',
            label: 'Terms of Service'
        },

        {
            href: '#privacy',
            label: 'Privacy'
        },

        {
            href: '#copyright',
            label: 'Copyright'
        }

    ]

    return (
        <footer>
            <div className="footer-content" id="contact">

                <div className="footer-section about">
                    <h3>About Vasudev Travel Agency</h3>
                    <p>We are dedicated to providing exceptional travel experiences, ensuring our clients have unforgettable journeys.</p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <FooterLinks links = {quickLinks} />

                 
                </div>

                <div className="footer-section support">
                    <h3>Support</h3>
                    <FooterLinks links = {support} />

            
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@vasudevtravel.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
