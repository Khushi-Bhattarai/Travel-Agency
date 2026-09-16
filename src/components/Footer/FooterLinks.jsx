import { Link } from 'react-router-dom';
import './FooterLinks.css';

function FooterLinks({ links }) {
  return (
    <ul className="footer-ul">
      {
        links.map((link) => {
          return (
            <li key={link.label}>
              <Link
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default FooterLinks